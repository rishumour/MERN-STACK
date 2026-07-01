// =========================================
// JavaScript Strings
// =========================================

// A String is a sequence of characters.
// Strings are immutable (cannot be changed after creation).

// -----------------------------------------
// length
// -----------------------------------------

// Returns the number of characters in a string.

let str = "JavaScript";

console.log(str.length); // 10


// -----------------------------------------
// at()
// -----------------------------------------

// Returns the character at the given index.
// Supports negative indexing.

console.log(str.at(0));   // J
console.log(str.at(-1));  // t


// -----------------------------------------
// charAt()
// -----------------------------------------

// Returns the character at the specified index.
// Does NOT support negative indexing.

console.log(str.charAt(4)); // S


// -----------------------------------------
// concat()
// -----------------------------------------

// Joins two or more strings into one string.

let first = "Hello";
let second = "World";

console.log(first.concat(" ", second)); // Hello World


// -----------------------------------------
// includes()
// -----------------------------------------

// Checks whether a string contains a given value.
// Returns true or false.

console.log(str.includes("Script")); // true


// -----------------------------------------
// indexOf()
// -----------------------------------------

// Returns the index of the first occurrence.
// Returns -1 if not found.

console.log(str.indexOf("Script")); // 4


// -----------------------------------------
// lastIndexOf()
// -----------------------------------------

// Returns the last occurrence of a value.

let text = "banana";

console.log(text.lastIndexOf("a")); // 5


// -----------------------------------------
// startsWith()
// -----------------------------------------

// Checks whether a string starts with a value.

console.log(str.startsWith("Java")); // true


// -----------------------------------------
// endsWith()
// -----------------------------------------

// Checks whether a string ends with a value.

console.log(str.endsWith("Script")); // true


// -----------------------------------------
// slice()
// -----------------------------------------

// Extracts part of a string.
// Supports negative indexes.

console.log(str.slice(0, 4)); // Java
console.log(str.slice(-6));   // Script


// -----------------------------------------
// substring()
// -----------------------------------------

// Extracts characters between two indexes.
// Negative indexes are treated as 0.

console.log(str.substring(0, 4)); // Java


// -----------------------------------------
// replace()
// -----------------------------------------

// Replaces the first matching value.

console.log(str.replace("Java", "Type")); // TypeScript


// -----------------------------------------
// replaceAll()
// -----------------------------------------

// Replaces every matching value.

let msg = "cat cat cat";

console.log(msg.replaceAll("cat", "dog")); // dog dog dog


// -----------------------------------------
// split()
// -----------------------------------------

// Splits a string into an array.

let fruits = "Apple,Banana,Mango";

console.log(fruits.split(",")); // ['Apple', 'Banana', 'Mango']


// -----------------------------------------
// repeat()
// -----------------------------------------

// Repeats the string a given number of times.

console.log("Hi ".repeat(3)); // Hi Hi Hi


// -----------------------------------------
// trim()
// -----------------------------------------

// Removes spaces from both ends.

let user = "   Namish   ";

console.log(user.trim()); // Namish


// -----------------------------------------
// trimStart()
// -----------------------------------------

// Removes spaces only from the beginning.

console.log(user.trimStart());


// -----------------------------------------
// trimEnd()
// -----------------------------------------

// Removes spaces only from the end.

console.log(user.trimEnd());


// -----------------------------------------
// toUpperCase()
// -----------------------------------------

// Converts all characters to uppercase.

console.log(str.toUpperCase());


// -----------------------------------------
// toLowerCase()
// -----------------------------------------

// Converts all characters to lowercase.

console.log(str.toLowerCase());


// -----------------------------------------
// padStart()
// -----------------------------------------

// Pads the beginning until the required length.

console.log("7".padStart(3, "0")); // 007


// -----------------------------------------
// padEnd()
// -----------------------------------------

// Pads the end until the required length.

console.log("7".padEnd(3, "*")); // 7**


// -----------------------------------------
// match()
// -----------------------------------------

// Returns matches using a regular expression.

let sentence = "I have 2 apples and 5 oranges";

console.log(sentence.match(/\d/g)); // ['2', '5']


// -----------------------------------------
// search()
// -----------------------------------------

// Returns the index of the first regex match.

console.log(sentence.search(/\d/)); // 7


// -----------------------------------------
// charCodeAt()
// -----------------------------------------

// Returns the Unicode value of a character.

console.log("A".charCodeAt(0)); // 65


// -----------------------------------------
// String.fromCharCode()
// -----------------------------------------

// Converts Unicode values into characters.

console.log(String.fromCharCode(65)); // A


// -----------------------------------------
// toString()
// -----------------------------------------

// Converts a value into its string representation.

let num = 100;

console.log(num.toString()); // "100"


// -----------------------------------------
// String()
// -----------------------------------------

// Converts any value into a string.

console.log(String(true)); // "true"

// =========================================
// Additional String Methods
// =========================================


// -----------------------------------------
// localeCompare()
// -----------------------------------------

// Compares two strings lexicographically.
// Returns:
// 0  -> Equal
// -1 -> First string comes before second
// 1  -> First string comes after second

console.log("apple".localeCompare("banana")); // -1
console.log("cat".localeCompare("cat"));      // 0


// -----------------------------------------
// valueOf()
// -----------------------------------------

// Returns the primitive string value.

let strObj = new String("Hello");

console.log(strObj.valueOf()); // Hello


// -----------------------------------------
// toLocaleUpperCase()
// -----------------------------------------

// Converts string to uppercase based on locale.

console.log("hello".toLocaleUpperCase()); // HELLO


// -----------------------------------------
// toLocaleLowerCase()
// -----------------------------------------

// Converts string to lowercase based on locale.

console.log("HELLO".toLocaleLowerCase()); // hello


// -----------------------------------------
// normalize()
// -----------------------------------------

// Normalizes Unicode characters for consistent comparison.

let a = "\u00F1";      // ñ
let b = "\u006E\u0303"; // n + ~

console.log(a === b);                // false
console.log(a.normalize() === b.normalize()); // true


// -----------------------------------------
// codePointAt()
// -----------------------------------------

// Returns the Unicode code point of a character.

console.log("A".codePointAt(0)); // 65


// -----------------------------------------
// String.raw()
// -----------------------------------------

// Returns a raw string without interpreting escape characters.

console.log(String.raw`Hello\nWorld`);
// Hello\nWorld


// -----------------------------------------
// matchAll()
// -----------------------------------------

// Returns an iterator containing all regex matches.

let sentence2 = "Cat Bat Rat";

for (let word of sentence2.matchAll(/[A-Z][a-z]+/g)) {
    console.log(word[0]);
}

// Cat
// Bat
// Rat


// -----------------------------------------
// isWellFormed()
// -----------------------------------------

// Checks whether a string is well-formed Unicode.
// (Modern JavaScript feature)

console.log("Hello".isWellFormed()); // true


// -----------------------------------------
// toWellFormed()
// -----------------------------------------

// Converts malformed Unicode into a well-formed string.

console.log("Hello".toWellFormed());


// -----------------------------------------
// Comparison Operators
// -----------------------------------------

// Strings are compared lexicographically.

console.log("apple" < "banana"); // true
console.log("Zoo" > "Apple");    // true


// -----------------------------------------
// String Interpolation
// -----------------------------------------

// Template literals allow variables inside strings.

let name = "Namish";
let age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);


// -----------------------------------------
// Multi-line Strings
// -----------------------------------------

// Backticks allow writing multiple lines.

let text2 = `JavaScript
is
awesome`;

console.log(text2);


// -----------------------------------------
// Chaining Methods
// -----------------------------------------

// Multiple string methods can be chained together.

let msg2 = "   hello javascript   ";

console.log(
    msg2.trim()
       .toUpperCase()
       .replace("JAVASCRIPT", "JS")
);

// HELLO JS


// -----------------------------------------
// Common Interview Trick
// -----------------------------------------

// Strings are immutable.

let word = "Hello";

word.replace("H", "Y");

console.log(word); // Hello

// Must assign the returned string.

word = word.replace("H", "Y");

console.log(word); // Yello


// -----------------------------------------
// Convert String ↔ Array
// -----------------------------------------

// String -> Array

let str2 = "Java";

console.log(str2.split(""));
// ['J', 'a', 'v', 'a']


// Array -> String

let arr = ["J", "a", "v", "a"];

console.log(arr.join("")); // Java


// -----------------------------------------
// Useful Escape Characters
// -----------------------------------------

// \n  -> New line
// \t  -> Tab
// \\  -> Backslash
// \'  -> Single quote
// \"  -> Double quote

console.log("Hello\nWorld");
console.log("Hello\tJS");
console.log("C:\\Users\\Admin");


// =========================================
// End of Additional Notes
// =========================================