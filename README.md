<table><tr><td><img src="https://avatars.githubusercontent.com/u/144829329?s=200&v=4" /></td><td>

<h2>PL/SQL Parser in TypeScript</h2>
<p>Generated using <a href="https://github.com/antlr/antlr4">Antlr4</a>. Package and examples provided by <a href="https://griffiths-waite.co.uk">Griffiths Waite</a>.</p>

</td></tr></table>

## What is Antlr?

From the docs: "**ANTLR** (ANother Tool for Language Recognition) is a powerful parser generator for reading, processing, executing, or translating structured text or binary files. It's widely used to build languages, tools, and frameworks. From a grammar, ANTLR generates a parser that can build parse trees and also generates a listener interface (or visitor) that makes it easy to respond to the recognition of phrases of interest."

Find out more about Antlr on [its website](https://www.antlr.org/).

## Why would I want to parse PL/SQL?

Parsing code such as PL/SQL can be useful for a number of reasons, especially in Enterprise environments (or other environments where you have a lot of legacy code). For example:

- Generate documentation from your codebase.
- Create a list of all the functions and procedures in your codebase.
- Generate type-safe consumer code for your API.
- Find unused columns on your tables.
- You can use it... to deduce just about anything you want from your code.

Being able to easily parse PL/SQL code can be an incredibly powerful tool in your arsenal for interrogating what your code is doing. Combined with our [PL/SQL Viewer](https://plsql-ast-viewer.vercel.app/), you can quickly and easily take advantage of legacy code by interrogating it.

**Check out the [examples within this repository](/examples) to see how you can use this package to parse PL/SQL code.**

To try out an example, you can pull the repo and after installing dependencies do the following:
```
node --loader=ts-node/esm examples/interface-generator/index.ts
```

## Installation

```bash
npm install @griffithswaite/ts-plsql-parser
```

## Usage

Antlr produces two methods for parsing code: a visitor and a listener. We also provide a method for parsing code into a single JSON representation of the tree (`getParsedNodes`), this can be useful for quick parsing and debugging. You can read more about Antlr's visitor and listener patterns [here](https://github.com/antlr/antlr4/blob/487cb28bd359587e67794b25b144b7df83ddf1a2/doc/typescript-target.md#L66).

The listener method is documented below in ESM format. If you're using CommonJS you may have to modify this code (such as removing the node:url import and __dirname definition).


### Listener

```typescript
import * as url from "node:url";
import { ParseTreeWalker, ParseTreeListener } from "antlr4";
import {
  ParseTreeListener,
  PlSqlParserListener,
  getParserFromFile,
} from "@griffithswaite/ts-plsql-parser";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
const parser = getParserFromFile(__dirname + "/your-code.pbp");

class YourListener
  extends ParseTreeListener
  implements PlSqlParserListener
{
  enterUnit_statement(ctx: PlSqlParser.Unit_statementContext) {
    // Do something when entering a unit_statement
  }
}

const listener = new YourListener();
// Use the entry point for listeners
ParseTreeWalker.DEFAULT.walk(listener, parser.sql_script());
```
