# Functions in JavaScript

Functions are reusable blocks of code that perform a specific task. They help make code shorter, cleaner, and easier to manage. 

## Basic syntax

```javascript
function greet() {
  console.log("Hello!");
}
```

## Steps

1. Define the function.
2. Add parameters if needed.
3. Write the code inside the function body.
4. Call the function using its name with `()`. 

## Examples

### 1) Simple function
```javascript
function greet() {
  console.log("Hello, world!");
}

greet();
```

**Output:**
```text
Hello, world!
```

### 2) Function with parameters
```javascript
function add(a, b) {
  console.log(a + b);
}

add(5, 3);
```

**Output:**
```text
8
```

### 3) Function with return
```javascript
function square(num) {
  return num * num;
}

console.log(square(4));
```

**Output:**
```text
16
```

### 4) Function with multiple lines
```javascript
function welcome(name) {
  console.log("Hello " + name);
  console.log("Welcome to JavaScript");
}

welcome("Aarav");
```

**Output:**
```text
Hello Aarav
Welcome to JavaScript
```

## Methods

- Function declaration: `function name() { }`
- Function expression: `const name = function() { }`
- Arrow function: `const name = () => { }` 

## Important points

- Parameters are the inputs written in the function definition.
- Arguments are the actual values passed while calling the function.
- `return` sends a value back from the function.
- If a function does not return anything, it gives `undefined`. 
