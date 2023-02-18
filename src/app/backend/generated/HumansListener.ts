// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./HumansParser";
import { LineContext } from "./HumansParser";
import { ExpressionContext } from "./HumansParser";
import { ActionContext } from "./HumansParser";
import { If_statementContext } from "./HumansParser";
import { ConditionContext } from "./HumansParser";
import { Condition_partContext } from "./HumansParser";
import { MoveContext } from "./HumansParser";
import { PickUpContext } from "./HumansParser";
import { DropContext } from "./HumansParser";
import { ScanContext } from "./HumansParser";


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
	 * Enter a parse tree produced by `HumansParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.condition`.
	 * @param ctx the parse tree
	 */
	enterCondition?: (ctx: ConditionContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.condition`.
	 * @param ctx the parse tree
	 */
	exitCondition?: (ctx: ConditionContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.condition_part`.
	 * @param ctx the parse tree
	 */
	enterCondition_part?: (ctx: Condition_partContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.condition_part`.
	 * @param ctx the parse tree
	 */
	exitCondition_part?: (ctx: Condition_partContext) => void;

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
	 * Enter a parse tree produced by `HumansParser.pickUp`.
	 * @param ctx the parse tree
	 */
	enterPickUp?: (ctx: PickUpContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.pickUp`.
	 * @param ctx the parse tree
	 */
	exitPickUp?: (ctx: PickUpContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.drop`.
	 * @param ctx the parse tree
	 */
	enterDrop?: (ctx: DropContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.drop`.
	 * @param ctx the parse tree
	 */
	exitDrop?: (ctx: DropContext) => void;

	/**
	 * Enter a parse tree produced by `HumansParser.scan`.
	 * @param ctx the parse tree
	 */
	enterScan?: (ctx: ScanContext) => void;
	/**
	 * Exit a parse tree produced by `HumansParser.scan`.
	 * @param ctx the parse tree
	 */
	exitScan?: (ctx: ScanContext) => void;
}

