# Operators in JavaScript

Operators are symbols that tell JavaScript to perform an action on values or variables. They are used for math, comparisons, logic, assigning values, and more.

## Main types

- Arithmetic operators: `+`, `-`, `*`, `/`, `%`, `**`, `++`, `--`. These are used for calculations.
- Assignment operators: `=`, `+=`, `-=`, `*=`, `/=`, `%=`. These are used to assign or update values.
- Comparison operators: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`. These compare values and return `true` or `false`.
- Logical operators: `&&`, `||`, `!`. These combine or invert conditions.
- Ternary operator: `condition ? value1 : value2`. This is a short form of `if...else`

## Examples

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13
console.log(a - b);   // 7
console.log(a * b);   // 30
console.log(a / b);   // 3.333...
console.log(a % b);   // 1
console.log(a ** b);  // 1000

let x = 5;
x += 2;               // x = 7

console.log(10 > 5);  // true
console.log(10 === "10"); // false
console.log(10 == "10");  // true

console.log(true && false); // false
console.log(true || false);  // true
console.log(!true);          // false
```

## Important points

- Comparison operators return boolean values.
- `==` checks only value, while `===` checks both value and type. 
- Use parentheses to control the order of operations when needed