// Original student object
let student1 = {
  name: "Aman",
  age: 21,
  marks: {
    math: 90,
    science: 95
  }
};

let student2 = { ...student1 };

student1.name = "Rahul";

student1.marks.math = 100;

console.log("Shallow Copy Example:");
console.log("student1 =", student1);
console.log("student2 =", student2);

let student3 = JSON.parse(JSON.stringify(student1));

student1.name = "Sahil";
student1.marks.science = 80;

console.log("Deep Copy Example:");
console.log("student1 =", student1);
console.log("student3 =", student3);