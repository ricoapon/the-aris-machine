// Generated from src/antlr4/Aris.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { ArisListener } from "./ArisListener";
import { ArisVisitor } from "./ArisVisitor";


export class ArisParser extends Parser {
	public static readonly ADD = 1;
	public static readonly COPY = 2;
	public static readonly MOVE = 3;
	public static readonly TO = 4;
	public static readonly INPUT = 5;
	public static readonly OUTPUT = 6;
	public static readonly LOOP = 7;
	public static readonly CURLY_OPEN = 8;
	public static readonly CURLY_CLOSED = 9;
	public static readonly MEMORY_SLOT = 10;
	public static readonly MEMORY_SLOT_NUMBER = 11;
	public static readonly MEMORY_SLOT_NAME = 12;
	public static readonly NEWLINE = 13;
	public static readonly LINE_COMMENT = 14;
	public static readonly UNIDENTIFIED = 15;
	public static readonly WHITESPACE = 16;
	public static readonly ERROR_CHARACTER = 17;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_action = 3;
	public static readonly RULE_move = 4;
	public static readonly RULE_copy = 5;
	public static readonly RULE_add = 6;
	public static readonly RULE_loop = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "expression", "action", "move", "copy", "add", "loop",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'add'", "'copy'", "'move'", "'to'", "'input'", "'output'", 
		"'loop'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "COPY", "MOVE", "TO", "INPUT", "OUTPUT", "LOOP", "CURLY_OPEN", 
		"CURLY_CLOSED", "MEMORY_SLOT", "MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", 
		"NEWLINE", "LINE_COMMENT", "UNIDENTIFIED", "WHITESPACE", "ERROR_CHARACTER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ArisParser._LITERAL_NAMES, ArisParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ArisParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "Aris.g4"; }

	// @Override
	public get ruleNames(): string[] { return ArisParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ArisParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ArisParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ArisParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 16;
				this.line();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArisParser.ADD) | (1 << ArisParser.COPY) | (1 << ArisParser.MOVE) | (1 << ArisParser.LOOP))) !== 0));
			this.state = 21;
			this.match(ArisParser.EOF);
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
		this.enterRule(_localctx, 2, ArisParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this.expression();
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ArisParser.NEWLINE) {
				{
				{
				this.state = 24;
				this.match(ArisParser.NEWLINE);
				}
				}
				this.state = 29;
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
		this.enterRule(_localctx, 4, ArisParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 30;
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
		this.enterRule(_localctx, 6, ArisParser.RULE_action);
		try {
			this.state = 36;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ArisParser.COPY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 32;
				this.copy();
				}
				break;
			case ArisParser.MOVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 33;
				this.move();
				}
				break;
			case ArisParser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 34;
				this.add();
				}
				break;
			case ArisParser.LOOP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 35;
				this.loop();
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
		this.enterRule(_localctx, 8, ArisParser.RULE_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(ArisParser.MOVE);
			this.state = 39;
			_la = this._input.LA(1);
			if (!(_la === ArisParser.INPUT || _la === ArisParser.MEMORY_SLOT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 40;
			this.match(ArisParser.TO);
			this.state = 41;
			_la = this._input.LA(1);
			if (!(_la === ArisParser.OUTPUT || _la === ArisParser.MEMORY_SLOT)) {
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
		this.enterRule(_localctx, 10, ArisParser.RULE_copy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(ArisParser.COPY);
			this.state = 44;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 45;
			this.match(ArisParser.TO);
			this.state = 46;
			_la = this._input.LA(1);
			if (!(_la === ArisParser.OUTPUT || _la === ArisParser.MEMORY_SLOT)) {
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
	public add(): AddContext {
		let _localctx: AddContext = new AddContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ArisParser.RULE_add);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 48;
			this.match(ArisParser.ADD);
			this.state = 49;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 50;
			this.match(ArisParser.TO);
			this.state = 51;
			this.match(ArisParser.MEMORY_SLOT);
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
	public loop(): LoopContext {
		let _localctx: LoopContext = new LoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ArisParser.RULE_loop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(ArisParser.LOOP);
			this.state = 54;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 55;
			this.match(ArisParser.NEWLINE);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArisParser.ADD) | (1 << ArisParser.COPY) | (1 << ArisParser.MOVE) | (1 << ArisParser.LOOP))) !== 0)) {
				{
				{
				this.state = 56;
				this.line();
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 62;
			this.match(ArisParser.CURLY_CLOSED);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x13C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03\x1C\n\x03\f\x03\x0E\x03\x1F\v" +
		"\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\'\n\x05\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x07\t<\n\t" +
		"\f\t\x0E\t?\v\t\x03\t\x03\t\x03\t\x02\x02\x02\n\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x02\x04\x04\x02\x07\x07\f\f\x04\x02" +
		"\b\b\f\f\x02@\x02\x13\x03\x02\x02\x02\x04\x19\x03\x02\x02\x02\x06 \x03" +
		"\x02\x02\x02\b&\x03\x02\x02\x02\n(\x03\x02\x02\x02\f-\x03\x02\x02\x02" +
		"\x0E2\x03\x02\x02\x02\x107\x03\x02\x02\x02\x12\x14\x05\x04\x03\x02\x13" +
		"\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x13\x03\x02\x02\x02\x15" +
		"\x16\x03\x02\x02\x02\x16\x17\x03\x02\x02\x02\x17\x18\x07\x02\x02\x03\x18" +
		"\x03\x03\x02\x02\x02\x19\x1D\x05\x06\x04\x02\x1A\x1C\x07\x0F\x02\x02\x1B" +
		"\x1A\x03\x02\x02\x02\x1C\x1F\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02\x1D" +
		"\x1E\x03\x02\x02\x02\x1E\x05\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02 " +
		"!\x05\b\x05\x02!\x07\x03\x02\x02\x02\"\'\x05\f\x07\x02#\'\x05\n\x06\x02" +
		"$\'\x05\x0E\b\x02%\'\x05\x10\t\x02&\"\x03\x02\x02\x02&#\x03\x02\x02\x02" +
		"&$\x03\x02\x02\x02&%\x03\x02\x02\x02\'\t\x03\x02\x02\x02()\x07\x05\x02" +
		"\x02)*\t\x02\x02\x02*+\x07\x06\x02\x02+,\t\x03\x02\x02,\v\x03\x02\x02" +
		"\x02-.\x07\x04\x02\x02./\x07\f\x02\x02/0\x07\x06\x02\x0201\t\x03\x02\x02" +
		"1\r\x03\x02\x02\x0223\x07\x03\x02\x0234\x07\f\x02\x0245\x07\x06\x02\x02" +
		"56\x07\f\x02\x026\x0F\x03\x02\x02\x0278\x07\t\x02\x0289\x07\n\x02\x02" +
		"9=\x07\x0F\x02\x02:<\x05\x04\x03\x02;:\x03\x02\x02\x02<?\x03\x02\x02\x02" +
		"=;\x03\x02\x02\x02=>\x03\x02\x02\x02>@\x03\x02\x02\x02?=\x03\x02\x02\x02" +
		"@A\x07\v\x02\x02A\x11\x03\x02\x02\x02\x06\x15\x1D&=";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ArisParser.__ATN) {
			ArisParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ArisParser._serializedATN));
		}

		return ArisParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ArisParser.EOF, 0); }
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
	public get ruleIndex(): number { return ArisParser.RULE_program; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
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
			return this.getTokens(ArisParser.NEWLINE);
		} else {
			return this.getToken(ArisParser.NEWLINE, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_line; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterLine) {
			listener.enterLine(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitLine) {
			listener.exitLine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
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
	public get ruleIndex(): number { return ArisParser.RULE_expression; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
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
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_action; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterAction) {
			listener.enterAction(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitAction) {
			listener.exitAction(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitAction) {
			return visitor.visitAction(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public MOVE(): TerminalNode { return this.getToken(ArisParser.MOVE, 0); }
	public TO(): TerminalNode { return this.getToken(ArisParser.TO, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArisParser.MEMORY_SLOT);
		} else {
			return this.getToken(ArisParser.MEMORY_SLOT, i);
		}
	}
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.INPUT, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.OUTPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_move; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterMove) {
			listener.enterMove(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitMove) {
			listener.exitMove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitMove) {
			return visitor.visitMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CopyContext extends ParserRuleContext {
	public COPY(): TerminalNode { return this.getToken(ArisParser.COPY, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArisParser.MEMORY_SLOT);
		} else {
			return this.getToken(ArisParser.MEMORY_SLOT, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(ArisParser.TO, 0); }
	public OUTPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.OUTPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_copy; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterCopy) {
			listener.enterCopy(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitCopy) {
			listener.exitCopy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitCopy) {
			return visitor.visitCopy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddContext extends ParserRuleContext {
	public ADD(): TerminalNode { return this.getToken(ArisParser.ADD, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArisParser.MEMORY_SLOT);
		} else {
			return this.getToken(ArisParser.MEMORY_SLOT, i);
		}
	}
	public TO(): TerminalNode { return this.getToken(ArisParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_add; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(ArisParser.LOOP, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ArisParser.CURLY_OPEN, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(ArisParser.NEWLINE, 0); }
	public CURLY_CLOSED(): TerminalNode { return this.getToken(ArisParser.CURLY_CLOSED, 0); }
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
	public get ruleIndex(): number { return ArisParser.RULE_loop; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterLoop) {
			listener.enterLoop(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitLoop) {
			listener.exitLoop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitLoop) {
			return visitor.visitLoop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


