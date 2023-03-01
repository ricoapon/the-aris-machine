// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./HumansParser";
import { LineContext } from "./HumansParser";
import { ExpressionContext } from "./HumansParser";
import { ActionContext } from "./HumansParser";
import { MoveContext } from "./HumansParser";
import { CopyContext } from "./HumansParser";
import { AddContext } from "./HumansParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `HumansParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface HumansVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `HumansParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.line`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLine?: (ctx: LineContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAction?: (ctx: ActionContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove?: (ctx: MoveContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.copy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopy?: (ctx: CopyContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.add`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd?: (ctx: AddContext) => Result;
}

