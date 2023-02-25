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
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly MEMORY_SLOT_NUMBER = 4;
	public static readonly MEMORY_SLOT_NAME = 5;
	public static readonly MEMORY_SLOT = 6;
	public static readonly WHITESPACE = 7;
	public static readonly NEWLINE = 8;
	public static readonly LINE_COMMENT = 9;
	public static readonly ERROR_CHARACTER = 10;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_action = 3;
	public static readonly RULE_copyto = 4;
	public static readonly RULE_inbox = 5;
	public static readonly RULE_outbox = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "expression", "action", "copyto", "inbox", "outbox",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'copyto'", "'inbox'", "'outbox'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", 
		"MEMORY_SLOT", "WHITESPACE", "NEWLINE", "LINE_COMMENT", "ERROR_CHARACTER",
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
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HumansParser.T__0) | (1 << HumansParser.T__1) | (1 << HumansParser.T__2))) !== 0));
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
			case HumansParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.copyto();
				}
				break;
			case HumansParser.T__1:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.inbox();
				}
				break;
			case HumansParser.T__2:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 32;
				this.outbox();
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
	public copyto(): CopytoContext {
		let _localctx: CopytoContext = new CopytoContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HumansParser.RULE_copyto);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 35;
			this.match(HumansParser.T__0);
			this.state = 36;
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
	public inbox(): InboxContext {
		let _localctx: InboxContext = new InboxContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, HumansParser.RULE_inbox);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 38;
			this.match(HumansParser.T__1);
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
	public outbox(): OutboxContext {
		let _localctx: OutboxContext = new OutboxContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HumansParser.RULE_outbox);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 40;
			this.match(HumansParser.T__2);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\f-\x04\x02\t" +
		"\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07\t" +
		"\x07\x04\b\t\b\x03\x02\x06\x02\x12\n\x02\r\x02\x0E\x02\x13\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x07\x03\x1A\n\x03\f\x03\x0E\x03\x1D\v\x03\x03\x04" +
		"\x03\x04\x03\x05\x03\x05\x03\x05\x05\x05$\n\x05\x03\x06\x03\x06\x03\x06" +
		"\x03\x07\x03\x07\x03\b\x03\b\x03\b\x02\x02\x02\t\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x02\x02\x02)\x02\x11\x03\x02\x02\x02\x04\x17" +
		"\x03\x02\x02\x02\x06\x1E\x03\x02\x02\x02\b#\x03\x02\x02\x02\n%\x03\x02" +
		"\x02\x02\f(\x03\x02\x02\x02\x0E*\x03\x02\x02\x02\x10\x12\x05\x04\x03\x02" +
		"\x11\x10\x03\x02\x02\x02\x12\x13\x03\x02\x02\x02\x13\x11\x03\x02\x02\x02" +
		"\x13\x14\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02\x15\x16\x07\x02\x02\x03" +
		"\x16\x03\x03\x02\x02\x02\x17\x1B\x05\x06\x04\x02\x18\x1A\x07\n\x02\x02" +
		"\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03\x02\x02\x02" +
		"\x1B\x1C\x03\x02\x02\x02\x1C\x05\x03\x02\x02\x02\x1D\x1B\x03\x02\x02\x02" +
		"\x1E\x1F\x05\b\x05\x02\x1F\x07\x03\x02\x02\x02 $\x05\n\x06\x02!$\x05\f" +
		"\x07\x02\"$\x05\x0E\b\x02# \x03\x02\x02\x02#!\x03\x02\x02\x02#\"\x03\x02" +
		"\x02\x02$\t\x03\x02\x02\x02%&\x07\x03\x02\x02&\'\x07\b\x02\x02\'\v\x03" +
		"\x02\x02\x02()\x07\x04\x02\x02)\r\x03\x02\x02\x02*+\x07\x05\x02\x02+\x0F" +
		"\x03\x02\x02\x02\x05\x13\x1B#";
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
	public copyto(): CopytoContext | undefined {
		return this.tryGetRuleContext(0, CopytoContext);
	}
	public inbox(): InboxContext | undefined {
		return this.tryGetRuleContext(0, InboxContext);
	}
	public outbox(): OutboxContext | undefined {
		return this.tryGetRuleContext(0, OutboxContext);
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


export class CopytoContext extends ParserRuleContext {
	public MEMORY_SLOT(): TerminalNode { return this.getToken(HumansParser.MEMORY_SLOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_copyto; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterCopyto) {
			listener.enterCopyto(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitCopyto) {
			listener.exitCopyto(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitCopyto) {
			return visitor.visitCopyto(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InboxContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_inbox; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterInbox) {
			listener.enterInbox(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitInbox) {
			listener.exitInbox(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitInbox) {
			return visitor.visitInbox(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class OutboxContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_outbox; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterOutbox) {
			listener.enterOutbox(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitOutbox) {
			listener.exitOutbox(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitOutbox) {
			return visitor.visitOutbox(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


