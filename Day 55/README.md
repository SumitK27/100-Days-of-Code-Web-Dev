# **Day 55** <!-- omit in toc -->

1. [**Error Handling**](#error-handling)
2. [**Scoping & Shadowing**](#scoping--shadowing)
   1. [**Scoping**](#scoping)
   2. [**Shadowing**](#shadowing)
3. [**Classes and Objects**](#classes-and-objects)
4. [**Destructuring**](#destructuring)
   1. [**Array**](#array)
   2. [**Object**](#object)

## **Error Handling**

-   Use to handle errors when occurred.
-   Uses Try-Catch block.

```javascript
const fs = require("fs");

function readFile() {
    try {
        // Code where error might occur
        const fileData = fs.readFileSync("data.json");
    } catch (err) {
        // Code after error occurred
        console.log("An Error Occurred!");
        console.log(err);
    }

    console.log("Hi there!");
}

readFile();
```

---

## **Scoping & Shadowing**

### **Scoping**

-   Variables can only be used in certain places.
-   Constants, Variables are only available in the block (section within `{}` except for the object) where they are defined.
-   Variables defined can be used in the nested block.

```javascript
function readFile() {
    let varA = 10;
    try {
        const fileData = fs.readFileSync("data.json");

        console.log(fileData); // Accessible
        console.log(varA); // Accessible
    } catch (err) {
        console.log("An Error Occurred!", err);
    }

    console.log(fileData); // Not accessible
    console.log(varA); // Accessible
}
```

**To make it accessible**

```javascript
function readFile() {
    let fileData;
    try {
        fileData = fs.readFileSync("data.json");

        console.log(fileData); // Accessible
    } catch (err) {
        console.log("An Error Occurred!", err);
    }

    console.log(fileData); // Accessible
}
```

### **Shadowing**

-   Hiding a variable with same name if defined inside a nested block.
-   Variable defined inside is given higher priority.

```javascript
function shadowing() {
    let varA = 5;

    try {
        const varA = 10;
        console.log(varA); // 10
    } catch {
        console.log("An Error Occurred!");
    }

    console.log(varA); // 5
}

shadowing();
```

---

## **Classes and Objects**

-   Is a blueprint for creating similar type of data multiple times.

```javascript
console.log(new Date().toISOString());
```

-   `Date` - class/constructor function. Blueprints to create a new Date object.
-   `toISOString()` - Method present in the Date class.
-   `new Date()` - Executes the constructor method as soon as the object is created.

```javascript
class Job {
    constructor(title, location, salary) {
        this.title = title;
        this.location = location;
        this.salary = salary;
    }

    describe() {
        console.log(
            `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
        );
    }
}

const developer = new Job("Developer", "New York", 50000);
const cook = new Job("Cook", "Munich", 33000);

console.log(developer); // Job { title: 'Developer', location: 'New York', salary: 50000 }
console.log(cook); // Job { title: 'Cook', location: 'Munich', salary: 33000 }

developer.describe(); // I'm a Developer, I work in New York and I earn 50000.
```

---

## **Destructuring**

### **Array**

-   Let's you destructure (separate) the values from the array for later use.
-   Position matters to get the specific value.

```javascript
const input = ["Niko", "Bellic"];

// Normal
const firstName = input[0];
const lastName = input[1];

console.log(firstName); // Niko
console.log(lastName); // Bellic
console.log(input); // ["Niko", "Bellic"]

// Destructuring
const [first, last] = input;

console.log(first); // Niko
console.log(last); // Bellic
console.log(input); // ["Niko", "Bellic"]
```

### **Object**

-   Key name matters and should be the same.
-   You can use a custom name for any key from the object with `:`. eg. `keyFromObject`:`customName`

```javascript
const job = {
    title: "Developer",
    location: "New York",
    salary: 50000,
};

const { title: jobTitle, location, salary } = job;

console.log(jobTitle); // Developer
console.log(location); // New York
console.log(salary); // 50000
console.log(job); // { title: 'Developer', location: 'New York', salary: 50000 }
```
