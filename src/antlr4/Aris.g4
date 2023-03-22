grammar Aris;

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
 : copy
 | move
 | add
 | loop
 ;

move: MOVE (MEMORY_SLOT|INPUT) TO (MEMORY_SLOT|OUTPUT);
copy: COPY MEMORY_SLOT TO MEMORY_SLOT;
add: ADD MEMORY_SLOT TO MEMORY_SLOT;
loop: LOOP CURLY_OPEN NEWLINE line* CURLY_CLOSED;

ADD: 'add';
COPY: 'copy';
MOVE: 'move';
TO: 'to';
INPUT: 'input';
OUTPUT: 'output';
LOOP: 'loop';
CURLY_OPEN: '{';
CURLY_CLOSED: '}';
MEMORY_SLOT: (MEMORY_SLOT_NUMBER | MEMORY_SLOT_NAME);
MEMORY_SLOT_NUMBER: [0-9]+;
MEMORY_SLOT_NAME: [a-z]+;

NEWLINE: ('\r'? '\n' | '\r')+;
LINE_COMMENT: '//' .*? NEWLINE -> skip;

// We want to prevent commands like "move1to2" to be invalid, so we ensure that entire words are captured.
// After this, we can skip spaces.
UNIDENTIFIED: [a-z0-9_-]+;
WHITESPACE: (' '|'\t') -> skip;

// To prevent errors, catch any other character that we did not define.
ERROR_CHARACTER: .;
