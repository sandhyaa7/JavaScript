//Exercise 1
let number = maxi(8, 99);
console.log(number);

function maxi(number1, number2) {
  if (number1 > number2) return number1;
  return number2;
}
//Exercise another way to write
let num = max(23, 22);
console.log(num);
function max(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

//Exercise 2
let measurement = isLandscape(200, 1000);
console.log(measurement);

function isLandscape(width, height) {
  return width > height;
}

//Exercise 3
//If the number is divisible by 3 = Fizz
//If the number is divisible by 5 = Buzz
//If the number is divisible by both 3 and 5 = FizzBuzz
//If not divisible by 3 or 5 = input
const output = fizzBuzz(37);
console.log(output);

function fizzBuzz(input) {
  if (typeof input != "number") return "Input must be a number";

  if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz";

  if (input % 3 === 0) return "Fizz";

  if (input % 5 === 0) return "Buzz";
  return input;
}

//Exercise 4

//speed limit = 70
// for every 5 above speed limit you get 1 point
// More than 12 points license is suspended
//Math.floor(1.3)
const speedLimit = 70;
const kmPerPoint = 5;
let yourSpeed = checkSpeed(12);

function checkSpeed(speed) {
    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    } 

    const points = Math.floor(speed - speedLimit) / kmPerPoint;
    if (points >= 12) 
        console.log("License is suspended");
    else 
        console.log("points", points);

}



//Exercise 5
//Checks if number is even or odd and prints the message.
showNumbers(10);
function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0)? 'EVEN' : 'ODD'
    console.log(i, message);
  
  }

}



//Exercise 6
//takes an array and returns the number of truthy elements in the array
const array = [5, 6, null, 7, 8, 1, 0];

console.log(countTruthy(array));
function countTruthy(array) {
  let count = 0;
  for (let value of array)
    if (value)
      count++;
    return count;
}


//Exercise 7
//display all the properties of the type string of an object

const book = {
  title: "Harry Potter",
  author: "J.K. Rowling",
  year: 1997,
};

showProperties(book);

function showProperties(obj){
  for (let key in obj)
    if(typeof obj[key] === 'string')
      console.log(key, ':', obj[key]);

}



//Exercise 8
//Sum of multiples of 3 and 5
console.log(sum(100));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i < limit; i++){
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;

}


//Exercise 9
//Calculate grade of a student
//Average = 70
//Grade A = 90-100
//Grade B = 80-89
//Grade C = 70-79
//Grade D = 60-69
//Grade F = 1-59


const marks = [95, 98, 91]

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) 
    sum += value;
  return sum / array.length;

}
function calculateGrade(marks) {
  const average = calculateAverage(marks);
  if(average < 60) return 'F';
  if(average < 70) return 'D';
  if(average < 80) return 'C';
  if(average < 90) return 'B';
  return 'A';

}

console.log(calculateGrade(marks));




//Exercise 10
//Print stars
showStars(3);

function showStars(rows) {
  for (let i = 1; i <= rows; i++){
    let pattern = '';
    for (let j = 0; j < i; j++)
      pattern += '*';
    console.log(pattern);
  }
}



//Exercise 11
//Show all the prime numbers upto a given limit

showPrimeNumbers(10);


function showPrimeNumbers(limit) {
  for (let number = 2; number <= limit; number++) 
    if (isPrime(number)) console.log(number);  

}

function isPrime(number) {
  for (let factor = 2; factor < number; factor++)
    if (number % factor === 0) 
      return false;
    
  return true;
}