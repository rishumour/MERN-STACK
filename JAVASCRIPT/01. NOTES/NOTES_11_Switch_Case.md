# Switch case in JavaScript

`switch` is a conditional statement used when you want to compare one value against several possible options. It is often cleaner than using many `if...else if` checks for the same variable. 

## Basic syntax

```javascript
switch (expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
```

## How it works

- The expression is compared with each `case`.
- If a match is found, the matching block runs.
- `break` stops the switch from continuing into the next case.
- `default` runs when no case matches. 

## Example

```javascript
let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Regular day");
}
```

**Output:**
```text
Start of the week
```

## Important points

- `switch` uses strict comparison, so values must match in both value and type. 
- If you forget `break`, execution can continue into the next case, called **fall-through**. 
- `default` is optional, but useful for handling unmatched values. 