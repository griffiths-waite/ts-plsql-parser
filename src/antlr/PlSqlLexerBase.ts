import { CharStream, Lexer } from "antlr4";

export default abstract class PlSqlLexerBase extends Lexer {
  self: PlSqlLexerBase;

  constructor(input: CharStream) {
    super(input);
    this.self = this;
  }

  IsNewlineAtPos(pos: number): boolean {
    const la = this._input.LA(pos);
    return la == -1 || String.fromCharCode(la) == "\n";
  }
}
