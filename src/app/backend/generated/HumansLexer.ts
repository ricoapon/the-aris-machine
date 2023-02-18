// Generated from src/antlr4/Humans.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class HumansLexer extends Lexer {
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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"OPERATOR", "DIRECTION", "OBJECT", "NEWLINE", "IF", "ROUND_BRACKET_OPEN", 
		"ROUND_BRACKET_CLOSE", "CURLY_BRACKET_OPEN", "CURLY_BRACKET_CLOSE", "WHITESPACE", 
		"LINE_COMMENT", "ERROR_CHARACTER",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(HumansLexer._LITERAL_NAMES, HumansLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return HumansLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(HumansLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "Humans.g4"; }

	// @Override
	public get ruleNames(): string[] { return HumansLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return HumansLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return HumansLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return HumansLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x17\xB4\b\x01" +
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06" +
		"\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r" +
		"\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t" +
		"\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05" +
		"\vW\n\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x05\fh\n\f\x03\r\x03\r\x03\r\x03\r\x03\r\x03" +
		"\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x05\rx\n\r\x03\x0E" +
		"\x05\x0E{\n\x0E\x03\x0E\x03\x0E\x06\x0E\x7F\n\x0E\r\x0E\x0E\x0E\x80\x03" +
		"\x0F\x03\x0F\x03\x0F\x03\x10\x05\x10\x87\n\x10\x03\x10\x03\x10\x05\x10" +
		"\x8B\n\x10\x03\x11\x05\x11\x8E\n\x11\x03\x11\x03\x11\x05\x11\x92\n\x11" +
		"\x03\x12\x05\x12\x95\n\x12\x03\x12\x03\x12\x05\x12\x99\n\x12\x03\x13\x05" +
		"\x13\x9C\n\x13\x03\x13\x03\x13\x05\x13\xA0\n\x13\x03\x14\x03\x14\x03\x14" +
		"\x03\x14\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\xAA\n\x15\f\x15\x0E\x15" +
		"\xAD\v\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\xAB\x02" +
		"\x02\x17\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02" +
		"\b\x0F\x02\t\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02" +
		"\x0F\x1D\x02\x10\x1F\x02\x11!\x02\x12#\x02\x13%\x02\x14\'\x02\x15)\x02" +
		"\x16+\x02\x17\x03\x02\x03\x04\x02\v\v\"\"\x02\xC5\x02\x03\x03\x02\x02" +
		"\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03\x02\x02" +
		"\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02" +
		"\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02" +
		"\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02\x02\x02" +
		"\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02\x02\x02" +
		"\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x02)" +
		"\x03\x02\x02\x02\x02+\x03\x02\x02\x02\x03-\x03\x02\x02\x02\x053\x03\x02" +
		"\x02\x02\x078\x03\x02\x02\x02\t=\x03\x02\x02\x02\vB\x03\x02\x02\x02\r" +
		"D\x03\x02\x02\x02\x0FF\x03\x02\x02\x02\x11H\x03\x02\x02\x02\x13M\x03\x02" +
		"\x02\x02\x15V\x03\x02\x02\x02\x17g\x03\x02\x02\x02\x19w\x03\x02\x02\x02" +
		"\x1B~\x03\x02\x02\x02\x1D\x82\x03\x02\x02\x02\x1F\x86\x03\x02\x02\x02" +
		"!\x8D\x03\x02\x02\x02#\x94\x03\x02\x02\x02%\x9B\x03\x02\x02\x02\'\xA1" +
		"\x03\x02\x02\x02)\xA5\x03\x02\x02\x02+\xB2\x03\x02\x02\x02-.\x07\"\x02" +
		"\x02./\x07c\x02\x02/0\x07p\x02\x0201\x07f\x02\x0212\x07\"\x02\x022\x04" +
		"\x03\x02\x02\x0234\x07\"\x02\x0245\x07q\x02\x0256\x07t\x02\x0267\x07\"" +
		"\x02\x027\x06\x03\x02\x02\x0289\x07o\x02\x029:\x07q\x02\x02:;\x07x\x02" +
		"\x02;<\x07g\x02\x02<\b\x03\x02\x02\x02=>\x07r\x02\x02>?\x07k\x02\x02?" +
		"@\x07e\x02\x02@A\x07m\x02\x02A\n\x03\x02\x02\x02BC\x07w\x02\x02C\f\x03" +
		"\x02\x02\x02DE\x07W\x02\x02E\x0E\x03\x02\x02\x02FG\x07r\x02\x02G\x10\x03" +
		"\x02\x02\x02HI\x07f\x02\x02IJ\x07t\x02\x02JK\x07q\x02\x02KL\x07r\x02\x02" +
		"L\x12\x03\x02\x02\x02MN\x07u\x02\x02NO\x07e\x02\x02OP\x07c\x02\x02PQ\x07" +
		"p\x02\x02Q\x14\x03\x02\x02\x02RS\x07?\x02\x02SW\x07?\x02\x02TU\x07#\x02" +
		"\x02UW\x07?\x02\x02VR\x03\x02\x02\x02VT\x03\x02\x02\x02W\x16\x03\x02\x02" +
		"\x02XY\x07w\x02\x02Yh\x07r\x02\x02Z[\x07f\x02\x02[\\\x07q\x02\x02\\]\x07" +
		"y\x02\x02]h\x07p\x02\x02^_\x07n\x02\x02_`\x07g\x02\x02`a\x07h\x02\x02" +
		"ah\x07v\x02\x02bc\x07t\x02\x02cd\x07k\x02\x02de\x07i\x02\x02ef\x07j\x02" +
		"\x02fh\x07v\x02\x02gX\x03\x02\x02\x02gZ\x03\x02\x02\x02g^\x03\x02\x02" +
		"\x02gb\x03\x02\x02\x02h\x18\x03\x02\x02\x02ij\x07y\x02\x02jk\x07c\x02" +
		"\x02kl\x07n\x02\x02lx\x07n\x02\x02mn\x07g\x02\x02no\x07o\x02\x02op\x07" +
		"r\x02\x02pq\x07v\x02\x02qx\x07{\x02\x02rs\x07d\x02\x02st\x07n\x02\x02" +
		"tu\x07q\x02\x02uv\x07e\x02\x02vx\x07m\x02\x02wi\x03\x02\x02\x02wm\x03" +
		"\x02\x02\x02wr\x03\x02\x02\x02x\x1A\x03\x02\x02\x02y{\x07\x0F\x02\x02" +
		"zy\x03\x02\x02\x02z{\x03\x02\x02\x02{|\x03\x02\x02\x02|\x7F\x07\f\x02" +
		"\x02}\x7F\x07\x0F\x02\x02~z\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x80" +
		"\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x1C" +
		"\x03\x02\x02\x02\x82\x83\x07k\x02\x02\x83\x84\x07h\x02\x02\x84\x1E\x03" +
		"\x02\x02\x02\x85\x87\x07\"\x02\x02\x86\x85\x03\x02\x02\x02\x86\x87\x03" +
		"\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x8A\x07*\x02\x02\x89\x8B\x07" +
		"\"\x02\x02\x8A\x89\x03\x02\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B \x03\x02" +
		"\x02\x02\x8C\x8E\x07\"\x02\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E\x03\x02" +
		"\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x91\x07+\x02\x02\x90\x92\x07\"\x02" +
		"\x02\x91\x90\x03\x02\x02\x02\x91\x92\x03\x02\x02\x02\x92\"\x03\x02\x02" +
		"\x02\x93\x95\x07\"\x02\x02\x94\x93\x03\x02\x02\x02\x94\x95\x03\x02\x02" +
		"\x02\x95\x96\x03\x02\x02\x02\x96\x98\x07}\x02\x02\x97\x99\x07\"\x02\x02" +
		"\x98\x97\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99$\x03\x02\x02\x02" +
		"\x9A\x9C\x07\"\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
		"\x9C\x9D\x03\x02\x02\x02\x9D\x9F\x07\x7F\x02\x02\x9E\xA0\x07\"\x02\x02" +
		"\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0&\x03\x02\x02\x02" +
		"\xA1\xA2\t\x02\x02\x02\xA2\xA3\x03\x02\x02\x02\xA3\xA4\b\x14\x02\x02\xA4" +
		"(\x03\x02\x02\x02\xA5\xA6\x071\x02\x02\xA6\xA7\x071\x02\x02\xA7\xAB\x03" +
		"\x02\x02\x02\xA8\xAA\v\x02\x02\x02\xA9\xA8\x03\x02\x02\x02\xAA\xAD\x03" +
		"\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAC\xAE\x03" +
		"\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAE\xAF\x05\x1B\x0E\x02\xAF\xB0\x03" +
		"\x02\x02\x02\xB0\xB1\b\x15\x02\x02\xB1*\x03\x02\x02\x02\xB2\xB3\v\x02" +
		"\x02\x02\xB3,\x03\x02\x02\x02\x12\x02Vgwz~\x80\x86\x8A\x8D\x91\x94\x98" +
		"\x9B\x9F\xAB\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HumansLexer.__ATN) {
			HumansLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HumansLexer._serializedATN));
		}

		return HumansLexer.__ATN;
	}

}

