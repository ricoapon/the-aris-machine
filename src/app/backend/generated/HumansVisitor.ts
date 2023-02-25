// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProgramContext } from "./HumansParser";
import { LineContext } from "./HumansParser";
import { ExpressionContext } from "./HumansParser";
import { ActionContext } from "./HumansParser";
import { CopytoContext } from "./HumansParser";
import { InboxContext } from "./HumansParser";
import { OutboxContext } from "./HumansParser";


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
	 * Visit a parse tree produced by `HumansParser.copyto`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCopyto?: (ctx: CopytoContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.inbox`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInbox?: (ctx: InboxContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.outbox`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutbox?: (ctx: OutboxContext) => Result;
}

