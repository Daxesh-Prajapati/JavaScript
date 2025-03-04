let str = 'Hello@ World! This# is% JavaScript$ 123.';
let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '');

console.log(cleanedStr); // HelloWorldThisisJavaScript123

//-------------------------Explaination-------------------//

// /.../g	Regular expression delimiters with g flag (global search for all matches).
// [^...]	Negation (caret ^) – Matches anything not inside the brackets.
// a-z	Matches lowercase letters (a to z).
// A-Z	Matches uppercase letters (A to Z).
// 0-9	Matches digits (0 to 9).
// g	Global flag – Ensures all occurrences are replaced.
