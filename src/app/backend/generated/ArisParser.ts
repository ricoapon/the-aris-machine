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
	public static readonly IFZERO = 8;
	public static readonly IFNOTZERO = 9;
	public static readonly IFPOS = 10;
	public static readonly IFNEG = 11;
	public static readonly CURLY_OPEN = 12;
	public static readonly CURLY_CLOSED = 13;
	public static readonly MEMORY_SLOT = 14;
	public static readonly MEMORY_SLOT_NUMBER = 15;
	public static readonly MEMORY_SLOT_NAME = 16;
	public static readonly NEWLINE = 17;
	public static readonly LINE_COMMENT = 18;
	public static readonly UNIDENTIFIED = 19;
	public static readonly WHITESPACE = 20;
	public static readonly ERROR_CHARACTER = 21;
	public static readonly RULE_program = 0;
	public static readonly RULE_lines = 1;
	public static readonly RULE_line = 2;
	public static readonly RULE_expression = 3;
	public static readonly RULE_action = 4;
	public static readonly RULE_move = 5;
	public static readonly RULE_copy = 6;
	public static readonly RULE_add = 7;
	public static readonly RULE_loop = 8;
	public static readonly RULE_ifZero = 9;
	public static readonly RULE_ifNotZero = 10;
	public static readonly RULE_ifPos = 11;
	public static readonly RULE_ifNeg = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "lines", "line", "expression", "action", "move", "copy", "add", 
		"loop", "ifZero", "ifNotZero", "ifPos", "ifNeg",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'add'", "'copy'", "'move'", "'to'", "'input'", "'output'", 
		"'loop'", "'ifzero'", "'ifnotzero'", "'ifpos'", "'ifneg'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "COPY", "MOVE", "TO", "INPUT", "OUTPUT", "LOOP", "IFZERO", 
		"IFNOTZERO", "IFPOS", "IFNEG", "CURLY_OPEN", "CURLY_CLOSED", "MEMORY_SLOT", 
		"MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", "NEWLINE", "LINE_COMMENT", "UNIDENTIFIED", 
		"WHITESPACE", "ERROR_CHARACTER",
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
			this.state = 27;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 26;
				this.line();
				}
				}
				this.state = 29;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArisParser.ADD) | (1 << ArisParser.COPY) | (1 << ArisParser.MOVE) | (1 << ArisParser.LOOP) | (1 << ArisParser.IFZERO) | (1 << ArisParser.IFNOTZERO) | (1 << ArisParser.IFPOS) | (1 << ArisParser.IFNEG))) !== 0));
			this.state = 31;
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
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ArisParser.ADD) | (1 << ArisParser.COPY) | (1 << ArisParser.MOVE) | (1 << ArisParser.LOOP) | (1 << ArisParser.IFZERO) | (1 << ArisParser.IFNOTZERO) | (1 << ArisParser.IFPOS) | (1 << ArisParser.IFNEG))) !== 0)) {
				{
				{
				this.state = 33;
				this.line();
				}
				}
				this.state = 38;
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
			this.state = 39;
			this.expression();
			this.state = 43;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ArisParser.NEWLINE) {
				{
				{
				this.state = 40;
				this.match(ArisParser.NEWLINE);
				}
				}
				this.state = 45;
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
			this.state = 46;
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
			this.state = 56;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ArisParser.COPY:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 48;
				this.copy();
				}
				break;
			case ArisParser.MOVE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.move();
				}
				break;
			case ArisParser.ADD:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 50;
				this.add();
				}
				break;
			case ArisParser.LOOP:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 51;
				this.loop();
				}
				break;
			case ArisParser.IFZERO:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 52;
				this.ifZero();
				}
				break;
			case ArisParser.IFNOTZERO:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 53;
				this.ifNotZero();
				}
				break;
			case ArisParser.IFPOS:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 54;
				this.ifPos();
				}
				break;
			case ArisParser.IFNEG:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 55;
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
			this.state = 58;
			this.match(ArisParser.MOVE);
			this.state = 59;
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
			this.state = 60;
			this.match(ArisParser.TO);
			this.state = 61;
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
			this.state = 63;
			this.match(ArisParser.COPY);
			this.state = 64;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 65;
			this.match(ArisParser.TO);
			this.state = 66;
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
			this.state = 68;
			this.match(ArisParser.ADD);
			this.state = 69;
			this.match(ArisParser.MEMORY_SLOT);
			this.state = 70;
			this.match(ArisParser.TO);
			this.state = 71;
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
		this.enterRule(_localctx, 16, ArisParser.RULE_loop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(ArisParser.LOOP);
			this.state = 74;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 75;
			this.match(ArisParser.NEWLINE);
			this.state = 76;
			this.lines();
			this.state = 77;
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
		this.enterRule(_localctx, 18, ArisParser.RULE_ifZero);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(ArisParser.IFZERO);
			this.state = 80;
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
			this.state = 81;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 82;
			this.match(ArisParser.NEWLINE);
			this.state = 83;
			this.lines();
			this.state = 84;
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
		this.enterRule(_localctx, 20, ArisParser.RULE_ifNotZero);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(ArisParser.IFNOTZERO);
			this.state = 87;
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
			this.state = 88;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 89;
			this.match(ArisParser.NEWLINE);
			this.state = 90;
			this.lines();
			this.state = 91;
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
		this.enterRule(_localctx, 22, ArisParser.RULE_ifPos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 93;
			this.match(ArisParser.IFPOS);
			this.state = 94;
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
			this.state = 95;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 96;
			this.match(ArisParser.NEWLINE);
			this.state = 97;
			this.lines();
			this.state = 98;
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
		this.enterRule(_localctx, 24, ArisParser.RULE_ifNeg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 100;
			this.match(ArisParser.IFNEG);
			this.state = 101;
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
			this.state = 102;
			this.match(ArisParser.CURLY_OPEN);
			this.state = 103;
			this.match(ArisParser.NEWLINE);
			this.state = 104;
			this.lines();
			this.state = 105;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17n\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x06\x02\x1E\n\x02\r\x02\x0E\x02\x1F\x03\x02\x03\x02" +
		"\x03\x03\x07\x03%\n\x03\f\x03\x0E\x03(\v\x03\x03\x04\x03\x04\x07\x04," +
		"\n\x04\f\x04\x0E\x04/\v\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06;\n\x06\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x03\x0E\x02\x02\x02\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x04" +
		"\x04\x02\x07\x07\x10\x10\x04\x02\b\b\x10\x10\x02j\x02\x1D\x03\x02\x02" +
		"\x02\x04&\x03\x02\x02\x02\x06)\x03\x02\x02\x02\b0\x03\x02\x02\x02\n:\x03" +
		"\x02\x02\x02\f<\x03\x02\x02\x02\x0EA\x03\x02\x02\x02\x10F\x03\x02\x02" +
		"\x02\x12K\x03\x02\x02\x02\x14Q\x03\x02\x02\x02\x16X\x03\x02\x02\x02\x18" +
		"_\x03\x02\x02\x02\x1Af\x03\x02\x02\x02\x1C\x1E\x05\x06\x04\x02\x1D\x1C" +
		"\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F " +
		"\x03\x02\x02\x02 !\x03\x02\x02\x02!\"\x07\x02\x02\x03\"\x03\x03\x02\x02" +
		"\x02#%\x05\x06\x04\x02$#\x03\x02\x02\x02%(\x03\x02\x02\x02&$\x03\x02\x02" +
		"\x02&\'\x03\x02\x02\x02\'\x05\x03\x02\x02\x02(&\x03\x02\x02\x02)-\x05" +
		"\b\x05\x02*,\x07\x13\x02\x02+*\x03\x02\x02\x02,/\x03\x02\x02\x02-+\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02.\x07\x03\x02\x02\x02/-\x03\x02\x02\x02" +
		"01\x05\n\x06\x021\t\x03\x02\x02\x022;\x05\x0E\b\x023;\x05\f\x07\x024;" +
		"\x05\x10\t\x025;\x05\x12\n\x026;\x05\x14\v\x027;\x05\x16\f\x028;\x05\x18" +
		"\r\x029;\x05\x1A\x0E\x02:2\x03\x02\x02\x02:3\x03\x02\x02\x02:4\x03\x02" +
		"\x02\x02:5\x03\x02\x02\x02:6\x03\x02\x02\x02:7\x03\x02\x02\x02:8\x03\x02" +
		"\x02\x02:9\x03\x02\x02\x02;\v\x03\x02\x02\x02<=\x07\x05\x02\x02=>\t\x02" +
		"\x02\x02>?\x07\x06\x02\x02?@\t\x03\x02\x02@\r\x03\x02\x02\x02AB\x07\x04" +
		"\x02\x02BC\x07\x10\x02\x02CD\x07\x06\x02\x02DE\t\x03\x02\x02E\x0F\x03" +
		"\x02\x02\x02FG\x07\x03\x02\x02GH\x07\x10\x02\x02HI\x07\x06\x02\x02IJ\x07" +
		"\x10\x02\x02J\x11\x03\x02\x02\x02KL\x07\t\x02\x02LM\x07\x0E\x02\x02MN" +
		"\x07\x13\x02\x02NO\x05\x04\x03\x02OP\x07\x0F\x02\x02P\x13\x03\x02\x02" +
		"\x02QR\x07\n\x02\x02RS\t\x02\x02\x02ST\x07\x0E\x02\x02TU\x07\x13\x02\x02" +
		"UV\x05\x04\x03\x02VW\x07\x0F\x02\x02W\x15\x03\x02\x02\x02XY\x07\v\x02" +
		"\x02YZ\t\x02\x02\x02Z[\x07\x0E\x02\x02[\\\x07\x13\x02\x02\\]\x05\x04\x03" +
		"\x02]^\x07\x0F\x02\x02^\x17\x03\x02\x02\x02_`\x07\f\x02\x02`a\t\x02\x02" +
		"\x02ab\x07\x0E\x02\x02bc\x07\x13\x02\x02cd\x05\x04\x03\x02de\x07\x0F\x02" +
		"\x02e\x19\x03\x02\x02\x02fg\x07\r\x02\x02gh\t\x02\x02\x02hi\x07\x0E\x02" +
		"\x02ij\x07\x13\x02\x02jk\x05\x04\x03\x02kl\x07\x0F\x02\x02l\x1B\x03\x02" +
		"\x02\x02\x06\x1F&-:";
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


