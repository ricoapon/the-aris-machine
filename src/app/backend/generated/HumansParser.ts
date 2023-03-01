// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { HumansListener } from "./HumansListener";
import { HumansVisitor } from "./HumansVisitor";


export class HumansParser extends Parser {
	public static readonly ADD = 1;
	public static readonly COPY = 2;
	public static readonly MOVE = 3;
	public static readonly TO = 4;
	public static readonly INPUT = 5;
	public static readonly OUTPUT = 6;
	public static readonly MEMORY_SLOT = 7;
	public static readonly MEMORY_SLOT_NUMBER = 8;
	public static readonly MEMORY_SLOT_NAME = 9;
	public static readonly NEWLINE = 10;
	public static readonly LINE_COMMENT = 11;
	public static readonly UNIDENTIFIED = 12;
	public static readonly WHITESPACE = 13;
	public static readonly ERROR_CHARACTER = 14;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_action = 3;
	public static readonly RULE_move = 4;
	public static readonly RULE_copy = 5;
	public static readonly RULE_add = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "expression", "action", "move", "copy", "add",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'add'", "'copy'", "'move'", "'to'", "'input'", "'output'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "COPY", "MOVE", "TO", "INPUT", "OUTPUT", "MEMORY_SLOT", 
		"MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", "NEWLINE", "LINE_COMMENT", "UNIDENTIFIED", 
		"WHITESPACE", "ERROR_CHARACTER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HumansParser._LITERAL_NAMES, HumansParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HumansParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Humans.g4"; }

	// @Override
	public get ruleNames(): string[] { return HumansParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return HumansParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(HumansParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, HumansParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 15;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 14;
				this.line();
				}
				}
				this.state = 17;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HumansParser.ADD) | (1 << HumansParser.COPY) | (1 << HumansParser.MOVE))) !== 0));
			this.state = 19;
			this.match(HumansParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, HumansParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 21;
			this.expression();
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HumansParser.NEWLINE) {
				{
				{
				this.state = 22;
				this.match(HumansParser.NEWLINE);
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, HumansParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this.action();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HumansParser.RULE_action);
		try {
			this.state = 33;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HumansParser.COPY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.copy();
				}
				break;
			case HumansParser.MOVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.move();
				}
				break;
			case HumansParser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 32;
				this.add();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public move(): MoveContext {
		let _localctx: MoveContext = new MoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HumansParser.RULE_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(HumansParser.MOVE);
			this.state = 36;
			_la = this._input.LA(1);
			if (!(_la === HumansParser.INPUT || _la === HumansParser.MEMORY_SLOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 37;
			this.match(HumansParser.TO);
			this.state = 38;
			_la = this._input.LA(1);
			if (!(_la === HumansParser.OUTPUT || _la === HumansParser.MEMORY_SLOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public copy(): CopyContext {
		let _localctx: CopyContext = new CopyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HumansParser.RULE_copy);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(HumansParser.COPY);
			this.state = 41;
			this.match(HumansParser.MEMORY_SLOT);
			this.state = 42;
			this.match(HumansParser.TO);
			this.state = 43;
			this.match(HumansParser.MEMORY_SLOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public add(): AddContext {
		let _localctx: AddContext = new AddContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HumansParser.RULE_add);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(HumansParser.ADD);
			this.state = 46;
			this.match(HumansParser.MEMORY_SLOT);
			this.state = 47;
			this.match(HumansParser.TO);
			this.state = 48;
			this.match(HumansParser.MEMORY_SLOT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x105\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05$\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x02\x04\x04\x02\x07\x07\t\t\x03\x02\b\t\x021\x02\x11\x03" +
		"\x02\x02\x02\x04\x17\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b#\x03\x02" +
		"\x02\x02\n%\x03\x02\x02\x02\f*\x03\x02\x02\x02\x0E/\x03\x02\x02\x02\x10" +
		"\x12\x05\x04\x03\x02\x11\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13" +
		"\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15" +
		"\x16\x07\x02\x02\x03\x16\x03\x03\x02\x02\x02\x17\x1B\x05\x06\x04\x02\x18" +
		"\x1A\x07\f\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B" +
		"\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02\x1D" +
		"\x1B\x03\x02\x02\x02\x1E\x1F\x05\b\x05\x02\x1F\x07\x03\x02\x02\x02 $\x05" +
		"\f\x07\x02!$\x05\n\x06\x02\"$\x05\x0E\b\x02# \x03\x02\x02\x02#!\x03\x02" +
		"\x02\x02#\"\x03\x02\x02\x02$\t\x03\x02\x02\x02%&\x07\x05\x02\x02&\'\t" +
		"\x02\x02\x02\'(\x07\x06\x02\x02()\t\x03\x02\x02)\v\x03\x02\x02\x02*+\x07" +
		"\x04\x02\x02+,\x07\t\x02\x02,-\x07\x06\x02\x02-.\x07\t\x02\x02.\r\x03" +
		"\x02\x02\x02/0\x07\x03\x02\x0201\x07\t\x02\x0212\x07\x06\x02\x0223\x07" +
		"\t\x02\x023\x0F\x03\x02\x02\x02\x05\x13\x1B#";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HumansParser.__ATN) {
			HumansParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HumansParser._serializedATN));
		}

		return HumansParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(HumansParser.EOF, 0); }
	public line(): LineContext[];
	public line(i: number): LineContext;
	public line(i?: number): LineContext | LineContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineContext);
		} else {
			return this.getRuleContext(i, LineContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_program; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public NEWLINE(): TerminalNode[];
	public NEWLINE(i: number): TerminalNode;
	public NEWLINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HumansParser.NEWLINE);
		} else {
			return this.getToken(HumansParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_line; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitLine) {
			return visitor.visitLine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public action(): ActionContext {
		return this.getRuleContext(0, ActionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_expression; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitExpression) {
			return visitor.visitExpression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ActionContext extends ParserRuleContext {
	public copy(): CopyContext | undefined {
		return this.tryGetRuleContext(0, CopyContext);
	}
	public move(): MoveContext | undefined {
		return this.tryGetRuleContext(0, MoveContext);
	}
	public add(): AddContext | undefined {
		return this.tryGetRuleContext(0, AddContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_action; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public MOVE(): TerminalNode { return this.getToken(HumansParser.MOVE, 0); }
	public TO(): TerminalNode { return this.getToken(HumansParser.TO, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HumansParser.MEMORY_SLOT);
		} else {
			return this.getToken(HumansParser.MEMORY_SLOT, i);
		}
	}
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(HumansParser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(HumansParser.OUTPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_move; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterMove) {
			listener.enterMove(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitMove) {
			listener.exitMove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CopyContext extends ParserRuleContext {
	public COPY(): TerminalNode { return this.getToken(HumansParser.COPY, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HumansParser.MEMORY_SLOT);
		} else {
			return this.getToken(HumansParser.MEMORY_SLOT, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(HumansParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_copy; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterCopy) {
			listener.enterCopy(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitCopy) {
			listener.exitCopy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitCopy) {
			return visitor.visitCopy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddContext extends ParserRuleContext {
	public ADD(): TerminalNode { return this.getToken(HumansParser.ADD, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(HumansParser.MEMORY_SLOT);
		} else {
			return this.getToken(HumansParser.MEMORY_SLOT, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(HumansParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_add; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


