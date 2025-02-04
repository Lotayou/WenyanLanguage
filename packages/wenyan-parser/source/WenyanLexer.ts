// Generated from packages/Wenyan.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN'
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer'
import { CharStream } from 'antlr4ts/CharStream'
import { Lexer } from 'antlr4ts/Lexer'
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator'
import { NotNull } from 'antlr4ts/Decorators'
import { Override } from 'antlr4ts/Decorators'
import { RuleContext } from 'antlr4ts/RuleContext'
import { Vocabulary } from 'antlr4ts/Vocabulary'
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl'

import * as Utils from 'antlr4ts/misc/Utils'


export class WenyanLexer extends Lexer {
    public static readonly If = 1
    public static readonly EndDeclare = 2
    public static readonly Else = 3
    public static readonly Return = 4
    public static readonly EndStatment = 5
    public static readonly IHave = 6
    public static readonly NameAs = 7
    public static readonly ValueIs = 8
    public static readonly DeclareModule = 9
    public static readonly RanameAs = 10
    public static readonly Left5 = 11
    public static readonly Right5 = 12
    public static readonly Left6 = 13
    public static readonly Right6 = 14
    public static readonly DeclareString = 15
    public static readonly DeclareStringIs = 16
    public static readonly StringEmpty = 17
    public static readonly StringEscape1 = 18
    public static readonly StringEscape2 = 19
    public static readonly StringEscape3 = 20
    public static readonly Left = 21
    public static readonly Right = 22
    public static readonly Left3 = 23
    public static readonly Right3 = 24
    public static readonly Apply = 25
    public static readonly At = 26
    public static readonly StackIn = 27
    public static readonly Take = 28
    public static readonly StackPop = 29
    public static readonly Get = 30
    public static readonly The = 31
    public static readonly End = 32
    public static readonly FunctionStart = 33
    public static readonly FunctionEnd = 34
    public static readonly VariableStart = 35
    public static readonly VariableEnd = 36
    public static readonly DeclareMethod = 37
    public static readonly ThisIs = 38
    public static readonly Is = 39
    public static readonly Said = 40
    public static readonly MethodOf = 41
    public static readonly DeclareDigit = 42
    public static readonly DeclareDigitIs = 43
    public static readonly DeclareBoolean = 44
    public static readonly DeclareBooleanIs = 45
    public static readonly Boolean = 46
    public static readonly TRUE = 47
    public static readonly FALSE = 48
    public static readonly IntegerDigit = 49
    public static readonly FloatDigit = 50
    public static readonly IntegerDigitCN = 51
    public static readonly FloatDigitCN = 52
    public static readonly Equal = 53
    public static readonly Unequal = 54
    public static readonly Identifier = 55
    public static readonly Character = 56
    public static readonly LineComment = 57
    public static readonly PartComment = 58
    public static readonly WhiteSpace = 59

    // tslint:disable:no-trailing-whitespace
    public static readonly channelNames: string[] = [
        'DEFAULT_TOKEN_CHANNEL', 'HIDDEN',
    ]

    // tslint:disable:no-trailing-whitespace
    public static readonly modeNames: string[] = [
        'DEFAULT_MODE',
    ]

    public static readonly ruleNames: string[] = [
        'If', 'EndDeclare', 'Else', 'Return', 'Ruo', 'Fei', 'Nai', 'De', 'Zhe', 
        'EndStatment', 'IHave', 'Jin', 'Wu', 'Zi', 'You', 'You2', 'Yi', 'NameAs', 
        'ValueIs', 'Ming', 'Zhi', 'Yue', 'Ci', 'Suo', 'Wei', 'DeclareModule', 
        'RanameAs', 'Left5', 'Right5', 'Left6', 'Right6', 'Zai', 'Shu3', 'DeclareString', 
        'DeclareStringIs', 'Yan', 'StringEmpty', 'StringEscape1', 'StringEscape2', 
        'StringEscape3', 'Left2', 'Right2', 'Left4', 'Right4', 'String3', 'NonEscape', 
        'Left', 'Right', 'Left3', 'Right3', 'Apply', 'At', 'StackIn', 'Take', 
        'StackPop', 'Get', 'Shi2', 'Ru', 'Qiu', 'Qu', 'De2', 'The', 'End', 'Yun', 
        'FunctionStart', 'FunctionEnd', 'VariableStart', 'VariableEnd', 'Yu2', 
        'Xing', 'DeclareMethod', 'Shu2', 'ThisIs', 'Is', 'Said', 'MethodOf', 'Shi', 
        'Of', 'Ye', 'DeclareDigit', 'DeclareDigitIs', 'Shu', 'DeclareBoolean', 
        'DeclareBooleanIs', 'Bo', 'Boolean', 'TRUE', 'FALSE', 'IntegerDigit', 
        'FloatDigit', 'IntegerDigitCN', 'FloatDigitCN', 'Equal', 'Unequal', 'Bu', 
        'Den', 'Yu', 'Identifier', 'Character', 'ForbiddenHead', 'LineComment', 
        'PartComment', 'WhiteSpace', 'CommentStart', 'Comment', 'UnicodeWhiteSpace', 
        'Delimiter',
    ]

    private static readonly _LITERAL_NAMES: Array<string | undefined> = [
        undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
        undefined, undefined, undefined, undefined, "'\u300A'", "'\u300B'", "'<<'", 
        "'>>'", undefined, undefined, undefined, undefined, undefined, undefined, 
        "'\u300C'", "'\u300D'", "'['", "']'",
    ]
    private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
        undefined, 'If', 'EndDeclare', 'Else', 'Return', 'EndStatment', 'IHave', 
        'NameAs', 'ValueIs', 'DeclareModule', 'RanameAs', 'Left5', 'Right5', 'Left6', 
        'Right6', 'DeclareString', 'DeclareStringIs', 'StringEmpty', 'StringEscape1', 
        'StringEscape2', 'StringEscape3', 'Left', 'Right', 'Left3', 'Right3', 
        'Apply', 'At', 'StackIn', 'Take', 'StackPop', 'Get', 'The', 'End', 'FunctionStart', 
        'FunctionEnd', 'VariableStart', 'VariableEnd', 'DeclareMethod', 'ThisIs', 
        'Is', 'Said', 'MethodOf', 'DeclareDigit', 'DeclareDigitIs', 'DeclareBoolean', 
        'DeclareBooleanIs', 'Boolean', 'TRUE', 'FALSE', 'IntegerDigit', 'FloatDigit', 
        'IntegerDigitCN', 'FloatDigitCN', 'Equal', 'Unequal', 'Identifier', 'Character', 
        'LineComment', 'PartComment', 'WhiteSpace',
    ]
    public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(WenyanLexer._LITERAL_NAMES, WenyanLexer._SYMBOLIC_NAMES, [])

    // @Override
    // @NotNull
    public get vocabulary(): Vocabulary {
        return WenyanLexer.VOCABULARY
    }
    // tslint:enable:no-trailing-whitespace


    constructor(input: CharStream) {
        super(input)
        this._interp = new LexerATNSimulator(WenyanLexer._ATN, this)
    }

    // @Override
    public get grammarFileName(): string { return 'Wenyan.g4' }

    // @Override
    public get ruleNames(): string[] { return WenyanLexer.ruleNames }

    // @Override
    public get serializedATN(): string { return WenyanLexer._serializedATN }

    // @Override
    public get channelNames(): string[] { return WenyanLexer.channelNames }

    // @Override
    public get modeNames(): string[] { return WenyanLexer.modeNames }

    private static readonly _serializedATNSegments: number = 2
    private static readonly _serializedATNSegment0: string =
        '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02=\u0248\b\x01' +
        '\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06' +
        '\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r' +
        '\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t' +
        '\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t' +
        '\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t' +
        '\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t' +
        "\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04" +
        '+\t+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
        '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
        '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
        'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
        'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
        'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t' +
        '`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04' +
        'i\ti\x04j\tj\x04k\tk\x04l\tl\x03\x02\x03\x02\x03\x03\x03\x03\x03\x04\x03' +
        '\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03' +
        '\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x05\v\xEF\n\v\x03\v\x03\v\x03\f' +
        '\x03\f\x03\f\x03\f\x03\f\x05\f\xF8\n\f\x03\f\x03\f\x05\f\xFC\n\f\x03\r' +
        '\x03\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11' +
        '\x03\x12\x03\x12\x03\x13\x03\x13\x05\x13\u010C\n\x13\x03\x13\x03\x13\x03' +
        '\x13\x03\x13\x03\x13\x05\x13\u0113\n\x13\x03\x13\x05\x13\u0116\n\x13\x03' +
        '\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u011E\n\x13\x05\x13' +
        '\u0120\n\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x16\x03\x16\x03\x17\x03' +
        '\x17\x03\x18\x03\x18\x03\x19\x03\x19\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x05' +
        '\x1B\u0132\n\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C' +
        '\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03 \x03 \x03' +
        ' \x03!\x03!\x03"\x03"\x03#\x03#\x03#\x03$\x03$\x05$\u014E\n$\x03%\x03' +
        "%\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x03&\x05&\u015B\n&\x03\'\x03" +
        "\'\x06\'\u015F\n\'\r\'\x0E\'\u0160\x03\'\x03\'\x03(\x03(\x06(\u0167\n" +
        '(\r(\x0E(\u0168\x03(\x03(\x03)\x03)\x06)\u016F\n)\r)\x0E)\u0170\x03)\x03' +
        ')\x03*\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03-\x03-\x03.\x03.\x03/\x03' +
        '/\x03/\x05/\u0184\n/\x030\x030\x031\x031\x032\x032\x033\x033\x034\x03' +
        '4\x035\x035\x036\x036\x037\x037\x038\x038\x039\x039\x03:\x03:\x03;\x03' +
        ';\x03<\x03<\x03=\x03=\x03>\x03>\x03?\x03?\x03@\x03@\x03@\x03A\x03A\x03' +
        'B\x03B\x03B\x03B\x03C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03D\x03D\x03' +
        'D\x03D\x03D\x03D\x03E\x03E\x03E\x03F\x03F\x03G\x03G\x03H\x03H\x03H\x03' +
        'I\x03I\x03J\x03J\x03J\x03K\x03K\x03L\x03L\x03M\x03M\x03M\x03M\x03N\x03' +
        'N\x03O\x03O\x03P\x03P\x03Q\x03Q\x03Q\x03R\x03R\x05R\u01DF\nR\x03S\x03' +
        'S\x03T\x03T\x03T\x03U\x03U\x05U\u01E8\nU\x03V\x03V\x03W\x03W\x05W\u01EE' +
        '\nW\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03[\x03[\x05[\u01F8\n[\x03\\\x03\\' +
        '\x03]\x03]\x05]\u01FE\n]\x03^\x03^\x03^\x03^\x05^\u0204\n^\x03_\x03_\x03' +
        '_\x03_\x03_\x03_\x03_\x05_\u020D\n_\x03`\x03`\x03a\x03a\x03b\x03b\x03' +
        'c\x03c\x07c\u0217\nc\fc\x0Ec\u021A\vc\x03d\x05d\u021D\nd\x03e\x03e\x03' +
        'f\x03f\x07f\u0223\nf\ff\x0Ef\u0226\vf\x03f\x03f\x03g\x03g\x07g\u022C\n' +
        'g\fg\x0Eg\u022F\vg\x03g\x03g\x03g\x03g\x03h\x06h\u0236\nh\rh\x0Eh\u0237' +
        '\x03h\x03h\x03i\x03i\x03i\x03j\x03j\x03j\x03k\x03k\x05k\u0244\nk\x03l' +
        '\x05l\u0247\nl\x03\u022D\x02\x02m\x03\x02\x03\x05\x02\x04\x07\x02\x05' +
        '\t\x02\x06\v\x02\x02\r\x02\x02\x0F\x02\x02\x11\x02\x02\x13\x02\x02\x15' +
        '\x02\x07\x17\x02\b\x19\x02\x02\x1B\x02\x02\x1D\x02\x02\x1F\x02\x02!\x02' +
        "\x02#\x02\x02%\x02\t\'\x02\n)\x02\x02+\x02\x02-\x02\x02/\x02\x021\x02" +
        '\x023\x02\x025\x02\v7\x02\f9\x02\r;\x02\x0E=\x02\x0F?\x02\x10A\x02\x02' +
        'C\x02\x02E\x02\x11G\x02\x12I\x02\x02K\x02\x13M\x02\x14O\x02\x15Q\x02\x16' +
        'S\x02\x02U\x02\x02W\x02\x02Y\x02\x02[\x02\x02]\x02\x02_\x02\x17a\x02\x18' +
        'c\x02\x19e\x02\x1Ag\x02\x1Bi\x02\x1Ck\x02\x1Dm\x02\x1Eo\x02\x1Fq\x02 ' +
        's\x02\x02u\x02\x02w\x02\x02y\x02\x02{\x02\x02}\x02!\x7F\x02"\x81\x02' +
        '\x02\x83\x02#\x85\x02$\x87\x02%\x89\x02&\x8B\x02\x02\x8D\x02\x02\x8F\x02' +
        "\'\x91\x02\x02\x93\x02(\x95\x02)\x97\x02*\x99\x02+\x9B\x02\x02\x9D\x02" +
        '\x02\x9F\x02\x02\xA1\x02,\xA3\x02-\xA5\x02\x02\xA7\x02.\xA9\x02/\xAB\x02' +
        '\x02\xAD\x020\xAF\x021\xB1\x022\xB3\x023\xB5\x024\xB7\x025\xB9\x026\xBB' +
        '\x027\xBD\x028\xBF\x02\x02\xC1\x02\x02\xC3\x02\x02\xC5\x029\xC7\x02:\xC9' +
        '\x02\x02\xCB\x02;\xCD\x02<\xCF\x02=\xD1\x02\x02\xD3\x02\x02\xD5\x02\x02' +
        '\xD7\x02\x02\x03\x02\x14\x04\x02\u8B04\u8B04\u8C15\u8C15\n\x02$$12^^d' +
        'dhhppttvv\x03\x02^^\x04\x02\u4E93\u4E93\u96F4\u96F4\x04\x02\u6731\u6731' +
        '\u8855\u8855\x04\x02\u6572\u6572\u657A\u657A\x04\x02\u9635\u9635\u967F' +
        '\u967F\x04\x02\u9636\u9636\u9672\u9672\x03\x022;\x03\x0200\x12\x02\u4E02' +
        '\u4E02\u4E05\u4E05\u4E09\u4E09\u4E0B\u4E0B\u4E5F\u4E5F\u4E8E\u4E8E\u4E96' +
        '\u4E96\u4EC1\u4EC1\u5148\u5148\u516D\u516D\u516F\u516F\u5343\u5343\u5345' +
        '\u5345\u56DD\u56DD\u7680\u7680\u96F8\u96F8\x05\x02\u53CA\u53CA\u670B\u670B' +
        '\u70BB\u70BB\x04\x02\u4E90\u4E90\u65BE\u65BE\t\x02\x02\u2E81\u3002\u3041' +
        '\u5440\u5440\u66F2\u66F2\u670B\u670B\u82E7\u82E7\uFF03\uFF13\x04\x02\f' +
        '\f\x0F\x0F\x05\x02\u627B\u627B\u6CEA\u6CEA\u7591\u7591\f\x02\v\x0F""' +
        '\x87\x87\xA2\xA2\u1682\u1682\u2002\u200C\u202A\u202B\u2031\u2031\u2061' +
        '\u2061\u3002\u3002\n\x02##..00==AA\u3004\u3004\uFF03\uFF03\uFF0E\uFF0E' +
        '\x03<\x02C\x02\\\x02c\x02|\x02\xAC\x02\xAC\x02\xBC\x02\xBC\x02\xC2\x02' +
        '\xD8\x02\xDA\x02\xF8\x02\xFA\x02\u02BA\x02\u02E2\x02\u02E6\x02\u1D02\x02' +
        '\u1D27\x02\u1D2E\x02\u1D5E\x02\u1D64\x02\u1D67\x02\u1D6D\x02\u1D79\x02' +
        '\u1D7B\x02\u1DC0\x02\u1E02\x02\u1F01\x02\u2073\x02\u2073\x02\u2081\x02' +
        '\u2081\x02\u2092\x02\u209E\x02\u212C\x02\u212D\x02\u2134\x02\u2134\x02' +
        '\u2150\x02\u2150\x02\u2162\x02\u218A\x02\u2C62\x02\u2C81\x02\u2E82\x02' +
        '\u2E9B\x02\u2E9D\x02\u2EF5\x02\u2F02\x02\u2FD7\x02\u3007\x02\u3007\x02' +
        '\u3009\x02\u3009\x02\u3023\x02\u302B\x02\u303A\x02\u303D\x02\u3043\x02' +
        '\u3098\x02\u309F\x02\u30A1\x02\u30A3\x02\u30FC\x02\u30FF\x02\u3101\x02' +
        '\u31F2\x02\u3201\x02\u32D2\x02\u3300\x02\u3302\x02\u3359\x02\u3402\x02' +
        '\u4DB7\x02\u4E02\x02\u9FD7\x02\uA724\x02\uA789\x02\uA78D\x02\uA7B0\x02' +
        '\uA7B2\x02\uA7B9\x02\uA7F9\x02\uA801\x02\uAB32\x02\uAB5C\x02\uAB5E\x02' +
        '\uAB66\x02\uF902\x02\uFA6F\x02\uFA72\x02\uFADB\x02\uFB02\x02\uFB08\x02' +
        '\uFF23\x02\uFF3C\x02\uFF43\x02\uFF5C\x02\uFF68\x02\uFF71\x02\uFF73\x02' +
        '\uFF9F\x02\uB002\x03\uB003\x03\uF202\x03\uF202\x03\x02\x04\uA6D8\x04\uA702' +
        '\x04\uB736\x04\uB742\x04\uB81F\x04\uB822\x04\uCEA3\x04\uF802\x04\uFA1F' +
        '\x04\u023A\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03' +
        '\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\x15\x03\x02\x02\x02\x02\x17\x03' +
        "\x02\x02\x02\x02%\x03\x02\x02\x02\x02\'\x03\x02\x02\x02\x025\x03\x02\x02" +
        '\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02\x02\x02;\x03\x02\x02\x02\x02' +
        '=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x02E\x03\x02\x02\x02\x02G\x03\x02' +
        '\x02\x02\x02K\x03\x02\x02\x02\x02M\x03\x02\x02\x02\x02O\x03\x02\x02\x02' +
        '\x02Q\x03\x02\x02\x02\x02_\x03\x02\x02\x02\x02a\x03\x02\x02\x02\x02c\x03' +
        '\x02\x02\x02\x02e\x03\x02\x02\x02\x02g\x03\x02\x02\x02\x02i\x03\x02\x02' +
        '\x02\x02k\x03\x02\x02\x02\x02m\x03\x02\x02\x02\x02o\x03\x02\x02\x02\x02' +
        'q\x03\x02\x02\x02\x02}\x03\x02\x02\x02\x02\x7F\x03\x02\x02\x02\x02\x83' +
        '\x03\x02\x02\x02\x02\x85\x03\x02\x02\x02\x02\x87\x03\x02\x02\x02\x02\x89' +
        '\x03\x02\x02\x02\x02\x8F\x03\x02\x02\x02\x02\x93\x03\x02\x02\x02\x02\x95' +
        '\x03\x02\x02\x02\x02\x97\x03\x02\x02\x02\x02\x99\x03\x02\x02\x02\x02\xA1' +
        '\x03\x02\x02\x02\x02\xA3\x03\x02\x02\x02\x02\xA7\x03\x02\x02\x02\x02\xA9' +
        '\x03\x02\x02\x02\x02\xAD\x03\x02\x02\x02\x02\xAF\x03\x02\x02\x02\x02\xB1' +
        '\x03\x02\x02\x02\x02\xB3\x03\x02\x02\x02\x02\xB5\x03\x02\x02\x02\x02\xB7' +
        '\x03\x02\x02\x02\x02\xB9\x03\x02\x02\x02\x02\xBB\x03\x02\x02\x02\x02\xBD' +
        '\x03\x02\x02\x02\x02\xC5\x03\x02\x02\x02\x02\xC7\x03\x02\x02\x02\x02\xCB' +
        '\x03\x02\x02\x02\x02\xCD\x03\x02\x02\x02\x02\xCF\x03\x02\x02\x02\x03\xD9' +
        '\x03\x02\x02\x02\x05\xDB\x03\x02\x02\x02\x07\xDD\x03\x02\x02\x02\t\xE0' +
        '\x03\x02\x02\x02\v\xE3\x03\x02\x02\x02\r\xE5\x03\x02\x02\x02\x0F\xE7\x03' +
        '\x02\x02\x02\x11\xE9\x03\x02\x02\x02\x13\xEB\x03\x02\x02\x02\x15\xEE\x03' +
        '\x02\x02\x02\x17\xF7\x03\x02\x02\x02\x19\xFD\x03\x02\x02\x02\x1B\xFF\x03' +
        '\x02\x02\x02\x1D\u0101\x03\x02\x02\x02\x1F\u0103\x03\x02\x02\x02!\u0105' +
        "\x03\x02\x02\x02#\u0107\x03\x02\x02\x02%\u011F\x03\x02\x02\x02\'\u0121" +
        '\x03\x02\x02\x02)\u0123\x03\x02\x02\x02+\u0125\x03\x02\x02\x02-\u0127' +
        '\x03\x02\x02\x02/\u0129\x03\x02\x02\x021\u012B\x03\x02\x02\x023\u012D' +
        '\x03\x02\x02\x025\u012F\x03\x02\x02\x027\u0137\x03\x02\x02\x029\u013A' +
        '\x03\x02\x02\x02;\u013C\x03\x02\x02\x02=\u013E\x03\x02\x02\x02?\u0141' +
        '\x03\x02\x02\x02A\u0144\x03\x02\x02\x02C\u0146\x03\x02\x02\x02E\u0148' +
        '\x03\x02\x02\x02G\u014B\x03\x02\x02\x02I\u014F\x03\x02\x02\x02K\u015A' +
        '\x03\x02\x02\x02M\u015C\x03\x02\x02\x02O\u0164\x03\x02\x02\x02Q\u016C' +
        '\x03\x02\x02\x02S\u0174\x03\x02\x02\x02U\u0177\x03\x02\x02\x02W\u017A' +
        '\x03\x02\x02\x02Y\u017C\x03\x02\x02\x02[\u017E\x03\x02\x02\x02]\u0183' +
        '\x03\x02\x02\x02_\u0185\x03\x02\x02\x02a\u0187\x03\x02\x02\x02c\u0189' +
        '\x03\x02\x02\x02e\u018B\x03\x02\x02\x02g\u018D\x03\x02\x02\x02i\u018F' +
        '\x03\x02\x02\x02k\u0191\x03\x02\x02\x02m\u0193\x03\x02\x02\x02o\u0195' +
        '\x03\x02\x02\x02q\u0197\x03\x02\x02\x02s\u0199\x03\x02\x02\x02u\u019B' +
        '\x03\x02\x02\x02w\u019D\x03\x02\x02\x02y\u019F\x03\x02\x02\x02{\u01A1' +
        '\x03\x02\x02\x02}\u01A3\x03\x02\x02\x02\x7F\u01A5\x03\x02\x02\x02\x81' +
        '\u01A8\x03\x02\x02\x02\x83\u01AA\x03\x02\x02\x02\x85\u01AE\x03\x02\x02' +
        '\x02\x87\u01B2\x03\x02\x02\x02\x89\u01BC\x03\x02\x02\x02\x8B\u01BF\x03' +
        '\x02\x02\x02\x8D\u01C1\x03\x02\x02\x02\x8F\u01C3\x03\x02\x02\x02\x91\u01C6' +
        '\x03\x02\x02\x02\x93\u01C8\x03\x02\x02\x02\x95\u01CB\x03\x02\x02\x02\x97' +
        '\u01CD\x03\x02\x02\x02\x99\u01CF\x03\x02\x02\x02\x9B\u01D3\x03\x02\x02' +
        '\x02\x9D\u01D5\x03\x02\x02\x02\x9F\u01D7\x03\x02\x02\x02\xA1\u01D9\x03' +
        '\x02\x02\x02\xA3\u01DC\x03\x02\x02\x02\xA5\u01E0\x03\x02\x02\x02\xA7\u01E2' +
        '\x03\x02\x02\x02\xA9\u01E5\x03\x02\x02\x02\xAB\u01E9\x03\x02\x02\x02\xAD' +
        '\u01ED\x03\x02\x02\x02\xAF\u01EF\x03\x02\x02\x02\xB1\u01F1\x03\x02\x02' +
        '\x02\xB3\u01F3\x03\x02\x02\x02\xB5\u01F7\x03\x02\x02\x02\xB7\u01F9\x03' +
        '\x02\x02\x02\xB9\u01FD\x03\x02\x02\x02\xBB\u0203\x03\x02\x02\x02\xBD\u020C' +
        '\x03\x02\x02\x02\xBF\u020E\x03\x02\x02\x02\xC1\u0210\x03\x02\x02\x02\xC3' +
        '\u0212\x03\x02\x02\x02\xC5\u0214\x03\x02\x02\x02\xC7\u021C\x03\x02\x02' +
        '\x02\xC9\u021E\x03\x02\x02\x02\xCB\u0220\x03\x02\x02\x02\xCD\u0229\x03' +
        '\x02\x02\x02\xCF\u0235\x03\x02\x02\x02\xD1\u023B\x03\x02\x02\x02\xD3\u023E' +
        '\x03\x02\x02\x02\xD5\u0243\x03\x02\x02\x02\xD7\u0246\x03\x02\x02\x02\xD9' +
        '\xDA\x05\v\x06\x02\xDA\x04\x03\x02\x02\x02\xDB\xDC\x05\x13\n\x02\xDC\x06' +
        '\x03\x02\x02\x02\xDD\xDE\x05\v\x06\x02\xDE\xDF\x05\r\x07\x02\xDF\b\x03' +
        '\x02\x02\x02\xE0\xE1\x05\x0F\b\x02\xE1\xE2\x05\x11\t\x02\xE2\n\x03\x02' +
        '\x02\x02\xE3\xE4\x07\u82E7\x02\x02\xE4\f\x03\x02\x02\x02\xE5\xE6\x07\u9760' +
        '\x02\x02\xE6\x0E\x03\x02\x02\x02\xE7\xE8\x07\u4E45\x02\x02\xE8\x10\x03' +
        '\x02\x02\x02\xE9\xEA\x07\u5F99\x02\x02\xEA\x12\x03\x02\x02\x02\xEB\xEC' +
        '\x07\u8007\x02\x02\xEC\x14\x03\x02\x02\x02\xED\xEF\x05\x13\n\x02\xEE\xED' +
        '\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xF1' +
        '\x05\x9FP\x02\xF1\x16\x03\x02\x02\x02\xF2\xF8\x05\x19\r\x02\xF3\xF8\x05' +
        '\x1B\x0E\x02\xF4\xF8\x05\x1D\x0F\x02\xF5\xF8\x05\x1F\x10\x02\xF6\xF8\x05' +
        '!\x11\x02\xF7\xF2\x03\x02\x02\x02\xF7\xF3\x03\x02\x02\x02\xF7\xF4\x03' +
        '\x02\x02\x02\xF7\xF5\x03\x02\x02\x02\xF7\xF6\x03\x02\x02\x02\xF7\xF8\x03' +
        '\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x05\x1F\x10\x02\xFA\xFC\x05' +
        '#\x12\x02\xFB\xFA\x03\x02\x02\x02\xFB\xFC\x03\x02\x02\x02\xFC\x18\x03' +
        '\x02\x02\x02\xFD\xFE\x07\u4ECC\x02\x02\xFE\x1A\x03\x02\x02\x02\xFF\u0100' +
        '\x07\u5440\x02\x02\u0100\x1C\x03\x02\x02\x02\u0101\u0102\x07\u517B\x02' +
        '\x02\u0102\x1E\x03\x02\x02\x02\u0103\u0104\x07\u670B\x02\x02\u0104 \x03' +
        '\x02\x02\x02\u0105\u0106\x07\u53CA\x02\x02\u0106"\x03\x02\x02\x02\u0107' +
        '\u0108\x07\u4E02\x02\x02\u0108$\x03\x02\x02\x02\u0109\u010B\x05)\x15\x02' +
        '\u010A\u010C\x05+\x16\x02\u010B\u010A\x03\x02\x02\x02\u010B\u010C\x03' +
        '\x02\x02\x02\u010C\u010D\x03\x02\x02\x02\u010D\u010E\x05-\x17\x02\u010E' +
        '\u0120\x03\x02\x02\x02\u010F\u0110\x05)\x15\x02\u0110\u0112\x05+\x16\x02' +
        '\u0111\u0113\x05-\x17\x02\u0112\u0111\x03\x02\x02\x02\u0112\u0113\x03' +
        '\x02\x02\x02\u0113\u0120\x03\x02\x02\x02\u0114\u0116\x05/\x18\x02\u0115' +
        '\u0114\x03\x02\x02\x02\u0115\u0116\x03\x02\x02\x02\u0116\u0117\x03\x02' +
        '\x02\x02\u0117\u0118\x051\x19\x02\u0118\u0119\x053\x1A\x02\u0119\u0120' +
        '\x03\x02\x02\x02\u011A\u011B\x053\x1A\x02\u011B\u011D\x05+\x16\x02\u011C' +
        '\u011E\x05-\x17\x02\u011D\u011C\x03\x02\x02\x02\u011D\u011E\x03\x02\x02' +
        '\x02\u011E\u0120\x03\x02\x02\x02\u011F\u0109\x03\x02\x02\x02\u011F\u010F' +
        '\x03\x02\x02\x02\u011F\u0115\x03\x02\x02\x02\u011F\u011A\x03\x02\x02\x02' +
        '\u0120&\x03\x02\x02\x02\u0121\u0122\x05-\x17\x02\u0122(\x03\x02\x02\x02' +
        '\u0123\u0124\x07\u540F\x02\x02\u0124*\x03\x02\x02\x02\u0125\u0126\x07' +
        '\u4E4D\x02\x02\u0126,\x03\x02\x02\x02\u0127\u0128\x07\u66F2\x02\x02\u0128' +
        '.\x03\x02\x02\x02\u0129\u012A\x07\u6B66\x02\x02\u012A0\x03\x02\x02\x02' +
        '\u012B\u012C\x07\u6242\x02\x02\u012C2\x03\x02\x02\x02\u012D\u012E\t\x02' +
        '\x02\x02\u012E4\x03\x02\x02\x02\u012F\u0131\x05\x1F\x10\x02\u0130\u0132' +
        '\x05#\x12\x02\u0131\u0130\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02' +
        '\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x05C"\x02\u0134\u0135\x05)\x15' +
        '\x02\u0135\u0136\x05-\x17\x02\u01366\x03\x02\x02\x02\u0137\u0138\x05\x19' +
        '\r\x02\u0138\u0139\x05%\x13\x02\u01398\x03\x02\x02\x02\u013A\u013B\x07' +
        '\u300C\x02\x02\u013B:\x03\x02\x02\x02\u013C\u013D\x07\u300D\x02\x02\u013D' +
        '<\x03\x02\x02\x02\u013E\u013F\x07>\x02\x02\u013F\u0140\x07>\x02\x02\u0140' +
        '>\x03\x02\x02\x02\u0141\u0142\x07@\x02\x02\u0142\u0143\x07@\x02\x02\u0143' +
        '@\x03\x02\x02\x02\u0144\u0145\x07\u8F7F\x02\x02\u0145B\x03\x02\x02\x02' +
        '\u0146\u0147\x07\u4E68\x02\x02\u0147D\x03\x02\x02\x02\u0148\u0149\x05' +
        '\x17\f\x02\u0149\u014A\x05I%\x02\u014AF\x03\x02\x02\x02\u014B\u014D\x05' +
        "E#\x02\u014C\u014E\x05\'\x14\x02\u014D\u014C\x03\x02\x02\x02\u014D\u014E" +
        '\x03\x02\x02\x02\u014EH\x03\x02\x02\x02\u014F\u0150\x07\u8A02\x02\x02' +
        '\u0150J\x03\x02\x02\x02\u0151\u0152\x05S*\x02\u0152\u0153\x05U+\x02\u0153' +
        '\u015B\x03\x02\x02\x02\u0154\u0155\x05[.\x02\u0155\u0156\x05[.\x02\u0156' +
        '\u015B\x03\x02\x02\x02\u0157\u0158\x05W,\x02\u0158\u0159\x05Y-\x02\u0159' +
        '\u015B\x03\x02\x02\x02\u015A\u0151\x03\x02\x02\x02\u015A\u0154\x03\x02' +
        '\x02\x02\u015A\u0157\x03\x02\x02\x02\u015BL\x03\x02\x02\x02\u015C\u015E' +
        '\x05S*\x02\u015D\u015F\x05]/\x02\u015E\u015D\x03\x02\x02\x02\u015F\u0160' +
        '\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u0161\x03\x02\x02\x02' +
        '\u0161\u0162\x03\x02\x02\x02\u0162\u0163\x05U+\x02\u0163N\x03\x02\x02' +
        '\x02\u0164\u0166\x05S*\x02\u0165\u0167\x05]/\x02\u0166\u0165\x03\x02\x02' +
        '\x02\u0167\u0168\x03\x02\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168\u0169' +
        '\x03\x02\x02\x02\u0169\u016A\x03\x02\x02\x02\u016A\u016B\x05U+\x02\u016B' +
        'P\x03\x02\x02\x02\u016C\u016E\x05[.\x02\u016D\u016F\x05]/\x02\u016E\u016D' +
        '\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02' +
        '\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x03\x02\x02\x02\u0172\u0173\x05' +
        '[.\x02\u0173R\x03\x02\x02\x02\u0174\u0175\x07\u300E\x02\x02\u0175\u0176' +
        '\x07\u300E\x02\x02\u0176T\x03\x02\x02\x02\u0177\u0178\x07\u300F\x02\x02' +
        '\u0178\u0179\x07\u300F\x02\x02\u0179V\x03\x02\x02\x02\u017A\u017B\x07' +
        '\u3010\x02\x02\u017BX\x03\x02\x02\x02\u017C\u017D\x07\u3011\x02\x02\u017D' +
        'Z\x03\x02\x02\x02\u017E\u017F\x07$\x02\x02\u017F\\\x03\x02\x02\x02\u0180' +
        '\u0181\x07^\x02\x02\u0181\u0184\t\x03\x02\x02\u0182\u0184\n\x04\x02\x02' +
        '\u0183\u0180\x03\x02\x02\x02\u0183\u0182\x03\x02\x02\x02\u0184^\x03\x02' +
        '\x02\x02\u0185\u0186\x07\u300E\x02\x02\u0186`\x03\x02\x02\x02\u0187\u0188' +
        '\x07\u300F\x02\x02\u0188b\x03\x02\x02\x02\u0189\u018A\x07]\x02\x02\u018A' +
        'd\x03\x02\x02\x02\u018B\u018C\x07_\x02\x02\u018Cf\x03\x02\x02\x02\u018D' +
        '\u018E\x05s:\x02\u018Eh\x03\x02\x02\x02\u018F\u0190\x05\xC3b\x02\u0190' +
        'j\x03\x02\x02\x02\u0191\u0192\x05u;\x02\u0192l\x03\x02\x02\x02\u0193\u0194' +
        '\x05y=\x02\u0194n\x03\x02\x02\x02\u0195\u0196\x05w<\x02\u0196p\x03\x02' +
        '\x02\x02\u0197\u0198\x05{>\x02\u0198r\x03\x02\x02\x02\u0199\u019A\x07' +
        '\u65BF\x02\x02\u019At\x03\x02\x02\x02\u019B\u019C\x07\u5167\x02\x02\u019C' +
        'v\x03\x02\x02\x02\u019D\u019E\x07\u6C44\x02\x02\u019Ex\x03\x02\x02\x02' +
        '\u019F\u01A0\x07\u53D8\x02\x02\u01A0z\x03\x02\x02\x02\u01A1\u01A2\x07' +
        '\u5F99\x02\x02\u01A2|\x03\x02\x02\x02\u01A3\u01A4\x05+\x16\x02\u01A4~' +
        '\x03\x02\x02\x02\u01A5\u01A6\x05\x81A\x02\u01A6\u01A7\x05\x81A\x02\u01A7' +
        '\x80\x03\x02\x02\x02\u01A8\u01A9\t\x05\x02\x02\u01A9\x82\x03\x02\x02\x02' +
        "\u01AA\u01AB\x05\x95K\x02\u01AB\u01AC\x05\x91I\x02\u01AC\u01AD\x05\'\x14" +
        '\x02\u01AD\x84\x03\x02\x02\x02\u01AE\u01AF\x05\x93J\x02\u01AF\u01B0\v' +
        '\x02\x02\x02\u01B0\u01B1\x05\x99M\x02\u01B1\x86\x03\x02\x02\x02\u01B2' +
        '\u01B3\x05\x8BF\x02\u01B3\u01B4\x05\x8DG\x02\u01B4\u01B5\x05\x95K\x02' +
        '\u01B5\u01B6\x05\x91I\x02\u01B6\u01B7\x07\u5FC7\x02\x02\u01B7\u01B8\x07' +
        '\u514A\x02\x02\u01B8\u01B9\x07\u5F99\x02\x02\u01B9\u01BA\x03\x02\x02\x02' +
        '\u01BA\u01BB\x05\xA5S\x02\u01BB\x88\x03\x02\x02\x02\u01BC\u01BD\x05\x0F' +
        '\b\x02\u01BD\u01BE\x05\x8DG\x02\u01BE\x8A\x03\x02\x02\x02\u01BF\u01C0' +
        '\x07\u6B34\x02\x02\u01C0\x8C\x03\x02\x02\x02\u01C1\u01C2\x07\u884E\x02' +
        '\x02\u01C2\x8E\x03\x02\x02\x02\u01C3\u01C4\x05\x17\f\x02\u01C4\u01C5\x05' +
        '\x91I\x02\u01C5\x90\x03\x02\x02\x02\u01C6\u01C7\t\x06\x02\x02\u01C7\x92' +
        '\x03\x02\x02\x02\u01C8\u01C9\x05\x9BN\x02\u01C9\u01CA\x053\x1A\x02\u01CA' +
        '\x94\x03\x02\x02\x02\u01CB\u01CC\x05\x9BN\x02\u01CC\x96\x03\x02\x02\x02' +
        '\u01CD\u01CE\x053\x1A\x02\u01CE\x98\x03\x02\x02\x02\u01CF\u01D0\x05\x9D' +
        'O\x02\u01D0\u01D1\x05\x91I\x02\u01D1\u01D2\x05\x9FP\x02\u01D2\x9A\x03' +
        '\x02\x02\x02\u01D3\u01D4\x07\u6631\x02\x02\u01D4\x9C\x03\x02\x02\x02\u01D5' +
        '\u01D6\x07\u4E4D\x02\x02\u01D6\x9E\x03\x02\x02\x02\u01D7\u01D8\x07\u4E61' +
        '\x02\x02\u01D8\xA0\x03\x02\x02\x02\u01D9\u01DA\x05\x17\f\x02\u01DA\u01DB' +
        '\x05\xA5S\x02\u01DB\xA2\x03\x02\x02\x02\u01DC\u01DE\x05\xA1Q\x02\u01DD' +
        "\u01DF\x05\'\x14\x02\u01DE\u01DD\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02" +
        '\x02\u01DF\xA4\x03\x02\x02\x02\u01E0\u01E1\t\x07\x02\x02\u01E1\xA6\x03' +
        '\x02\x02\x02\u01E2\u01E3\x05\x17\f\x02\u01E3\u01E4\x05\xABV\x02\u01E4' +
        "\xA8\x03\x02\x02\x02\u01E5\u01E7\x05\xA1Q\x02\u01E6\u01E8\x05\'\x14\x02" +
        '\u01E7\u01E6\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8\xAA\x03' +
        '\x02\x02\x02\u01E9\u01EA\x07\u723D\x02\x02\u01EA\xAC\x03\x02\x02\x02\u01EB' +
        '\u01EE\x05\xAFX\x02\u01EC\u01EE\x05\xB1Y\x02\u01ED\u01EB\x03\x02\x02\x02' +
        '\u01ED\u01EC\x03\x02\x02\x02\u01EE\xAE\x03\x02\x02\x02\u01EF\u01F0\t\b' +
        '\x02\x02\u01F0\xB0\x03\x02\x02\x02\u01F1\u01F2\t\t\x02\x02\u01F2\xB2\x03' +
        '\x02\x02\x02\u01F3\u01F4\t\n\x02\x02\u01F4\xB4\x03\x02\x02\x02\u01F5\u01F8' +
        '\t\v\x02\x02\u01F6\u01F8\x05\xB3Z\x02\u01F7\u01F5\x03\x02\x02\x02\u01F7' +
        '\u01F6\x03\x02\x02\x02\u01F8\xB6\x03\x02\x02\x02\u01F9\u01FA\t\f\x02\x02' +
        '\u01FA\xB8\x03\x02\x02\x02\u01FB\u01FE\t\r\x02\x02\u01FC\u01FE\x05\xB7' +
        '\\\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FC\x03\x02\x02\x02\u01FE\xBA' +
        '\x03\x02\x02\x02\u01FF\u0204\x07?\x02\x02\u0200\u0201\x05\xC1a\x02\u0201' +
        '\u0202\x05\xC3b\x02\u0202\u0204\x03\x02\x02\x02\u0203\u01FF\x03\x02\x02' +
        '\x02\u0203\u0200\x03\x02\x02\x02\u0204\xBC\x03\x02\x02\x02\u0205\u020D' +
        '\x07\u2262\x02\x02\u0206\u0207\x07#\x02\x02\u0207\u020D\x07?\x02\x02\u0208' +
        '\u0209\x05\xBF`\x02\u0209\u020A\x05\xC1a\x02\u020A\u020B\x05\xC3b\x02' +
        '\u020B\u020D\x03\x02\x02\x02\u020C\u0205\x03\x02\x02\x02\u020C\u0206\x03' +
        '\x02\x02\x02\u020C\u0208\x03\x02\x02\x02\u020D\xBE\x03\x02\x02\x02\u020E' +
        '\u020F\x07\u4E0F\x02\x02\u020F\xC0\x03'
    private static readonly _serializedATNSegment1: string =
        '\x02\x02\x02\u0210\u0211\x07\u7B4B\x02\x02\u0211\xC2\x03\x02\x02\x02\u0212' +
        '\u0213\t\x0E\x02\x02\u0213\xC4\x03\x02\x02\x02\u0214\u0218\x05\xC9e\x02' +
        '\u0215\u0217\x05\xC7d\x02\u0216\u0215\x03\x02\x02\x02\u0217\u021A\x03' +
        '\x02\x02\x02\u0218\u0216\x03\x02\x02\x02\u0218\u0219\x03\x02\x02\x02\u0219' +
        '\xC6\x03\x02\x02\x02\u021A\u0218\x03\x02\x02\x02\u021B\u021D\t\x14\x02' +
        '\x02\u021C\u021B\x03\x02\x02\x02\u021D\xC8\x03\x02\x02\x02\u021E\u021F' +
        '\n\x0F\x02\x02\u021F\xCA\x03\x02\x02\x02\u0220\u0224\x05\xD1i\x02\u0221' +
        '\u0223\n\x10\x02\x02\u0222\u0221\x03\x02\x02\x02\u0223\u0226\x03\x02\x02' +
        '\x02\u0224\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0227' +
        '\x03\x02\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227\u0228\bf\x02\x02\u0228' +
        '\xCC\x03\x02\x02\x02\u0229\u022D\x05\xD3j\x02\u022A\u022C\v\x02\x02\x02' +
        '\u022B\u022A\x03\x02\x02\x02\u022C\u022F\x03\x02\x02\x02\u022D\u022E\x03' +
        '\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022E\u0230\x03\x02\x02\x02\u022F' +
        '\u022D\x03\x02\x02\x02\u0230\u0231\x05\xD3j\x02\u0231\u0232\x03\x02\x02' +
        '\x02\u0232\u0233\bg\x02\x02\u0233\xCE\x03\x02\x02\x02\u0234\u0236\x05' +
        '\xD5k\x02\u0235\u0234\x03\x02\x02\x02\u0236\u0237\x03\x02\x02\x02\u0237' +
        '\u0235\x03\x02\x02\x02\u0237\u0238\x03\x02\x02\x02\u0238\u0239\x03\x02' +
        '\x02\x02\u0239\u023A\bh\x03\x02\u023A\xD0\x03\x02\x02\x02\u023B\u023C' +
        '\t\x11\x02\x02\u023C\u023D\x05-\x17\x02\u023D\xD2\x03\x02\x02\x02\u023E' +
        '\u023F\t\x11\x02\x02\u023F\u0240\x07\u6BD7\x02\x02\u0240\xD4\x03\x02\x02' +
        '\x02\u0241\u0244\t\x12\x02\x02\u0242\u0244\x05\xD7l\x02\u0243\u0241\x03' +
        '\x02\x02\x02\u0243\u0242\x03\x02\x02\x02\u0244\xD6\x03\x02\x02\x02\u0245' +
        '\u0247\t\x13\x02\x02\u0246\u0245\x03\x02\x02\x02\u0247\xD8\x03\x02\x02' +
        '\x02 \x02\xEE\xF7\xFB\u010B\u0112\u0115\u011D\u011F\u0131\u014D\u015A' +
        '\u0160\u0168\u0170\u0183\u01DE\u01E7\u01ED\u01F7\u01FD\u0203\u020C\u0218' +
        '\u021C\u0224\u022D\u0237\u0243\u0246\x04\x02\x03\x02\b\x02\x02'
    public static readonly _serializedATN: string = Utils.join(
        [
            WenyanLexer._serializedATNSegment0,
            WenyanLexer._serializedATNSegment1,
        ],
        '',
    )
    public static __ATN: ATN
    public static get _ATN(): ATN {
        if (!WenyanLexer.__ATN) {
            WenyanLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(WenyanLexer._serializedATN))
        }

        return WenyanLexer.__ATN
    }

}

