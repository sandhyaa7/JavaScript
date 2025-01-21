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

//Operators
//Arithmetic operators
let num1 = 10;
let num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

//Increment(++)
console.log(++num1);
console.log(num1++);
console.log(num1);

//Decrement(--)
console.log(--num1);


//Assignment Operators
let num3 = 10;
num3 += 20;
console.log(num3);
num3 -= 20;
console.log(num3);
num3 *= 20;
console.log(num3);

//Comparison Operators
let num4 = 10;
let num5 = '10';
console.log(num4 == num5);//loose equality operator
console.log(num4 != num5);
console.log(num4 > num5);
console.log(num4 < num5);
console.log(num4 >= num5);
console.log(num4 <= num5);
console.log(num4 === num5);//Strict equality operator
console.log(num4 !== num5);

//Ternary Operator
let points = 1000;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

//Logical Operators
//logical And(&&) returns true if both operands are TRUE
let a = true;
let b = false;
console.log(a && b);
console.log(a && true);

//logical OR(||) returns true if one of the operands is TRUE
console.log(a || b);

//NOT(!)
let isAnny = false;
console.log(!isAnny);

//Logical operators with non-booleans
//Falsy
//Undefined
//Null
//0
//false
//NaN
//Empty string ('')
//Anything that is not falsy is Truthy

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
console.log(currentColor);



//Operator precedence
//1. Parentheses
//2. Exponentiation
//3. Multiplication and Division
//4. Addition and Subtraction

let x = (2 + 3) * (4 - 1);
console.log(x);

let y = 10;
let z = (y > 10) ? 1 : 0;
console.log(z);

let as = (1 == true);
console.log(as);

let r = 10;
let t = r++;
console.log(t);
console.log(r++);


//Exercise
let a1 = 'red';
let b1 = 'blue';
let c1 = a1;
a1 = b1;
b1 = c1;
console.log(a1);
console.log(b1);

