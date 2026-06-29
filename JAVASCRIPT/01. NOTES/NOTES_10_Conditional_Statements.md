# Conditional statements in JavaScript

Conditional statements let JavaScript make decisions and run different code blocks depending on whether a condition is true or false. The most common ones are `if`, `else if`, `else`, `switch`, and the ternary operator.

## Main types

- `if`: runs a block only when the condition is truthy.
- `if...else`: runs one block if the condition is true, otherwise another block.
- `if...else if...else`: checks multiple conditions in order and runs the first matching block.
- `switch`: checks one value against many cases. It is useful when you compare the same variable with many possible values.
- Ternary operator: a short form of `if...else` for simple decisions.

## Examples

### 1) if
```javascript
let age = 18;

if (age >= 18) {
  console.log("Adult");
}
```

### 2) if...else
```javascript
let num = 5;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
```

### 3) if...else if...else
```javascript
let marks = 75;

if (marks >= 90) {
  console.log("A grade");
} else if (marks >= 60) {
  console.log("B grade");
} else {
  console.log("C grade");
}
```

### 4) switch
```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Friday":
    console.log("Weekend soon");
    break;
  default:
    console.log("Regular day");
}
```

### 5) Ternary operator
```javascript
let time = 10;
let greeting = time < 12 ? "Good morning" : "Good evening";
console.log(greeting);
```

## Important points

- Conditions usually use comparison operators like `==`, `===`, `>`, `<`, `>=`, and `<=`.
- JavaScript does not use `elseif`; it uses `else if`.
- `switch` is often cleaner than many `else if` statements when checking one variable against fixed values. 