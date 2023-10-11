/* This example parses PL/SQL code and produces a list of tables it touches */
import * as url from "node:url";
import { ParseTreeWalker, ParseTreeListener } from "antlr4";
import {
  PlSqlParserListener,
  General_table_refContext,
  Table_refContext,
  Type_declarationContext,
  Type_nameContext,
  Type_specContext,
  getParserFromFile,
} from "../../build/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const parser = await getParserFromFile(__dirname + "/sample.psp");

class TouchedTablesListener
  extends ParseTreeListener
  implements PlSqlParserListener
{
  touchedTables: string[] = [];

  userTypes: string[] = [];

  maybeAddTouchedTable(tableName: string) {
    if (!this.touchedTables.includes(tableName)) {
      this.touchedTables.push(tableName);
    }
  }

  enterTable_ref(ctx: Table_refContext) {
    this.maybeAddTouchedTable(ctx.getText());
  }

  enterGeneral_table_ref(ctx: General_table_refContext) {
    this.maybeAddTouchedTable(ctx.getText());
  }

  enterType_name(ctx: Type_nameContext) {
    let name = ctx.getText();

    if (name.includes(".")) {
      name = name.split(".")[0];
    }

    if (
      ctx.parentCtx instanceof Type_specContext &&
      !this.userTypes.includes(name)
    ) {
      this.maybeAddTouchedTable(name);
    }
  }

  enterType_declaration(ctx: Type_declarationContext) {
    const typeName = ctx.identifier().getText();

    if (this.userTypes.find((type) => type === typeName)) {
      return;
    }

    this.userTypes.push(typeName);
  }
}

const listener = new TouchedTablesListener();
// Use the entry point for listeners
ParseTreeWalker.DEFAULT.walk(listener, parser.sql_script());

console.log(listener.touchedTables);
