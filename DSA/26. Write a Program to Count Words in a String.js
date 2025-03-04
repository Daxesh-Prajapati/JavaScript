let str = 'Hello, world! This is JavaScript.';
let words = str.match(/\b\w+\b/g);

console.log(words); // Output: [ 'Hello', 'world', 'This', 'is', 'JavaScript' ]
console.log(words.length); // Output: 5

//-----------------------------Explaination----------------------//

// Explanation of /\b\w+\b/g:
// Symbol	Meaning

// /.../g	Delimiters for the regular expression with the g flag (global search) to find all matches.

// \b	Word boundary – Ensures the match starts and ends at a word boundary (i.e., not inside another word).

// \w+	Word characters (\w) – Matches letters (A-Z, a-z), numbers (0-9), and underscores (_) at least once (+).

// \b	Word boundary again – Ensures the word ends properly.

//---------------------------2nd method-----------------------------//

function countWords(str) {
  return str.trim().split(/\s+/).length; // Splitting by one or more spaces
}

// Example usage:
let string = 'Hello   world! This is  JavaScript.';
console.log('Word count:', countWords(string));
