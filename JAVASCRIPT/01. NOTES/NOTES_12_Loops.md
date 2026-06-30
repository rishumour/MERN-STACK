# For loops in JavaScript

A `for` loop is used to repeat a block of code a fixed number of times or to go through items in a sequence. It has three parts: initialization, condition, and update. 

## Basic syntax

```javascript
for (initialization; condition; update) {
  // code to repeat
}
```

## How it works

- Initialization runs once at the start.
- Condition is checked before each iteration.
- Update runs after each iteration. 

## Simple example

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Output:**
```text
1
2
3
4
5
```

## Example with array

```javascript
let fruits = ["apple", "banana", "mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**Output:**
```text
apple
banana
mango
```

## Steps

1. Set the counter variable.
2. Check the condition.
3. Run the loop body.
4. Update the counter.
5. Repeat until the condition becomes false. 

## Important points

- `let` is usually used for the loop variable because it stays block-scoped. 
- You can use `break` to stop the loop early. 
- Nested `for` loops are possible when you need repeated repetition, such as in matrix problems. 