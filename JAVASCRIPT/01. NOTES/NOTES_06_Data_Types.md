# Data types in JavaScript

JavaScript data types define what kind of value a variable can hold. JavaScript is dynamically typed, so the same variable can store different data types at different times. 

## Main data types

JavaScript has 8 common data types: 7 primitive types and 1 object type. 

- `Number`: numeric values like `10`, `3.14`, `Infinity`, and `NaN`. 
- `String`: text inside quotes like `"hello"`. 
- `Boolean`: logical values, `true` or `false`. 
- `Undefined`: a variable declared but not assigned a value. 
- `Null`: intentional absence of a value. 
- `BigInt`: very large integers. 
- `Symbol`: unique identifiers. 
- `Object`: collections of data, including arrays, functions, dates, maps, and sets. 

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

You can use `typeof` to check a value’s type. It is commonly used for debugging and understanding what a variable holds. 

```javascript
console.log(typeof 10);        // "number"
console.log(typeof "hi");      // "string"
console.log(typeof true);      // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null);      // "object" (special case)
```

## Notes

Primitive values are simple and immutable, while objects are more complex and can store multiple related values. Also, `null` is a special case because `typeof null` returns `"object"` in JavaScript. 


in JavaScript, `NaN` is not a separate data type. It is a special numeric value that means “Not a Number,” and it belongs to the `Number` type. 

## Example

```javascript
console.log(typeof NaN); // "number"
```

## Important point

`NaN` is used when a numeric operation fails or produces an undefined result, like `0 / 0`. 