// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./HumansParser";
import { LineContext } from "./HumansParser";
import { ExpressionContext } from "./HumansParser";
import { ActionContext } from "./HumansParser";
import { MoveContext } from "./HumansParser";
import { CopyContext } from "./HumansParser";
import { AddContext } from "./HumansParser";
import { LoopContext } from "./HumansParser";


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
	 * Enter a parse tree produced by `HumansParser.move`.
	 * @param ctx the parse tree
	 */
	enterMove?: (ctx: MoveContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.move`.
	 * @param ctx the parse tree
	 */
	exitMove?: (ctx: MoveContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.copy`.
	 * @param ctx the parse tree
	 */
	enterCopy?: (ctx: CopyContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.copy`.
	 * @param ctx the parse tree
	 */
	exitCopy?: (ctx: CopyContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.add`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.add`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.loop`.
	 * @param ctx the parse tree
	 */
	enterLoop?: (ctx: LoopContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.loop`.
	 * @param ctx the parse tree
	 */
	exitLoop?: (ctx: LoopContext) => void;
}

