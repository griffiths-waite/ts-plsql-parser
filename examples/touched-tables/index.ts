/* This example parses PL/SQL code and produces a list of tables it touches */
import { ParseTreeWalker, ParseTreeListener } from "antlr4";
import PlSqlParserListener from "../../build/antlr/PlSqlParserListener";
import {
  General_table_refContext,
  Table_refContext,
  getParserFromFile,
} from "../../build/parser";

const parser = getParserFromFile(__dirname + "/sample.psp");

class TouchedTablesListener
  extends ParseTreeListener
  implements PlSqlParserListener
{
  touchedTables: string[] = [];

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
}

const listener = new TouchedTablesListener();
// Use the entry point for listeners
ParseTreeWalker.DEFAULT.walk(listener, parser.unit_statement());

console.log(listener.touchedTables);
