// flow control - ex1.js

false || (true && false) // returns false
true || (1 + 2) // returns true (short-circuit)
(1 + 2) || true // returns 3 (short-circuit)
true && (1 + 2); // returns 3
false && (1 + 2); // returns false
(1 + 2) && true; // returns true
(32 * 4) >= 129; // returns false
false !== !true; // returns false
true === 4; // returns false
false === (847 === '847'); // returns true
false === (847 == '847'); // returns false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // returns true
