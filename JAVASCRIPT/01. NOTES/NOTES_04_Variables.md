# Variables in JavaScript

Variables are used to store data values so you can reuse and update them later. In JavaScript, the main ways to create variables are `let`, `const`, and `var`. 

## Main variable types

- `let`: used when the value can change later. It is block-scoped, so it only works inside the block where it is declared. 
- `const`: used when the value should not be reassigned. It is also block-scoped, and you must give it a value when declaring it. 
- `var`: an older way to declare variables. It is function-scoped, which can cause confusion in larger code. 

## Basic examples

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    let age = 20;
    age = 21;
    console.log(age);

    const name = "Aarav";
    console.log(name);

    var city = "Mumbai";
    console.log(city);
  </script>
</body>
</html>
```

**Console output:**
```text
21
Aarav
Mumbai
```

## Rules to remember

- Variables store different kinds of data such as numbers, strings, booleans, arrays, and objects. 
- Variable names cannot be used twice in the same scope with `let` or `const`. 
- `var` behaves differently because it is not block-scoped in the same way as `let` and `const`. 
- A variable declared inside a function is local to that function, while a global variable can be used outside functions too. 



# Types of variables in JavaScript

In JavaScript, variables can store different **data types**, and the language is dynamically typed, so the type is decided at runtime. A variable can hold numbers, text, true/false values, objects, arrays, and more. 

## Main types

- **Number**: for numeric values like `10` or `3.14`. 
- **String**: for text inside quotes like `"Hello"`. 
- **Boolean**: for `true` or `false`. 
- **Undefined**: when a variable is declared but not assigned a value. 
- **Null**: used for an intentional empty value. 
- **BigInt**: for very large integers. 
- **Symbol**: for unique identifiers. 
- **Object**: for collections of data, including arrays and functions. 

## Simple examples

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    let age = 20;              // Number
    let name = "Aarav";        // String
    let isStudent = true;      // Boolean
    let value;                 // Undefined
    let empty = null;         // Null
    let bigNumber = 12345678901234567890n; // BigInt
    let person = { name: "Aarav", age: 20 }; // Object
    let marks = ;  // Array

    console.log(typeof age);
    console.log(typeof name);
    console.log(typeof isStudent);
    console.log(typeof value);
    console.log(typeof empty);
    console.log(typeof bigNumber);
    console.log(typeof person);
    console.log(typeof marks);
  </script>
</body>
</html>
```

## Important note

JavaScript variables are **not fixed to one type forever**. The same variable can store different types at different times. 

```javascript
let x = 10;



# var, let, and const

`var`, `let`, and `const` are three ways to declare variables in JavaScript, but they differ in scope, reassignment, and hoisting behavior. In modern JavaScript, `let` and `const` are usually preferred over `var`.

## Main differences

| Feature | `var` | `let` | `const` |
|---|---|---|---|
| Scope | Function-scoped | Block-scoped | Block-scoped |
| Reassignable | Yes | Yes | No |
| Redeclarable in same scope | Yes | No | No |
| Must initialize at declaration | No | No | Yes |
| Hoisting behavior | Hoisted, initialized as `undefined` | Hoisted, not initialized | Hoisted, not initialized |

## Simple explanation

- `var` is the older keyword. It can be redeclared and is accessible throughout the function, which can cause bugs.
- `let` is used when the value may change later. It is block-scoped, so it only exists inside the `{ }` where it is declared.
- `const` is used when the value should not be reassigned. It is also block-scoped and must get a value when declared.

## Examples

```javascript
var a = 10;
var a = 20; // allowed
a = 30;      // allowed

let b = 10;
b = 20;      // allowed
// let b = 30; // not allowed in same scope

const c = 10;
// c = 20;    // not allowed
```

### Block scope example

```javascript
if (true) {
  var x = 1;
  let y = 2;
  const z = 3;
}

console.log(x); // 1
// console.log(y); // error
// console.log(z); // error
```

## Important note

`const` does not mean the value can never change at all; it means the variable cannot be reassigned. If a `const` variable stores an object or array, the contents can still be modified.
