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
	public static readonly SUB = 2;
	public static readonly COPY = 3;
	public static readonly MOVE = 4;
	public static readonly TO = 5;
	public static readonly FROM = 6;
	public static readonly INPUT = 7;
	public static readonly OUTPUT = 8;
	public static readonly LOOP = 9;
	public static readonly IFZERO = 10;
	public static readonly IFNOTZERO = 11;
	public static readonly IFPOS = 12;
	public static readonly IFNEG = 13;
	public static readonly INCR = 14;
	public static readonly DECR = 15;
	public static readonly CURLY_OPEN = 16;
	public static readonly CURLY_CLOSED = 17;
	public static readonly MEMORY_SLOT = 18;
	public static readonly MEMORY_SLOT_NUMBER = 19;
	public static readonly MEMORY_SLOT_NAME = 20;
	public static readonly NEWLINE = 21;
	public static readonly LINE_COMMENT = 22;
	public static readonly UNIDENTIFIED = 23;
	public static readonly WHITESPACE = 24;
	public static readonly ERROR_CHARACTER = 25;
	public static readonly RULE_program = 0;
	public static readonly RULE_lines = 1;
	public static readonly RULE_line = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_action = 4;
	public static readonly RULE_move = 5;
	public static readonly RULE_copy = 6;
	public static readonly RULE_add = 7;
	public static readonly RULE_subtract = 8;
	public static readonly RULE_increment = 9;
	public static readonly RULE_decrement = 10;
	public static readonly RULE_loop = 11;
	public static readonly RULE_ifZero = 12;
	public static readonly RULE_ifNotZero = 13;
	public static readonly RULE_ifPos = 14;
	public static readonly RULE_ifNeg = 15;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "lines", "line", "expression", "action", "move", "copy", "add", 
		"subtract", "increment", "decrement", "loop", "ifZero", "ifNotZero", "ifPos", 
		"ifNeg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'add'", "'sub'", "'copy'", "'move'", "'to'", "'from'", "'input'", 
		"'output'", "'loop'", "'ifzero'", "'ifnotzero'", "'ifpos'", "'ifneg'", 
		"'incr'", "'decr'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "SUB", "COPY", "MOVE", "TO", "FROM", "INPUT", "OUTPUT", 
		"LOOP", "IFZERO", "IFNOTZERO", "IFPOS", "IFNEG", "INCR", "DECR", "CURLY_OPEN", 
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
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 32;
				this.line();
				}
				}
				this.state = 35;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArisParser.ADD) | (1 << ArisParser.SUB) | (1 << ArisParser.COPY) | (1 << ArisParser.MOVE) | (1 << ArisParser.LOOP) | (1 << ArisParser.IFZERO) | (1 << ArisParser.IFNOTZERO) | (1 << ArisParser.IFPOS) | (1 << ArisParser.IFNEG) | (1 << ArisParser.INCR) | (1 << ArisParser.DECR))) !== 0));
			this.state = 37;
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
	public lines(): LinesContext {
		let _localctx: LinesContext = new LinesContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ArisParser.RULE_lines);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 42;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArisParser.ADD) | (1 << ArisParser.SUB) | (1 << ArisParser.COPY) | (1 << ArisParser.MOVE) | (1 << ArisParser.LOOP) | (1 << ArisParser.IFZERO) | (1 << ArisParser.IFNOTZERO) | (1 << ArisParser.IFPOS) | (1 << ArisParser.IFNEG) | (1 << ArisParser.INCR) | (1 << ArisParser.DECR))) !== 0)) {
				{
				{
				this.state = 39;
				this.line();
				}
				}
				this.state = 44;
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
	public line(): LineContext {
		let _localctx: LineContext = new LineContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ArisParser.RULE_line);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.expression();
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ArisParser.NEWLINE) {
				{
				{
				this.state = 46;
				this.match(ArisParser.NEWLINE);
				}
				}
				this.state = 51;
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
		this.enterRule(_localctx, 6, ArisParser.RULE_expression);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 52;
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
		this.enterRule(_localctx, 8, ArisParser.RULE_action);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ArisParser.COPY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 54;
				this.copy();
				}
				break;
			case ArisParser.MOVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 55;
				this.move();
				}
				break;
			case ArisParser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 56;
				this.add();
				}
				break;
			case ArisParser.SUB:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 57;
				this.subtract();
				}
				break;
			case ArisParser.INCR:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 58;
				this.increment();
				}
				break;
			case ArisParser.DECR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 59;
				this.decrement();
				}
				break;
			case ArisParser.LOOP:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 60;
				this.loop();
				}
				break;
			case ArisParser.IFZERO:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 61;
				this.ifZero();
				}
				break;
			case ArisParser.IFNOTZERO:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 62;
				this.ifNotZero();
				}
				break;
			case ArisParser.IFPOS:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 63;
				this.ifPos();
				}
				break;
			case ArisParser.IFNEG:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 64;
				this.ifNeg();
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
		this.enterRule(_localctx, 10, ArisParser.RULE_move);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(ArisParser.MOVE);
			this.state = 68;
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
			this.state = 69;
			this.match(ArisParser.TO);
			this.state = 70;
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
		this.enterRule(_localctx, 12, ArisParser.RULE_copy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 72;
			this.match(ArisParser.COPY);
			this.state = 73;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 74;
			this.match(ArisParser.TO);
			this.state = 75;
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
		this.enterRule(_localctx, 14, ArisParser.RULE_add);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 77;
			this.match(ArisParser.ADD);
			this.state = 78;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 79;
			this.match(ArisParser.TO);
			this.state = 80;
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
	public subtract(): SubtractContext {
		let _localctx: SubtractContext = new SubtractContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ArisParser.RULE_subtract);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(ArisParser.SUB);
			this.state = 83;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 84;
			this.match(ArisParser.FROM);
			this.state = 85;
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
	public increment(): IncrementContext {
		let _localctx: IncrementContext = new IncrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ArisParser.RULE_increment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 87;
			this.match(ArisParser.INCR);
			this.state = 88;
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
	public decrement(): DecrementContext {
		let _localctx: DecrementContext = new DecrementContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ArisParser.RULE_decrement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 90;
			this.match(ArisParser.DECR);
			this.state = 91;
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
		this.enterRule(_localctx, 22, ArisParser.RULE_loop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(ArisParser.LOOP);
			this.state = 94;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 95;
			this.match(ArisParser.NEWLINE);
			this.state = 96;
			this.lines();
			this.state = 97;
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
	// @RuleVersion(0)
	public ifZero(): IfZeroContext {
		let _localctx: IfZeroContext = new IfZeroContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ArisParser.RULE_ifZero);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(ArisParser.IFZERO);
			this.state = 100;
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
			this.state = 101;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 102;
			this.match(ArisParser.NEWLINE);
			this.state = 103;
			this.lines();
			this.state = 104;
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
	// @RuleVersion(0)
	public ifNotZero(): IfNotZeroContext {
		let _localctx: IfNotZeroContext = new IfNotZeroContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ArisParser.RULE_ifNotZero);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 106;
			this.match(ArisParser.IFNOTZERO);
			this.state = 107;
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
			this.state = 108;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 109;
			this.match(ArisParser.NEWLINE);
			this.state = 110;
			this.lines();
			this.state = 111;
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
	// @RuleVersion(0)
	public ifPos(): IfPosContext {
		let _localctx: IfPosContext = new IfPosContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ArisParser.RULE_ifPos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(ArisParser.IFPOS);
			this.state = 114;
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
			this.state = 115;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 116;
			this.match(ArisParser.NEWLINE);
			this.state = 117;
			this.lines();
			this.state = 118;
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
	// @RuleVersion(0)
	public ifNeg(): IfNegContext {
		let _localctx: IfNegContext = new IfNegContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ArisParser.RULE_ifNeg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 120;
			this.match(ArisParser.IFNEG);
			this.state = 121;
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
			this.state = 122;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 123;
			this.match(ArisParser.NEWLINE);
			this.state = 124;
			this.lines();
			this.state = 125;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x1B\x82\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x03\x02\x06\x02$" +
		"\n\x02\r\x02\x0E\x02%\x03\x02\x03\x02\x03\x03\x07\x03+\n\x03\f\x03\x0E" +
		"\x03.\v\x03\x03\x04\x03\x04\x07\x042\n\x04\f\x04\x0E\x045\v\x04\x03\x05" +
		"\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06D\n\x06\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03\x0F\x03" +
		"\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03" +
		"\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x02\x02\x02\x12\x02\x02\x04" +
		"\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02" +
		"\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\x02\x04\x04\x02\t\t\x14\x14\x04" +
		"\x02\n\n\x14\x14\x02~\x02#\x03\x02\x02\x02\x04,\x03\x02\x02\x02\x06/\x03" +
		"\x02\x02\x02\b6\x03\x02\x02\x02\nC\x03\x02\x02\x02\fE\x03\x02\x02\x02" +
		"\x0EJ\x03\x02\x02\x02\x10O\x03\x02\x02\x02\x12T\x03\x02\x02\x02\x14Y\x03" +
		"\x02\x02\x02\x16\\\x03\x02\x02\x02\x18_\x03\x02\x02\x02\x1Ae\x03\x02\x02" +
		"\x02\x1Cl\x03\x02\x02\x02\x1Es\x03\x02\x02\x02 z\x03\x02\x02\x02\"$\x05" +
		"\x06\x04\x02#\"\x03\x02\x02\x02$%\x03\x02\x02\x02%#\x03\x02\x02\x02%&" +
		"\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x07\x02\x02\x03(\x03\x03\x02\x02" +
		"\x02)+\x05\x06\x04\x02*)\x03\x02\x02\x02+.\x03\x02\x02\x02,*\x03\x02\x02" +
		"\x02,-\x03\x02\x02\x02-\x05\x03\x02\x02\x02.,\x03\x02\x02\x02/3\x05\b" +
		"\x05\x0202\x07\x17\x02\x0210\x03\x02\x02\x0225\x03\x02\x02\x0231\x03\x02" +
		"\x02\x0234\x03\x02\x02\x024\x07\x03\x02\x02\x0253\x03\x02\x02\x0267\x05" +
		"\n\x06\x027\t\x03\x02\x02\x028D\x05\x0E\b\x029D\x05\f\x07\x02:D\x05\x10" +
		"\t\x02;D\x05\x12\n\x02<D\x05\x14\v\x02=D\x05\x16\f\x02>D\x05\x18\r\x02" +
		"?D\x05\x1A\x0E\x02@D\x05\x1C\x0F\x02AD\x05\x1E\x10\x02BD\x05 \x11\x02" +
		"C8\x03\x02\x02\x02C9\x03\x02\x02\x02C:\x03\x02\x02\x02C;\x03\x02\x02\x02" +
		"C<\x03\x02\x02\x02C=\x03\x02\x02\x02C>\x03\x02\x02\x02C?\x03\x02\x02\x02" +
		"C@\x03\x02\x02\x02CA\x03\x02\x02\x02CB\x03\x02\x02\x02D\v\x03\x02\x02" +
		"\x02EF\x07\x06\x02\x02FG\t\x02\x02\x02GH\x07\x07\x02\x02HI\t\x03\x02\x02" +
		"I\r\x03\x02\x02\x02JK\x07\x05\x02\x02KL\x07\x14\x02\x02LM\x07\x07\x02" +
		"\x02MN\t\x03\x02\x02N\x0F\x03\x02\x02\x02OP\x07\x03\x02\x02PQ\x07\x14" +
		"\x02\x02QR\x07\x07\x02\x02RS\x07\x14\x02\x02S\x11\x03\x02\x02\x02TU\x07" +
		"\x04\x02\x02UV\x07\x14\x02\x02VW\x07\b\x02\x02WX\x07\x14\x02\x02X\x13" +
		"\x03\x02\x02\x02YZ\x07\x10\x02\x02Z[\x07\x14\x02\x02[\x15\x03\x02\x02" +
		"\x02\\]\x07\x11\x02\x02]^\x07\x14\x02\x02^\x17\x03\x02\x02\x02_`\x07\v" +
		"\x02\x02`a\x07\x12\x02\x02ab\x07\x17\x02\x02bc\x05\x04\x03\x02cd\x07\x13" +
		"\x02\x02d\x19\x03\x02\x02\x02ef\x07\f\x02\x02fg\t\x02\x02\x02gh\x07\x12" +
		"\x02\x02hi\x07\x17\x02\x02ij\x05\x04\x03\x02jk\x07\x13\x02\x02k\x1B\x03" +
		"\x02\x02\x02lm\x07\r\x02\x02mn\t\x02\x02\x02no\x07\x12\x02\x02op\x07\x17" +
		"\x02\x02pq\x05\x04\x03\x02qr\x07\x13\x02\x02r\x1D\x03\x02\x02\x02st\x07" +
		"\x0E\x02\x02tu\t\x02\x02\x02uv\x07\x12\x02\x02vw\x07\x17\x02\x02wx\x05" +
		"\x04\x03\x02xy\x07\x13\x02\x02y\x1F\x03\x02\x02\x02z{\x07\x0F\x02\x02" +
		"{|\t\x02\x02\x02|}\x07\x12\x02\x02}~\x07\x17\x02\x02~\x7F\x05\x04\x03" +
		"\x02\x7F\x80\x07\x13\x02\x02\x80!\x03\x02\x02\x02\x06%,3C";
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


export class LinesContext extends ParserRuleContext {
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
	public get ruleIndex(): number { return ArisParser.RULE_lines; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterLines) {
			listener.enterLines(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitLines) {
			listener.exitLines(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitLines) {
			return visitor.visitLines(this);
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
	public subtract(): SubtractContext | undefined {
		return this.tryGetRuleContext(0, SubtractContext);
	}
	public increment(): IncrementContext | undefined {
		return this.tryGetRuleContext(0, IncrementContext);
	}
	public decrement(): DecrementContext | undefined {
		return this.tryGetRuleContext(0, DecrementContext);
	}
	public loop(): LoopContext | undefined {
		return this.tryGetRuleContext(0, LoopContext);
	}
	public ifZero(): IfZeroContext | undefined {
		return this.tryGetRuleContext(0, IfZeroContext);
	}
	public ifNotZero(): IfNotZeroContext | undefined {
		return this.tryGetRuleContext(0, IfNotZeroContext);
	}
	public ifPos(): IfPosContext | undefined {
		return this.tryGetRuleContext(0, IfPosContext);
	}
	public ifNeg(): IfNegContext | undefined {
		return this.tryGetRuleContext(0, IfNegContext);
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


export class SubtractContext extends ParserRuleContext {
	public SUB(): TerminalNode { return this.getToken(ArisParser.SUB, 0); }
	public MEMORY_SLOT(): TerminalNode[];
	public MEMORY_SLOT(i: number): TerminalNode;
	public MEMORY_SLOT(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ArisParser.MEMORY_SLOT);
		} else {
			return this.getToken(ArisParser.MEMORY_SLOT, i);
		}
	}
	public FROM(): TerminalNode { return this.getToken(ArisParser.FROM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_subtract; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterSubtract) {
			listener.enterSubtract(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitSubtract) {
			listener.exitSubtract(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitSubtract) {
			return visitor.visitSubtract(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IncrementContext extends ParserRuleContext {
	public INCR(): TerminalNode { return this.getToken(ArisParser.INCR, 0); }
	public MEMORY_SLOT(): TerminalNode { return this.getToken(ArisParser.MEMORY_SLOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_increment; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterIncrement) {
			listener.enterIncrement(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitIncrement) {
			listener.exitIncrement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitIncrement) {
			return visitor.visitIncrement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecrementContext extends ParserRuleContext {
	public DECR(): TerminalNode { return this.getToken(ArisParser.DECR, 0); }
	public MEMORY_SLOT(): TerminalNode { return this.getToken(ArisParser.MEMORY_SLOT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_decrement; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterDecrement) {
			listener.enterDecrement(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitDecrement) {
			listener.exitDecrement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitDecrement) {
			return visitor.visitDecrement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LoopContext extends ParserRuleContext {
	public LOOP(): TerminalNode { return this.getToken(ArisParser.LOOP, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ArisParser.CURLY_OPEN, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(ArisParser.NEWLINE, 0); }
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public CURLY_CLOSED(): TerminalNode { return this.getToken(ArisParser.CURLY_CLOSED, 0); }
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


export class IfZeroContext extends ParserRuleContext {
	public IFZERO(): TerminalNode { return this.getToken(ArisParser.IFZERO, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ArisParser.CURLY_OPEN, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(ArisParser.NEWLINE, 0); }
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public CURLY_CLOSED(): TerminalNode { return this.getToken(ArisParser.CURLY_CLOSED, 0); }
	public MEMORY_SLOT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.MEMORY_SLOT, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_ifZero; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterIfZero) {
			listener.enterIfZero(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitIfZero) {
			listener.exitIfZero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitIfZero) {
			return visitor.visitIfZero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNotZeroContext extends ParserRuleContext {
	public IFNOTZERO(): TerminalNode { return this.getToken(ArisParser.IFNOTZERO, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ArisParser.CURLY_OPEN, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(ArisParser.NEWLINE, 0); }
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public CURLY_CLOSED(): TerminalNode { return this.getToken(ArisParser.CURLY_CLOSED, 0); }
	public MEMORY_SLOT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.MEMORY_SLOT, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_ifNotZero; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterIfNotZero) {
			listener.enterIfNotZero(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitIfNotZero) {
			listener.exitIfNotZero(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitIfNotZero) {
			return visitor.visitIfNotZero(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfPosContext extends ParserRuleContext {
	public IFPOS(): TerminalNode { return this.getToken(ArisParser.IFPOS, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ArisParser.CURLY_OPEN, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(ArisParser.NEWLINE, 0); }
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public CURLY_CLOSED(): TerminalNode { return this.getToken(ArisParser.CURLY_CLOSED, 0); }
	public MEMORY_SLOT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.MEMORY_SLOT, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_ifPos; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterIfPos) {
			listener.enterIfPos(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitIfPos) {
			listener.exitIfPos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitIfPos) {
			return visitor.visitIfPos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfNegContext extends ParserRuleContext {
	public IFNEG(): TerminalNode { return this.getToken(ArisParser.IFNEG, 0); }
	public CURLY_OPEN(): TerminalNode { return this.getToken(ArisParser.CURLY_OPEN, 0); }
	public NEWLINE(): TerminalNode { return this.getToken(ArisParser.NEWLINE, 0); }
	public lines(): LinesContext {
		return this.getRuleContext(0, LinesContext);
	}
	public CURLY_CLOSED(): TerminalNode { return this.getToken(ArisParser.CURLY_CLOSED, 0); }
	public MEMORY_SLOT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.MEMORY_SLOT, 0); }
	public INPUT(): TerminalNode | undefined { return this.tryGetToken(ArisParser.INPUT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ArisParser.RULE_ifNeg; }
	// @Override
	public enterRule(listener: ArisListener): void {
		if (listener.enterIfNeg) {
			listener.enterIfNeg(this);
		}
	}
	// @Override
	public exitRule(listener: ArisListener): void {
		if (listener.exitIfNeg) {
			listener.exitIfNeg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ArisVisitor<Result>): Result {
		if (visitor.visitIfNeg) {
			return visitor.visitIfNeg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


