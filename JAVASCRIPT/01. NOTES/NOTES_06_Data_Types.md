# Data types in JavaScript

JavaScript data types define what kind of value a variable can hold. JavaScript is dynamically typed, so the same variable can store different data types at different times. [web:59][web:71]

## Main data types

JavaScript has 8 common data types: 7 primitive types and 1 object type. [web:59][web:71]

- Number: numeric values like `10`, `3.14`, `Infinity`, and `NaN`. [web:59][web:71]
- String: text inside quotes like `"hello"`. [web:59][web:71]
- Boolean: logical values, `true` or `false`. [web:59][web:71]
- Undefined: a variable declared but not assigned a value. [web:59][web:73]
- Null: intentional absence of a value. [web:59][web:73]
- BigInt: very large integers. [web:59][web:73]
- Symbol: unique identifiers. [web:59][web:73]
- Object: collections of data, including arrays, functions, dates, maps, and sets. [web:59][web:74]

## Examples

```javascript
let age = 20;                 // Number
let name = "Aarav";           // String
let isStudent = true;         // Boolean
let value;                    // Undefined
let empty = null;             // Null
let big = 12345678901234567890n; // BigInt
let id = Symbol("id");        // Symbol
let person = { name: "Aarav" }; // Object
let marks = ;     // Object (Array)
```

## typeof operator

You can use `typeof` to check a value’s type. It is commonly used for debugging and understanding what a variable holds. [web:59][web:71]

```javascript
console.log(typeof 10);        // "number"
console.log(typeof "hi");      // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (special case)
```

## Notes

Primitive values are simple and immutable, while objects are more complex and can store multiple related values. Also, `null` is a special case because `typeof null` returns `"object"` in JavaScript. [web:75][web:73]