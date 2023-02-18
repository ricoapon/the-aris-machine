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
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly OPERATOR = 10;
	public static readonly DIRECTION = 11;
	public static readonly OBJECT = 12;
	public static readonly NEWLINE = 13;
	public static readonly IF = 14;
	public static readonly ROUND_BRACKET_OPEN = 15;
	public static readonly ROUND_BRACKET_CLOSE = 16;
	public static readonly CURLY_BRACKET_OPEN = 17;
	public static readonly CURLY_BRACKET_CLOSE = 18;
	public static readonly WHITESPACE = 19;
	public static readonly LINE_COMMENT = 20;
	public static readonly ERROR_CHARACTER = 21;
	public static readonly RULE_program = 0;
	public static readonly RULE_line = 1;
	public static readonly RULE_expression = 2;
	public static readonly RULE_action = 3;
	public static readonly RULE_if_statement = 4;
	public static readonly RULE_condition = 5;
	public static readonly RULE_condition_part = 6;
	public static readonly RULE_move = 7;
	public static readonly RULE_pickUp = 8;
	public static readonly RULE_drop = 9;
	public static readonly RULE_scan = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "line", "expression", "action", "if_statement", "condition", 
		"condition_part", "move", "pickUp", "drop", "scan",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "' and '", "' or '", "'move'", "'pick'", "'u'", "'U'", "'p'", 
		"'drop'", "'scan'", undefined, undefined, undefined, undefined, "'if'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "OPERATOR", "DIRECTION", "OBJECT", "NEWLINE", 
		"IF", "ROUND_BRACKET_OPEN", "ROUND_BRACKET_CLOSE", "CURLY_BRACKET_OPEN", 
		"CURLY_BRACKET_CLOSE", "WHITESPACE", "LINE_COMMENT", "ERROR_CHARACTER",
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
			this.state = 23;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 22;
				this.line();
				}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << HumansParser.T__2) | (1 << HumansParser.T__3) | (1 << HumansParser.T__7) | (1 << HumansParser.IF))) !== 0));
			this.state = 27;
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
			this.state = 29;
			this.expression();
			this.state = 33;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === HumansParser.NEWLINE) {
				{
				{
				this.state = 30;
				this.match(HumansParser.NEWLINE);
				}
				}
				this.state = 35;
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
			this.state = 38;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HumansParser.T__2:
			case HumansParser.T__3:
			case HumansParser.T__7:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 36;
				this.action();
				}
				break;
			case HumansParser.IF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 37;
				this.if_statement();
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
	public action(): ActionContext {
		let _localctx: ActionContext = new ActionContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, HumansParser.RULE_action);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HumansParser.T__2:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.move();
				}
				break;
			case HumansParser.T__3:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.pickUp();
				}
				break;
			case HumansParser.T__7:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 42;
				this.drop();
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
	public if_statement(): If_statementContext {
		let _localctx: If_statementContext = new If_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, HumansParser.RULE_if_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this.match(HumansParser.IF);
			this.state = 46;
			this.match(HumansParser.ROUND_BRACKET_OPEN);
			this.state = 47;
			this.condition(0);
			this.state = 48;
			this.match(HumansParser.ROUND_BRACKET_CLOSE);
			this.state = 49;
			this.match(HumansParser.CURLY_BRACKET_OPEN);
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HumansParser.NEWLINE) {
				{
				this.state = 50;
				this.match(HumansParser.NEWLINE);
				}
			}

			this.state = 53;
			this.expression();
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === HumansParser.NEWLINE) {
				{
				this.state = 54;
				this.match(HumansParser.NEWLINE);
				}
			}

			this.state = 57;
			this.match(HumansParser.CURLY_BRACKET_CLOSE);
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

	public condition(): ConditionContext;
	public condition(_p: number): ConditionContext;
	// @RuleVersion(0)
	public condition(_p?: number): ConditionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ConditionContext = new ConditionContext(this._ctx, _parentState);
		let _prevctx: ConditionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, HumansParser.RULE_condition, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 60;
			this.condition_part();
			this.state = 61;
			this.match(HumansParser.OPERATOR);
			this.state = 62;
			this.condition_part();
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 72;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 70;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new ConditionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HumansParser.RULE_condition);
						this.state = 64;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 65;
						this.match(HumansParser.T__0);
						this.state = 66;
						this.condition(4);
						}
						break;

					case 2:
						{
						_localctx = new ConditionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, HumansParser.RULE_condition);
						this.state = 67;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 68;
						this.match(HumansParser.T__1);
						this.state = 69;
						this.condition(3);
						}
						break;
					}
					}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condition_part(): Condition_partContext {
		let _localctx: Condition_partContext = new Condition_partContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, HumansParser.RULE_condition_part);
		try {
			this.state = 77;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case HumansParser.OBJECT:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 75;
				this.match(HumansParser.OBJECT);
				}
				break;
			case HumansParser.T__8:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 76;
				this.scan();
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
		this.enterRule(_localctx, 14, HumansParser.RULE_move);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(HumansParser.T__2);
			this.state = 80;
			this.match(HumansParser.DIRECTION);
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
	public pickUp(): PickUpContext {
		let _localctx: PickUpContext = new PickUpContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, HumansParser.RULE_pickUp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(HumansParser.T__3);
			this.state = 83;
			_la = this._input.LA(1);
			if (!(_la === HumansParser.T__4 || _la === HumansParser.T__5)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 84;
			this.match(HumansParser.T__6);
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
	public drop(): DropContext {
		let _localctx: DropContext = new DropContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, HumansParser.RULE_drop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 86;
			this.match(HumansParser.T__7);
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
	public scan(): ScanContext {
		let _localctx: ScanContext = new ScanContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, HumansParser.RULE_scan);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(HumansParser.T__8);
			this.state = 89;
			this.match(HumansParser.DIRECTION);
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

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 5:
			return this.condition_sempred(_localctx as ConditionContext, predIndex);
		}
		return true;
	}
	private condition_sempred(_localctx: ConditionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x17^\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x06\x02" +
		"\x1A\n\x02\r\x02\x0E\x02\x1B\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03\"" +
		"\n\x03\f\x03\x0E\x03%\v\x03\x03\x04\x03\x04\x05\x04)\n\x04\x03\x05\x03" +
		"\x05\x03\x05\x05\x05.\n\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x066\n\x06\x03\x06\x03\x06\x05\x06:\n\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03" +
		"\x07\x03\x07\x07\x07I\n\x07\f\x07\x0E\x07L\v\x07\x03\b\x03\b\x05\bP\n" +
		"\b\x03\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
		"\f\x03\f\x02\x02\x03\f\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E" +
		"\x02\x10\x02\x12\x02\x14\x02\x16\x02\x02\x03\x03\x02\x07\b\x02\\\x02\x19" +
		"\x03\x02\x02\x02\x04\x1F\x03\x02\x02\x02\x06(\x03\x02\x02\x02\b-\x03\x02" +
		"\x02\x02\n/\x03\x02\x02\x02\f=\x03\x02\x02\x02\x0EO\x03\x02\x02\x02\x10" +
		"Q\x03\x02\x02\x02\x12T\x03\x02\x02\x02\x14X\x03\x02\x02\x02\x16Z\x03\x02" +
		"\x02\x02\x18\x1A\x05\x04\x03\x02\x19\x18\x03\x02\x02\x02\x1A\x1B\x03\x02" +
		"\x02\x02\x1B\x19\x03\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C\x1D\x03\x02" +
		"\x02\x02\x1D\x1E\x07\x02\x02\x03\x1E\x03\x03\x02\x02\x02\x1F#\x05\x06" +
		"\x04\x02 \"\x07\x0F\x02\x02! \x03\x02\x02\x02\"%\x03\x02\x02\x02#!\x03" +
		"\x02\x02\x02#$\x03\x02\x02\x02$\x05\x03\x02\x02\x02%#\x03\x02\x02\x02" +
		"&)\x05\b\x05\x02\')\x05\n\x06\x02(&\x03\x02\x02\x02(\'\x03\x02\x02\x02" +
		")\x07\x03\x02\x02\x02*.\x05\x10\t\x02+.\x05\x12\n\x02,.\x05\x14\v\x02" +
		"-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02\x02.\t\x03\x02\x02" +
		"\x02/0\x07\x10\x02\x0201\x07\x11\x02\x0212\x05\f\x07\x0223\x07\x12\x02" +
		"\x0235\x07\x13\x02\x0246\x07\x0F\x02\x0254\x03\x02\x02\x0256\x03\x02\x02" +
		"\x0267\x03\x02\x02\x0279\x05\x06\x04\x028:\x07\x0F\x02\x0298\x03\x02\x02" +
		"\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x07\x14\x02\x02<\v\x03\x02" +
		"\x02\x02=>\b\x07\x01\x02>?\x05\x0E\b\x02?@\x07\f\x02\x02@A\x05\x0E\b\x02" +
		"AJ\x03\x02\x02\x02BC\f\x05\x02\x02CD\x07\x03\x02\x02DI\x05\f\x07\x06E" +
		"F\f\x04\x02\x02FG\x07\x04\x02\x02GI\x05\f\x07\x05HB\x03\x02\x02\x02HE" +
		"\x03\x02\x02\x02IL\x03\x02\x02\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02" +
		"K\r\x03\x02\x02\x02LJ\x03\x02\x02\x02MP\x07\x0E\x02\x02NP\x05\x16\f\x02" +
		"OM\x03\x02\x02\x02ON\x03\x02\x02\x02P\x0F\x03\x02\x02\x02QR\x07\x05\x02" +
		"\x02RS\x07\r\x02\x02S\x11\x03\x02\x02\x02TU\x07\x06\x02\x02UV\t\x02\x02" +
		"\x02VW\x07\t\x02\x02W\x13\x03\x02\x02\x02XY\x07\n\x02\x02Y\x15\x03\x02" +
		"\x02\x02Z[\x07\v\x02\x02[\\\x07\r\x02\x02\\\x17\x03\x02\x02\x02\v\x1B" +
		"#(-59HJO";
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
	public action(): ActionContext | undefined {
		return this.tryGetRuleContext(0, ActionContext);
	}
	public if_statement(): If_statementContext | undefined {
		return this.tryGetRuleContext(0, If_statementContext);
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
	public move(): MoveContext | undefined {
		return this.tryGetRuleContext(0, MoveContext);
	}
	public pickUp(): PickUpContext | undefined {
		return this.tryGetRuleContext(0, PickUpContext);
	}
	public drop(): DropContext | undefined {
		return this.tryGetRuleContext(0, DropContext);
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


export class If_statementContext extends ParserRuleContext {
	public IF(): TerminalNode { return this.getToken(HumansParser.IF, 0); }
	public ROUND_BRACKET_OPEN(): TerminalNode { return this.getToken(HumansParser.ROUND_BRACKET_OPEN, 0); }
	public condition(): ConditionContext {
		return this.getRuleContext(0, ConditionContext);
	}
	public ROUND_BRACKET_CLOSE(): TerminalNode { return this.getToken(HumansParser.ROUND_BRACKET_CLOSE, 0); }
	public CURLY_BRACKET_OPEN(): TerminalNode { return this.getToken(HumansParser.CURLY_BRACKET_OPEN, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public CURLY_BRACKET_CLOSE(): TerminalNode { return this.getToken(HumansParser.CURLY_BRACKET_CLOSE, 0); }
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
	public get ruleIndex(): number { return HumansParser.RULE_if_statement; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterIf_statement) {
			listener.enterIf_statement(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitIf_statement) {
			listener.exitIf_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitIf_statement) {
			return visitor.visitIf_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionContext extends ParserRuleContext {
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	public condition_part(): Condition_partContext[];
	public condition_part(i: number): Condition_partContext;
	public condition_part(i?: number): Condition_partContext | Condition_partContext[] {
		if (i === undefined) {
			return this.getRuleContexts(Condition_partContext);
		} else {
			return this.getRuleContext(i, Condition_partContext);
		}
	}
	public OPERATOR(): TerminalNode | undefined { return this.tryGetToken(HumansParser.OPERATOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_condition; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterCondition) {
			listener.enterCondition(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitCondition) {
			listener.exitCondition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitCondition) {
			return visitor.visitCondition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Condition_partContext extends ParserRuleContext {
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(HumansParser.OBJECT, 0); }
	public scan(): ScanContext | undefined {
		return this.tryGetRuleContext(0, ScanContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_condition_part; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterCondition_part) {
			listener.enterCondition_part(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitCondition_part) {
			listener.exitCondition_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitCondition_part) {
			return visitor.visitCondition_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MoveContext extends ParserRuleContext {
	public DIRECTION(): TerminalNode { return this.getToken(HumansParser.DIRECTION, 0); }
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


export class PickUpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_pickUp; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterPickUp) {
			listener.enterPickUp(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitPickUp) {
			listener.exitPickUp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitPickUp) {
			return visitor.visitPickUp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DropContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_drop; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterDrop) {
			listener.enterDrop(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitDrop) {
			listener.exitDrop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitDrop) {
			return visitor.visitDrop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScanContext extends ParserRuleContext {
	public DIRECTION(): TerminalNode { return this.getToken(HumansParser.DIRECTION, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return HumansParser.RULE_scan; }
	// @Override
	public enterRule(listener: HumansListener): void {
		if (listener.enterScan) {
			listener.enterScan(this);
		}
	}
	// @Override
	public exitRule(listener: HumansListener): void {
		if (listener.exitScan) {
			listener.exitScan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: HumansVisitor<Result>): Result {
		if (visitor.visitScan) {
			return visitor.visitScan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


