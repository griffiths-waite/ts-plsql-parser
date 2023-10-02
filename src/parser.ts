import {
  CharStream,
  CommonTokenStream,
  FileStream,
  ParserRuleContext,
  RecognitionException,
} from "antlr4";
import PlSqlLexer from "./antlr/PlSqlLexer";
import PlSqlParser from "./antlr/PlSqlParser";

export * from "./antlr/PlSqlParser";
export * from "./antlr/PlSqlLexer";

/**
 * Get a parser from a string containing PL/SQL code.
 * @param input String containing PL/SQL code
 * @returns PlSqlParser
 */
export function getParserFromInput(input: string) {
  const inputStream = new CharStream(input);

  let lexer = new PlSqlLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new PlSqlParser(tokenStream);

  return parser;
}

/**
 * Get a parser from a file containing PL/SQL code.
 * @param inputFile Path to file containing PL/SQL code
 * @returns PlSqlParser
 */
export function getParserFromFile(inputFile: string) {
  const inputStream = new FileStream(inputFile);

  let lexer = new PlSqlLexer(inputStream);
  let tokenStream = new CommonTokenStream(lexer);
  let parser = new PlSqlParser(tokenStream);

  return parser;
}

/**
 * Given a multiline string, a character position, and a line number, return the line number
 * and character position of the character that is at the given position in the string.
 * @param str Entire input string
 * @param position Character position
 * @param line Line number
 * @returns [line number, character position]
 */
function getLineAndCharacterFromPosition(
  str: string,
  position: number,
  line: number
): [number, number] {
  let lineStart = 0;
  let lineEnd = str.indexOf("\n");
  let lineNum = 1;

  while (lineNum < line) {
    lineStart = lineEnd + 1;
    lineEnd = str.indexOf("\n", lineStart);
    lineNum++;
  }

  return [lineNum, position - lineStart + 1];
}

type ParsedNode =
  | {
      type: string;
      text: string;
      start: string | null;
      stop: string | null;
      nodes: ParsedNode[];
    }
  | RecognitionException;

/**
 * Given a string containing PL/SQL code and a parser tree, return a nested tree of nodes
 * @param input
 * @param tree
 * @returns { nodes: ParsedNode[], stats: Record<string, number> }
 */
export function getParsedNodes(
  input: string,
  tree: ParserRuleContext
): { nodes: ParsedNode[]; stats: Record<string, number> } {
  let nodeStats: any = {};

  const printNode = (node: ParserRuleContext): ParsedNode => {
    let start = null;
    let stop = null;

    if (node.exception) {
      console.log(node.exception);
      return node.exception;
    }

    const type = node.constructor.name;

    nodeStats[type] = (nodeStats[type] || 0) + 1;

    if (node.start) {
      start = getLineAndCharacterFromPosition(
        input,
        node.start.start,
        node.start.line
      ).join(":");
    }

    if (node.stop) {
      const stopPos = getLineAndCharacterFromPosition(
        input,
        node.stop.stop,
        node.stop.line
      );

      stop = `${stopPos[0]}:${stopPos[1] + 1}`;
    }

    return {
      type: type,
      text:
        node.start && node.stop
          ? input.substring(node.start.start, node.stop.stop + 1)
          : node.getText(),
      start: start,
      stop: stop,
      nodes: ((node.children as ParserRuleContext[]) || []).map(
        printNode
      ) as ParsedNode[],
    };
  };

  return { nodes: [printNode(tree)], stats: nodeStats };
}
