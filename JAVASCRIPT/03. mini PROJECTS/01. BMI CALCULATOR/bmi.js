// 1. Gather data through popup boxes
const heightInput = prompt("Enter your height in centimeters (e.g., 175):");
const weightInput = prompt("Enter your weight in kilograms (e.g., 70):");

// 2. Transform the text strings into floating-point numbers
const height = parseFloat(heightInput);
const weight = parseFloat(weightInput);

// 3. Verify that data exists and is realistic
if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    alert("Error: Please enter positive numeric values.");
} else {
    // 4. Calculate BMI (weight in kg / height in meters squared)
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    // 5. Categorize the weight bracket
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25.0) category = "Normal weight";
    else if (bmi < 30.0) category = "Overweight";
    else category = "Obese";

    // 6. Print out final result alert
    alert(`Your BMI is: ${bmi}\nCategory: ${category}`);
}