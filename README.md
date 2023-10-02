<table><tr><td><img src="https://avatars.githubusercontent.com/u/144829329?s=200&v=4" /></td><td>

<h2>PL/SQL parser written in TypeScript</h2>
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

Being able to easily parse PL/SQL code can be an incredibly powerful tool in your arsenal. Combined with our [PL/SQL Viewer](https://tools.griffiths-waite.co.uk/plsql-viewer), you can quickly and easily take advantage of legacy code by demystifying it.

**Check out the [examples within this repository](/examples) to see how you can use this package to parse PL/SQL code.**

## Installation

```bash
npm install @griffithswaite/ts-plsql-parser
```

## Usage

Antlr produces two methods for parsing code: a visitor and a listener. We also provide a method for parsing code into a single JSON object, which is useful for quick parsing and debugging. You can read more about Antlr's visitor and listener patterns [here](https://github.com/antlr/antlr4/blob/487cb28bd359587e67794b25b144b7df83ddf1a2/doc/typescript-target.md#L66).

For brevity, we have documented only the listener approach below so you can lift it and get started.

### Listener

```typescript
import {
  ParseTreeListener,
  PlSqlParserListener,
  getParserFromFile,
} from "@griffithswaite/ts-plsql-parser";

const parser = getParserFromFile(__dirname + "/your-code.pbp");

class YourListenerListener
  extends ParseTreeListener
  implements PlSqlParserListener
{
  enterUnit_statement(ctx: PlSqlParser.Unit_statementContext) {
    // Do something when entering a unit_statement
  }
}

const listener = new YourListenerListener();
// Use the entry point for listeners
ParseTreeWalker.DEFAULT.walk(listener, parser.unit_statement());
```
