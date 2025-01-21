//This is my first javascript code
let myName = "Sandhya Sharma";
let myAge = 32;
const interestRate = 10;
let isMarried = true;

console.log(myName, myAge);
console.log("Interest rate: " + interestRate);
console.log("Interest rate: ", interestRate);
console.log("Are you married? ", isMarried);

//Objects
let car = {
  model: "Rav4",
  make: "Toyota",
  year: 2015,
};
console.log(car.model, car.make, car.year);

//Dot Notation
car.name = "Toby";

//Bracket notation
car["name"] = "Toby";

console.log(car.name);

//Arrays
let selectedColors = ['red', 'yellow'];
selectedColors[2] = 'green';
selectedColors[3] = 5;
console.log(selectedColors);
console.log(selectedColors.length);

//function performing a task
function greet(fullName, emailId) {
   console.log("Hello, " + fullName + ' email:' + emailId);
}
greet('Sandhya Sharma', 'abc@yahoo.com');
greet('John Doe', 'aa@ca.com');

//function calculating a value
function calculateArea(width, height) {
   return width * height;
}
console.log(calculateArea(10, 20));
