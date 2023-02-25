grammar Humans;

program
 : line+ EOF
 ;

line
 : expression NEWLINE*
 ;

expression
 : action
 ;

action
 : copyto
 | inbox
 | outbox
 ;

copyto: 'copyto' MEMORY_SLOT;
inbox: 'inbox';
outbox: 'outbox';

MEMORY_SLOT_NUMBER: [0-9]+;
MEMORY_SLOT_NAME: [a-z]+;
MEMORY_SLOT: (MEMORY_SLOT_NUMBER | MEMORY_SLOT_NAME);

WHITESPACE: (' '|'\t') -> skip;
NEWLINE: ('\r'? '\n' | '\r')+;
LINE_COMMENT: '//' .*? NEWLINE -> skip;

// By adding this, every character will always be parsed and the lexer will never give an error.
ERROR_CHARACTER: .;
