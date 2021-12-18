// Normal Function
function greetUser() {
    console.log("Hi there!");
}

greetUser();

// Function with Parameter
function greetUserParam(userName) {
    console.log("Hi " + userName + "!");
}

greetUserParam("Niko");

// Default Parameter Function
function greetUserDefault(userName = "user") {
    console.log("Hi " + userName + "!");
}

greetUserDefault("Niko");
greetUserDefault();

//
function greetUserMix(greeting, userName = "user") {
    console.log(greeting + " " + userName + "!");
}

greetUserMix("Hi", "Niko");
greetUserMix("Hi");
greetUserMix();

// ==================================================

function sumUp(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(sumUp(1, 2, 3));
console.log(sumUp(1, 2));

// N size array sum
function sumUpN(numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUpN([1, 5, 10, 11]));

// Sum of N values
// ... => rest operator
function sumUpNBetter(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

console.log(sumUpNBetter(1, 5, 10, 11, 20, 31));

// Array to List of parameters
function sumUpNConverted(...numbers) {
    let result = 0;

    for (const number of numbers) {
        result += number;
    }

    return result;
}

let numbers = [1, 5, 10, 11, 20, 31];
// ... => spread operator
console.log(sumUpNConverted(...numbers));

// ==========================================================

// Functions are objects
function add(num1, num2) {
    return num1 + num2;
}
console.log(add);
console.log(add.name);
console.log(add.length);
add.someProperty = "Some Value";
console.log(add.someProperty);

// ====================================================
// Template Literals

let greeting = "Hi";
let userName = "Niko";

console.log(greeting + " " + userName + "!");

console.log(`${greeting} ${userName}!`);

// ===========================================================
let hobbies = ["Sports", "Cooking"]; // pointer is stored

hobbies.push("Reading"); // Address doesn't change

console.log(hobbies);

hobbies = ["Coding", "Sleeping"]; // New Address is stored

//
const person = { age: 32 };

function getAdultYears(p) {
    p.age -= 18;
    return p.age;
}

console.log(person); // { age: 32 }
console.log(getAdultYears(person)); // 14
console.log(person); // { age: 14 }

//
const person2 = { age: 32 };

function getAdultYears2(p) {
    return p.age - 18;
}

console.log(person2); // { age: 32 }
console.log(getAdultYears2(person2)); // 14
console.log(person2); // { age: 32 }

//
const person3 = { age: 32 };

function getAdultYears3(p) {
    p.age -= 18;
    return p.age;
}

console.log(person3); // { age: 32 }
console.log(getAdultYears3({ ...person3 })); // 14
console.log(person3); // { age: 32 }
