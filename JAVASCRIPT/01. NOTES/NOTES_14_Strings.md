# Strings in JavaScript

Strings are used to store text in JavaScript. They are one of the most common data types and can be written using single quotes, double quotes, or backticks.

## Basic syntax

```javascript
let name1 = "Aarav";
let name2 = 'Aarav';
let name3 = `Aarav`;
```

## Common string operations

- Length: `str.length` gives the number of characters. 
- Concatenation: use `+` to join strings.
- Comparison: use `===` for exact string matching. 
- Case conversion: use `toLowerCase()` or `toUpperCase()` for case-insensitive comparison.
- Search: use methods like `includes()` for checking if a substring exists.

## Examples

### 1) Print a string
```javascript
let message = "Hello, JavaScript!";
console.log(message);
```

**Output:**
```text
Hello, JavaScript!
```

### 2) Concatenate strings
```javascript
let firstName = "Aarav";
let lastName = "Sharma";

console.log(firstName + " " + lastName);
```

**Output:**
```text
Aarav Sharma
```

### 3) String length
```javascript
let text = "JavaScript";
console.log(text.length);
```

**Output:**
```text
10
```

### 4) Compare strings
```javascript
let a = "hello";
let b = "hello";

console.log(a === b);
```

**Output:**
```text
true
```

### 5) Case-insensitive comparison
```javascript
let x = "Hello";
let y = "hello";

console.log(x.toLowerCase() === y.toLowerCase());
```

**Output:**
```text
true
```

## Important points

- Strings are **immutable**, so you cannot change a character directly; instead, you create a new string. 
- String comparison with `===` is case-sensitive. 
- Adding a number to a string with `+` can create a new string instead of doing math. 