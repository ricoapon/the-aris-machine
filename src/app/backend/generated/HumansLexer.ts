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

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"ADD", "COPY", "MOVE", "TO", "INPUT", "OUTPUT", "MEMORY_SLOT", "MEMORY_SLOT_NUMBER", 
		"MEMORY_SLOT_NAME", "NEWLINE", "LINE_COMMENT", "UNIDENTIFIED", "WHITESPACE", 
		"ERROR_CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'add'", "'copy'", "'move'", "'to'", "'input'", "'output'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "ADD", "COPY", "MOVE", "TO", "INPUT", "OUTPUT", "MEMORY_SLOT", 
		"MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", "NEWLINE", "LINE_COMMENT", "UNIDENTIFIED", 
		"WHITESPACE", "ERROR_CHARACTER",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\x10l\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\b\x03\b\x05\b" +
		"@\n\b\x03\t\x06\tC\n\t\r\t\x0E\tD\x03\n\x06\nH\n\n\r\n\x0E\nI\x03\v\x05" +
		"\vM\n\v\x03\v\x03\v\x06\vQ\n\v\r\v\x0E\vR\x03\f\x03\f\x03\f\x03\f\x07" +
		"\fY\n\f\f\f\x0E\f\\\v\f\x03\f\x03\f\x03\f\x03\f\x03\r\x06\rc\n\r\r\r\x0E" +
		"\rd\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03Z\x02\x02\x10\x03" +
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02\t" +
		"\x11\x02\n\x13\x02\v\x15\x02\f\x17\x02\r\x19\x02\x0E\x1B\x02\x0F\x1D\x02" +
		"\x10\x03\x02\x06\x03\x022;\x03\x02c|\x06\x02//2;aac|\x04\x02\v\v\"\"\x02" +
		"s\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02" +
		"\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02" +
		"\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02" +
		"\x02\x15\x03\x02\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02" +
		"\x02\x1B\x03\x02\x02\x02\x02\x1D\x03\x02\x02\x02\x03\x1F\x03\x02\x02\x02" +
		"\x05#\x03\x02\x02\x02\x07(\x03\x02\x02\x02\t-\x03\x02\x02\x02\v0\x03\x02" +
		"\x02\x02\r6\x03\x02\x02\x02\x0F?\x03\x02\x02\x02\x11B\x03\x02\x02\x02" +
		"\x13G\x03\x02\x02\x02\x15P\x03\x02\x02\x02\x17T\x03\x02\x02\x02\x19b\x03" +
		"\x02\x02\x02\x1Bf\x03\x02\x02\x02\x1Dj\x03\x02\x02\x02\x1F \x07c\x02\x02" +
		" !\x07f\x02\x02!\"\x07f\x02\x02\"\x04\x03\x02\x02\x02#$\x07e\x02\x02$" +
		"%\x07q\x02\x02%&\x07r\x02\x02&\'\x07{\x02\x02\'\x06\x03\x02\x02\x02()" +
		"\x07o\x02\x02)*\x07q\x02\x02*+\x07x\x02\x02+,\x07g\x02\x02,\b\x03\x02" +
		"\x02\x02-.\x07v\x02\x02./\x07q\x02\x02/\n\x03\x02\x02\x0201\x07k\x02\x02" +
		"12\x07p\x02\x0223\x07r\x02\x0234\x07w\x02\x0245\x07v\x02\x025\f\x03\x02" +
		"\x02\x0267\x07q\x02\x0278\x07w\x02\x0289\x07v\x02\x029:\x07r\x02\x02:" +
		";\x07w\x02\x02;<\x07v\x02\x02<\x0E\x03\x02\x02\x02=@\x05\x11\t\x02>@\x05" +
		"\x13\n\x02?=\x03\x02\x02\x02?>\x03\x02\x02\x02@\x10\x03\x02\x02\x02AC" +
		"\t\x02\x02\x02BA\x03\x02\x02\x02CD\x03\x02\x02\x02DB\x03\x02\x02\x02D" +
		"E\x03\x02\x02\x02E\x12\x03\x02\x02\x02FH\t\x03\x02\x02GF\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IG\x03\x02\x02\x02IJ\x03\x02\x02\x02J\x14\x03\x02\x02" +
		"\x02KM\x07\x0F\x02\x02LK\x03\x02\x02\x02LM\x03\x02\x02\x02MN\x03\x02\x02" +
		"\x02NQ\x07\f\x02\x02OQ\x07\x0F\x02\x02PL\x03\x02\x02\x02PO\x03\x02\x02" +
		"\x02QR\x03\x02\x02\x02RP\x03\x02\x02\x02RS\x03\x02\x02\x02S\x16\x03\x02" +
		"\x02\x02TU\x071\x02\x02UV\x071\x02\x02VZ\x03\x02\x02\x02WY\v\x02\x02\x02" +
		"XW\x03\x02\x02\x02Y\\\x03\x02\x02\x02Z[\x03\x02\x02\x02ZX\x03\x02\x02" +
		"\x02[]\x03\x02\x02\x02\\Z\x03\x02\x02\x02]^\x05\x15\v\x02^_\x03\x02\x02" +
		"\x02_`\b\f\x02\x02`\x18\x03\x02\x02\x02ac\t\x04\x02\x02ba\x03\x02\x02" +
		"\x02cd\x03\x02\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02e\x1A\x03\x02" +
		"\x02\x02fg\t\x05\x02\x02gh\x03\x02\x02\x02hi\b\x0E\x02\x02i\x1C\x03\x02" +
		"\x02\x02jk\v\x02\x02\x02k\x1E\x03\x02\x02\x02\v\x02?DILPRZd\x03\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HumansLexer.__ATN) {
			HumansLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HumansLexer._serializedATN));
		}

		return HumansLexer.__ATN;
	}

}

