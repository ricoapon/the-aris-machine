import {HumansListener} from "./generated/HumansListener";
import {HumansParser, MoveContext} from "./generated/HumansParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {HumansLexer} from "./generated/HumansLexer";
import {ParseTreeWalker} from "antlr4ts/tree";

export class Parser {
  parse() {
    const inputStream = CharStreams.fromString('(1 + 1) * 3');
    const lexer = new HumansLexer(inputStream);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new HumansParser(tokenStream);
    const listener = new MyListener();

    // @ts-ignore
    return ParseTreeWalker.DEFAULT.walk(listener, parser.program());
  }
}

class MyListener implements HumansListener {
  enterMove(ctx: MoveContext): void {
    console.log('Move ' + ctx.DIRECTION())
  }
}
