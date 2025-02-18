//If else conditions

let hour = 7;

if (hour >= 6 && hour < 12) {
  console.log("Good morning!");
} else if (hour >= 12 && hour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//Switch case
let role = "user";
switch (role) {
  case "admin":
    console.log("Admin");
    break;
  case "moderator":
    console.log("Moderator");
    break;
  case "user":
    console.log("User");
    break;
  default:
    console.log("Unknown role");
}

if (role === "user" && hour > 12) console.log("User");
else if (role === "moderator") console.log("Moderator");
else if (role === "admin") console.log("Admin");
else console.log("Unknown role");

//Loops
//For loop
for (let index = 0; index < 2; index++) {
  console.log("Hello World", index);
}

for (let index = 0; index <= 5; index++) {
  if (index % 2 !== 0) console.log(index);
}

//While loop
let i = 1;
while (i <= 5) {
  if (i % 2 !== 0) console.log(i);
  i++;
}

//Do-while loop
let j = 9;
do {
  if (j % 2 !== 0) console.log(j);
  j++;
} while (j <= 5);

//Infinite Loops are dangerous
let k = 0;
while (k < 10) {
  console.log(k);
  k++; //don't forget this
}

// while (true) {

// }

// let x = 0;
// do {
//     console.log(x);
//    //x++;
// } while (x <5);
// for (let x = 0; x < 11; x++ ) {
//     console.log(i);

// }

//for-in loop is ideal way to iterate over properties of an object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ["red", "green", "blue"];

for (let index in colors) {
  console.log(index, colors[index]);
}

//For-of loop is ideal way to iterate over arrays.
const fruits = ["apple", "banana", "cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}

//use of break and continue
let a = 0;
while (a <= 10) {
  if (a === 5) break;
  if (a % 2 === 0) {
    a++;
    continue;
  }
  console.log(a);
  a++;
}

