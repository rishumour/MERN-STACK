function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {   // If the value is not an object, return it directly ... This handles primitive values like string, number, boolean, null
    return obj;
  }
  
  let copy = Array.isArray(obj) ? [] : {}; // Create a new empty array if the input is an array Otherwise create a new empty object

  for (let key in obj) { // Loop through every key in the object
   
    copy[key] = deepCopy(obj[key]); // Recursively copy each nested value
  }

  return copy; // Return the fully copied object
}

// Original object
const original = {
  name: "Aman",
  age: 21
};

const cloned = deepCopy(original); // Create a deep copy

cloned.name = "Ravi"; // Change the copied object

console.log(original.name); // Original stays unchanged -> Aman
console.log(cloned.name);   // The cloned gets changed -> Ravi