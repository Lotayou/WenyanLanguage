grammar Wenyan;
// $antlr-format useTab false ;
// $antlr-format columnLimit 160;
// $antlr-format alignColons trailing;
program   : statement* EOF;
statement : (declareNumber | declareString | declarefunction) | ifStatement | (apply) | data;
/*====================================================================================================================*/
ifStatement : If statement EndIf Else statement;
If          : Ruo; // 若
EndIf       : Zhe; // 者
Else        : Ruo Fei; // 若非
Return      : Nai De; // 乃得

fragment Ruo : '若';
fragment Fei : '非';
fragment Nai : '乃';
fragment De  : '得';
fragment Zhe : '者';
/*====================================================================================================================*/
data : (string) | Identifier;

IHave : (Jin | Wu | Zi | You | You2)? You Yi?; //吾有一

fragment Jin  : '今';
fragment Wu   : '吾';
fragment Zi   : '兹';
fragment You  : '有';
fragment You2 : '又';
fragment Yi   : '一';

NameAs  : Ming Zhi? Yue | Ci? Suo Wei | Wei Zhi Yue?; //名之曰
ValueIs : Yue; //曰

fragment Ming : '名';
fragment Zhi  : '之';
fragment Yue  : '曰';
fragment Ci   : '此';
fragment Suo  : '所';
fragment Wei  : '謂' | '谓';
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
declareString
    : DeclareString ValueIs? s = string NameAs v = variable
    | DeclareString NameAs v = variable ValueIs? s = string;
// $antlr-format alignColons trailing;
DeclareString   : IHave Yan; //吾有一言
DeclareStringIs : DeclareString ValueIs?;
fragment Yan    : '言';

// $antlr-format alignColons hanging;
string
    : StringEmpty   # StringRemove0
    | StringEscape1 # StringRemove2
    | StringEscape2 # StringRemove1
    | StringEscape3 # StringRemove1;
StringEmpty: Left2 Right2 | String3 String3 | Left4 Right4;
// $antlr-format alignColons trailing;
StringEscape1      : Left2 NonEscape+ Right2;
StringEscape2      : Left2 NonEscape+ Right2;
StringEscape3      : String3 NonEscape+ String3;
fragment Left2     : '「「';
fragment Right2    : '」」';
fragment Left4     : '『';
fragment Right4    : '』';
fragment String3   : '"';
fragment NonEscape : '\\' (["\\/0bfnrt]) | ~[\\];
/*====================================================================================================================*/
// $antlr-format alignColons hanging;
declareNumber
    : DeclareDigit ValueIs? number NameAs v = variable EndDeclare?
    | DeclareDigitIs number NameAs v = variable EndDeclare?;
// $antlr-format alignColons trailing;
DeclareDigit   : IHave Shu;
DeclareDigitIs : DeclareDigit ValueIs?; //吾有一数
fragment Shu   : '數' | '数';
/*====================================================================================================================*/
variable : Left Identifier Right | Left3 Identifier Right3;
Left     : '「';
Right    : '」';
Left3    : '[';
Right3   : ']';
/*====================================================================================================================*/
//吾有一術。名之曰「六脈神劍」。欲行是術。必先得六數。曰「甲」。曰「乙」。曰「丙」。曰「丁」。曰「戊」。曰「己」乃行
// 是術曰。⋯⋯是謂「六脈神劍」之術也。
// $antlr-format alignColons hanging;
declarefunction
    : DeclareMethod NameAs variable variables FunctionStart FunctionEnd
    | DeclareMethod NameAs variable;
// $antlr-format alignColons trailing;
FunctionStart : Is Shu2 ValueIs; //是术曰
FunctionEnd   : ThisIs . MethodOf; //是谓「XX」之术也

//欲行是術必先得六數
variables : VariableStart (NameAs variable)+ VariableEnd;

VariableStart : Yu2 Xing Is Shu2 '必先得' Number Shu;
VariableEnd   : Nai Xing;
fragment Yu2  : '欲';
fragment Xing : '行';

DeclareMethod : IHave Shu2; //吾有一术
fragment Shu2 : '術' | '术';

ThisIs       : Shi Wei; // 是谓
Is           : Shi;
Said         : Wei;
MethodOf     : Of Shu2 Ye; // 之术也
EndDeclare   : Ye;
fragment Shi : '是';
fragment Of  : '之';
fragment Ye  : '也';

//施「翻倍」於「大衍」
apply : Apply f = variable At x = variable;

The           : Zhi;
At            : Yu;
Apply         : Shi2;
fragment Shi2 : '施';
fragment Yu   : '於' | '于';

End          : Yun Yun; //云云
fragment Yun : '云';
/*====================================================================================================================*/
number : Left3 n = Number Right3 | n = Number;
Number : [0-9]+ | Digit+;
Digit  : [零一二三四五六七八九十]| [百千万亿兆];
/*====================================================================================================================*/
Equal   : '=' | Den Yu;
Unequal : '≠' | '!=' | Bu Den Yu;

fragment Bu  : '不';
fragment Den : '等';
/*====================================================================================================================*/
Identifier : Character+;
Character  : Underline | [\p{Latin}]| [\p{Han}] | [\p{Hiragana}] | [\p{Katakana}];
Underline  : '_' | '-';
/*====================================================================================================================*/
LineComment                : CommentStart ~[\r\n]* -> channel(HIDDEN);
PartComment                : Comment .*? Comment -> channel(HIDDEN);
WhiteSpace                 : UnicodeWhiteSpace+ -> skip;
fragment CommentStart      : ('注' | '疏' | '批') Yue;
fragment Comment           : ('注' | '疏' | '批') '毕';
fragment UnicodeWhiteSpace : [\p{White_Space}]| Delimiter;
fragment Delimiter         : '。' | '，' | ',';