// // JavaScript project fileclear

// let name = "Farhan Ali Mirani";
// let age = 21;
// let city = "Karachi";
// console.log(name);
// console.log(age);
// console.log(city);

// // Next Challenge

// console.log("My name is " + name + " and I am " + age + " years old.");
// console.log(`My name is ${name} and I am from ${city}`);
// console.log(`My name is ${name}, I am ${age} years old and I live in ${city}`);

// let name = "Farhan Mirani"; // String
// let age = 21; // Number
// let isStudent = true; // Boolean
// let city = "Karachi"; // String
// let salary = 45000; // Number

// console.log(typeof name); // String
// console.log(typeof age); // Number
// console.log(typeof isStudent); // Boolean

// Calculations

let a = 15;
let b = 8;

console.log(a + b); // 23
console.log(a - b); // 7
console.log( a * b); // 120
console.log(a / b); // 1.875
console.log(a % b); // 7
console.log(a ** b); // 2562890625

// Comparsion Operators

console.log(17 > 8); //true
console.log(17 < 8); // false
console.log(17 >= 8) // true
console.log(17 <= 8); // false
console.log(17 == 8); // false
console.log(17 === 8); // false

console.log(20 == 20); // true
console.log(20 === 20) // true
console.log(20 == "20"); // true
console.log(20 === "20"); // false

// Logical Opertors Practice

console.log(12 > 5 && 17 < 21); // true
console.log(14 > 16 && 12 < 26); // false
console.log(4 > 7 && 8 < 5); // false

console.log(23 > 15 || 27 < 43); // true
console.log(12 > 66 || 44 < 77); // true
console.log(15 > 21 || 16 < 12); // false


console.log(14 > 7); // true
console.log(!(25 > 14)); // false
console.log(!(65 > 71)); // true

// let age = 24;

// if(age >= 18){
//     console.log("You are Adult");
// }else{
//     console.log("You are under 18");
// }

// You are Adult

// Next Challenge Marks

let marks = 63;

if(marks >= 80){
    console.log("A+");
} else if (marks >= 70){
    console.log("A");
} else if (marks >= 60){
    console.log("B");
} else if (marks >= 50){
    console.log("C");
} else if (marks >= 40){
    console.log("D");
} else {
    console.log("F");
}

// B

// CNIC checking

// let age = 16;
// let isCNIC = true;

// if(age >= 18 && isCNIC == true){
//     console.log("You can Apply");
// } else {
//     console.log("You can not Apply");
// }

// You can not Apply

// Permission task

// let age = 24;
// let isPermission = false;

// if(age >= 18 || isPermission){
//     console.log("Access granted");
// } else {
//     console.log("Access Denied");
// }

// // Access Granted

// Next Challenge Task

let age = 24;
let isBanned = true;

if(age >= 18 && !isBanned){
    console.log("Acess Granted");
} else {
    console.log("Acess Denied");
}

// Access Denied

let day = "Friday";

switch(day){
    case "Monday":
    console.log("Start of Week");
    break;
    case "Tuesday":
    console.log("Second day");
    break;
    case "Wednesday":
    console.log("Independence day");
    break;
    case "Friday":
    console.log("Weekend is near");
    break;
    case "Sunday":
    console.log("Holiday");
    break;
    default:
    console.log("Normal day");
}

// Weekend is near

// ternary Operator

let Marks = 56;

let result = Marks >= 40 ? "Pass" : "Fail";

// Pass

for(let num = 1; num <= 10; num++){
    console.log(num);
}

for(let i = 1; i <= 10; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}

let sum = 0;

for(let i = 0; i <= 10; i++){
    sum += i;
}

console.log(sum);

let x = 1;

while(x <= 10){
    console.log(x);
    x++;
}

let num = 1;

while(num <= 20){
    if(num % 2 === 0){
        console.log(num);
    }
    num++;
}

