/* This example uses the listener method to generate a TypeScript interface from a procedure definition */
import * as url from "node:url";
import { ParseTreeWalker, ParseTreeListener } from "antlr4";
import {
  PlSqlParserListener,
  Create_packageContext,
  Procedure_specContext,
  getParserFromFile,
} from "../../build/index.js";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const parser = await getParserFromFile(__dirname + "/sample.psp");

interface Parameter {
  id: string;
  type: string;
}

interface Procedure {
  name: string;
  input: Parameter[];
  output: Parameter[];
  error?: Parameter[];
}

interface Package {
  name: string;
  procedures: Procedure[];
}

class ProcedureTypeListener
  extends ParseTreeListener
  implements PlSqlParserListener
{
  activePackage: string | null = null;
  activeProcedure: string | null = null;

  packageProcedures: Package[] = [];

  enterCreate_package(ctx: Create_packageContext) {
    const packageName = ctx.package_name(0).getText();

    // Set the active package name
    this.activePackage = packageName;

    // Create a new package
    this.packageProcedures.push({
      name: packageName,
      procedures: [],
    });
  }

  exitCreate_package(ctx: Create_packageContext) {
    this.activePackage = null;
  }

  enterProcedure_spec(ctx: Procedure_specContext) {
    const procedureName = ctx.identifier().getText();

    // Set the active procedure name
    this.activeProcedure = procedureName;

    // Find the active package
    const activePackage = this.packageProcedures.find(
      (p) => p.name === this.activePackage
    );

    let newProcedure = {
      name: procedureName,
      input: [],
      output: [],
      error: [],
    } as Procedure;

    // Deduce input parameters
    (ctx.parameter_list() || []).forEach((p) => {
      const id = p.parameter_name().identifier().getText();

      let type = "NCLOB";

      if (p.type_spec().datatype()) {
        type = p.type_spec().datatype().native_datatype_element().getText();
      }

      if (p.IN_list()?.length > 0 || p.INOUT_list()?.length > 0) {
        newProcedure.input.push({ id, type });
      }

      if (p.OUT_list()?.length > 0 || p.INOUT_list()?.length > 0) {
        if (id.startsWith("p_error_")) {
          newProcedure.error?.push({ id, type });
          return;
        }

        newProcedure.output.push({ id, type });
        return;
      }
    });

    // Create a new procedure
    activePackage?.procedures.push(newProcedure);
  }

  exitProcedure_spec(ctx: Procedure_specContext) {
    this.activeProcedure = null;
  }
}

const listener = new ProcedureTypeListener();
// Use the entry point for listeners
ParseTreeWalker.DEFAULT.walk(listener, parser.sql_script());

const typeMap = {
  VARCHAR2: "string",
  NUMBER: "number",
  DATE: "Date",
  BOOLEAN: "boolean",
  PLS_INTEGER: "number",
  BINARY_INTEGER: "number",
  RAW: "string",
  LONG: "string",
  "LONG RAW": "string",
  CHAR: "string",
  NCHAR: "string",
  NVARCHAR2: "string",
} as Record<string, string>;

// Crudely produce a TypeScript interface from the parsed procedures
listener.packageProcedures.forEach((p) => {
  console.log(`namespace ${p.name} {`);
  p.procedures.forEach((proc) => {
    console.log(`  interface ${proc.name}Input {`);
    proc.input.forEach((input) => {
      console.log(`    ${input.id}: ${typeMap?.[input.type] || "any"};`);
    });
    console.log(`  };\n`);

    console.log(`  interface ${proc.name}Output {`);
    proc.output.forEach((output) => {
      console.log(`    ${output.id}: ${typeMap?.[output.type] || "any"};`);
    });
    console.log(`  };\n`);

    if (proc.error?.length) {
      console.log(`  interface ${proc.name}Error {`);
      proc.error.forEach((error) => {
        console.log(`    ${error.id}: ${typeMap?.[error.type] || "any"};`);
      });
      console.log(`  };\n`);
    }
  });
  console.log(`}\n`);
});
