grammar Humans;

program
 : line+ EOF
 ;

line
 : expression NEWLINE*
 ;

expression
 : action
 | if_statement
 ;

action
 : move
 | pickUp
 | drop
 ;

if_statement
 : IF ROUND_BRACKET_OPEN condition ROUND_BRACKET_CLOSE CURLY_BRACKET_OPEN NEWLINE? expression NEWLINE? CURLY_BRACKET_CLOSE
 ;

condition
 : condition ' and ' condition
 | condition ' or ' condition
 | condition_part OPERATOR condition_part
 ;

condition_part
 : OBJECT
 | scan
 ;

move: 'move' DIRECTION;
pickUp: 'pickup';
drop: 'drop';
scan: 'scan' DIRECTION;

OPERATOR: ('=='|'!=');
DIRECTION: ('up'|'down'|'left'|'right');
OBJECT: ('wall'|'empty'|'block');
NEWLINE: ('\r'? '\n' | '\r')+;
IF: 'if';
ROUND_BRACKET_OPEN: ' '? '(' ' '?;
ROUND_BRACKET_CLOSE: ' '? ')' ' '?;
CURLY_BRACKET_OPEN: ' '? '{' ' '?;
CURLY_BRACKET_CLOSE: ' '? '}' ' '?;

WHITESPACE: (' '|'\t') -> skip;
LINE_COMMENT: '//' .*? NEWLINE -> skip;

// By adding this, every character will always be parsed and the lexer will never give an error.
ERROR_CHARACTER: .;
