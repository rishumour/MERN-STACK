# Constructors in JavaScript

Constructors are special functions or methods used to create and initialize objects. They let you create many similar objects with the same structure and properties. 

## Basic idea

A constructor acts like a blueprint. When you use `new`, JavaScript creates a new object, sets its properties, and returns it automatically. 

## Types of constructors

- Function constructor: a regular function used with `new`.
- Class constructor: the `constructor()` method inside a `class`. 

## Function constructor example

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person("Aarav", 20);
let p2 = new Person("Riya", 22);

console.log(p1.name);
console.log(p2.age);
```

**Output:**
```text
Aarav
22
```

## Class constructor example

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p1 = new Person("Aarav", 20);
console.log(p1.name);
```

**Output:**
```text
Aarav
```

## Steps

1. Define the constructor.
2. Use `this` to assign properties.
3. Create objects with `new`.
4. Access the properties of the created object. 

## Important points

- A constructor usually starts with a capital letter in function-constructor style. 
- You should use `new` with constructor functions. 
- In classes, the `constructor()` method runs automatically when a new object is created. 
- JavaScript does not support classic function overloading for constructors. 