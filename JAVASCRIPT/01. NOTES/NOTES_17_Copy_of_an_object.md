# Copying objects in JavaScript

Copying an object means making a new object from an existing one. The main difference is whether nested objects are shared or fully duplicated. 

## Types of copy

- **Shallow copy**: copies only the first level; nested objects still point to the same references. 
- **Deep copy**: copies all levels; the new object is fully independent. 
- **Assignment copy**: `let b = a` does not copy the object; both variables point to the same object. 

## Shallow copy example

```javascript
let person = {
  name: "Aarav",
  address: {
    city: "Delhi"
  }
};

let copy = { ...person };

copy.name = "Riya";
copy.address.city = "Mumbai";

console.log(person.name);         // Aarav
console.log(person.address.city);  // Mumbai
```

Here, `name` is copied, but `address` is shared, so changing `copy.address.city` also changes the original. 

## Deep copy example

```javascript
let person = {
  name: "Aarav",
  address: {
    city: "Delhi"
  }
};

let copy = JSON.parse(JSON.stringify(person));

copy.address.city = "Mumbai";

console.log(person.address.city);  // Delhi
console.log(copy.address.city);    // Mumbai
```

This makes a fully separate copy for plain data objects. 

## Common methods

- Spread operator: `{ ...obj }` gives a shallow copy. 
- `Object.assign({}, obj)` gives a shallow copy. 
- `JSON.parse(JSON.stringify(obj))` gives a deep copy for simple data, but it does not handle functions, `undefined`, dates, circular references, and some special types well. 
- `structuredClone()` is a modern deep-copy option in supported environments. 

## Steps

1. Decide whether your object is flat or nested.
2. Use a shallow copy for simple top-level data.
3. Use a deep copy for nested data that must stay independent.
4. Test by changing the copy and checking whether the original changes. 