# Run antlr build commands
antlr4 -o src/antlr -Dlanguage=TypeScript antlr/PlSqlParser.g4 -visitor;
antlr4 -o src/antlr -Dlanguage=TypeScript antlr/PlSqlLexer.g4;

# Move src/antlr/antlr to src/antlr
mv src/antlr/antlr/* src/antlr;

# Remove src/antlr/antlr
rm -rf src/antlr/antlr;

# Move non .ts files to antlr/ folder
mv src/antlr/*.interp antlr/;
mv src/antlr/*.tokens antlr/;

# In .ts files replace self. with this.
sed -i '' 's/self\./this\./g' src/antlr/*.ts;

# In ts files ensure all imports end in .js
# First replace PlSqlLexerBase"; in PlSqlLexer.ts
sed -i '' "s/PlSqlLexerBase';/PlSqlLexerBase.js';/g" src/antlr/PlSqlLexer.ts;

# Then replace PlSqlParserBase"; in PlSqlParser.ts
sed -i '' "s/PlSqlParserBase';/PlSqlParserBase.js';/g" src/antlr/PlSqlParser.ts;

# Then replace PlSqlParser"; in PlSqlParserVisitor.ts and PlSqlParserListener.ts
sed -i '' 's/PlSqlParser";/PlSqlParser.js";/g' src/antlr/PlSqlParserVisitor.ts;
sed -i '' 's/PlSqlParser";/PlSqlParser.js";/g' src/antlr/PlSqlParserListener.ts;

# Delete .antlr folder which may be created by VS Code...
rm -rf antlr/.antlr;