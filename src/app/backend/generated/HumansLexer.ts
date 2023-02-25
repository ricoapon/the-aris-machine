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
	public static readonly MEMORY_SLOT_NUMBER = 4;
	public static readonly MEMORY_SLOT_NAME = 5;
	public static readonly MEMORY_SLOT = 6;
	public static readonly WHITESPACE = 7;
	public static readonly NEWLINE = 8;
	public static readonly LINE_COMMENT = 9;
	public static readonly ERROR_CHARACTER = 10;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", "MEMORY_SLOT", 
		"WHITESPACE", "NEWLINE", "LINE_COMMENT", "ERROR_CHARACTER",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'copyto'", "'inbox'", "'outbox'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, "MEMORY_SLOT_NUMBER", "MEMORY_SLOT_NAME", 
		"MEMORY_SLOT", "WHITESPACE", "NEWLINE", "LINE_COMMENT", "ERROR_CHARACTER",
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\fU\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x03\x02\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x05\x06\x05-\n\x05\r\x05\x0E\x05.\x03\x06\x06\x062\n\x06\r\x06\x0E\x06" +
		"3\x03\x07\x03\x07\x05\x078\n\x07\x03\b\x03\b\x03\b\x03\b\x03\t\x05\t?" +
		"\n\t\x03\t\x03\t\x06\tC\n\t\r\t\x0E\tD\x03\n\x03\n\x03\n\x03\n\x07\nK" +
		"\n\n\f\n\x0E\nN\v\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03L\x02\x02\f" +
		"\x03\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\v\x02\x07\r\x02\b\x0F\x02" +
		"\t\x11\x02\n\x13\x02\v\x15\x02\f\x03\x02\x05\x03\x022;\x03\x02c|\x04\x02" +
		"\v\v\"\"\x02[\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07" +
		"\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03" +
		"\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03" +
		"\x02\x02\x02\x02\x15\x03\x02\x02\x02\x03\x17\x03\x02\x02\x02\x05\x1E\x03" +
		"\x02\x02\x02\x07$\x03\x02\x02\x02\t,\x03\x02\x02\x02\v1\x03\x02\x02\x02" +
		"\r7\x03\x02\x02\x02\x0F9\x03\x02\x02\x02\x11B\x03\x02\x02\x02\x13F\x03" +
		"\x02\x02\x02\x15S\x03\x02\x02\x02\x17\x18\x07e\x02\x02\x18\x19\x07q\x02" +
		"\x02\x19\x1A\x07r\x02\x02\x1A\x1B\x07{\x02\x02\x1B\x1C\x07v\x02\x02\x1C" +
		"\x1D\x07q\x02\x02\x1D\x04\x03\x02\x02\x02\x1E\x1F\x07k\x02\x02\x1F \x07" +
		"p\x02\x02 !\x07d\x02\x02!\"\x07q\x02\x02\"#\x07z\x02\x02#\x06\x03\x02" +
		"\x02\x02$%\x07q\x02\x02%&\x07w\x02\x02&\'\x07v\x02\x02\'(\x07d\x02\x02" +
		"()\x07q\x02\x02)*\x07z\x02\x02*\b\x03\x02\x02\x02+-\t\x02\x02\x02,+\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02.,\x03\x02\x02\x02./\x03\x02\x02\x02/\n" +
		"\x03\x02\x02\x0202\t\x03\x02\x0210\x03\x02\x02\x0223\x03\x02\x02\x023" +
		"1\x03\x02\x02\x0234\x03\x02\x02\x024\f\x03\x02\x02\x0258\x05\t\x05\x02" +
		"68\x05\v\x06\x0275\x03\x02\x02\x0276\x03\x02\x02\x028\x0E\x03\x02\x02" +
		"\x029:\t\x04\x02\x02:;\x03\x02\x02\x02;<\b\b\x02\x02<\x10\x03\x02\x02" +
		"\x02=?\x07\x0F\x02\x02>=\x03\x02\x02\x02>?\x03\x02\x02\x02?@\x03\x02\x02" +
		"\x02@C\x07\f\x02\x02AC\x07\x0F\x02\x02B>\x03\x02\x02\x02BA\x03\x02\x02" +
		"\x02CD\x03\x02\x02\x02DB\x03\x02\x02\x02DE\x03\x02\x02\x02E\x12\x03\x02" +
		"\x02\x02FG\x071\x02\x02GH\x071\x02\x02HL\x03\x02\x02\x02IK\v\x02\x02\x02" +
		"JI\x03\x02\x02\x02KN\x03\x02\x02\x02LM\x03\x02\x02\x02LJ\x03\x02\x02\x02" +
		"MO\x03\x02\x02\x02NL\x03\x02\x02\x02OP\x05\x11\t\x02PQ\x03\x02\x02\x02" +
		"QR\b\n\x02\x02R\x14\x03\x02\x02\x02ST\v\x02\x02\x02T\x16\x03\x02\x02\x02" +
		"\n\x02.37>BDL\x03\b\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!HumansLexer.__ATN) {
			HumansLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(HumansLexer._serializedATN));
		}

		return HumansLexer.__ATN;
	}

}

