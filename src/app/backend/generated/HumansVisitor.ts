// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
	 * Visit a parse tree produced by `HumansParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition?: (ctx: ConditionContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.condition_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondition_part?: (ctx: Condition_partContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.move`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMove?: (ctx: MoveContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.pickUp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPickUp?: (ctx: PickUpContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.drop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop?: (ctx: DropContext) => Result;

	/**
	 * Visit a parse tree produced by `HumansParser.scan`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScan?: (ctx: ScanContext) => Result;
}

