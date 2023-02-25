// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./HumansParser";
import { LineContext } from "./HumansParser";
import { ExpressionContext } from "./HumansParser";
import { ActionContext } from "./HumansParser";
import { CopytoContext } from "./HumansParser";
import { InboxContext } from "./HumansParser";
import { OutboxContext } from "./HumansParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `HumansParser`.
 */
export interface HumansListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `HumansParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.line`.
	 * @param ctx the parse tree
	 */
	enterLine?: (ctx: LineContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.line`.
	 * @param ctx the parse tree
	 */
	exitLine?: (ctx: LineContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.action`.
	 * @param ctx the parse tree
	 */
	enterAction?: (ctx: ActionContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.action`.
	 * @param ctx the parse tree
	 */
	exitAction?: (ctx: ActionContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.copyto`.
	 * @param ctx the parse tree
	 */
	enterCopyto?: (ctx: CopytoContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.copyto`.
	 * @param ctx the parse tree
	 */
	exitCopyto?: (ctx: CopytoContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.inbox`.
	 * @param ctx the parse tree
	 */
	enterInbox?: (ctx: InboxContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.inbox`.
	 * @param ctx the parse tree
	 */
	exitInbox?: (ctx: InboxContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.outbox`.
	 * @param ctx the parse tree
	 */
	enterOutbox?: (ctx: OutboxContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.outbox`.
	 * @param ctx the parse tree
	 */
	exitOutbox?: (ctx: OutboxContext) => void;
}

