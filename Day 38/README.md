# **Day 38** <!-- omit in toc -->

1. [**Types of Control Structures**](#types-of-control-structures)
   1. [**Conditions**](#conditions)
      1. [**If**](#if)
      2. [**If Else**](#if-else)
      3. [**If Else If**](#if-else-if)
   2. [**Loops**](#loops)
      1. [**For**](#for)
      2. [**For of**](#for-of)
      3. [**For in**](#for-in)
      4. [**While**](#while)
2. [**Truthy & Falsy Value**](#truthy--falsy-value)
   1. [**String**](#string)
   2. [**Numeric**](#numeric)
   3. [**Boolean**](#boolean)

## **Types of Control Structures**

### **Conditions**

#### **If**

-   Used when you want to run some code based on a condition.

**Syntax**

```javascript
if (condition) {
    // Code to execute based on the condition
}
```

**Example**

```javascript
const myName = "Niko";

if (myName === "Niko") {
    console.log("Hello Niko!");
}
```

#### **If Else**

-   Adding an else block is optional for if statements.
-   Else block is added when you want something to get executed when you fail to satisfy the given condition.

**Syntax**

```javascript
if (condition) {
    // Code to execute if condition is satisfied
} else {
    // Code to execute if condition is unsatisfied
}
```

**Example**

```javascript
const myName = "Roman";

if (myName === "Niko") {
    console.log("Hello Niko!");
} else {
    console.log("Hello User!");
}
```

#### **If Else If**

-   Adding an else if block is optional for if statements.
-   Else If block is added when you want to check for a condition when your primary condition has not met.

**Syntax**

```javascript
if (condition) {
    // Code to execute if condition is satisfied
} else if (someOtherCondition) {
    // Code to execute if first condition fails and the current condition passes
} else {
    // Code to execute if no conditions are unsatisfied
}
```

**Example**

```javascript
const myRating = 7;

if (myRating <= 3) {
    console.log("Bad");
} else if (myRating <= 7) {
    console.log("Good");
} else {
    console.log("Awesome");
}
```

**Example 2**

```javascript
let isLoggedIn = true;

if (isLoggedIn) {
    console.log("User is logged in!");
} else if (!isLoggedIn) {
    console.log("User is NOT logged in!");
}
```

### **Loops**

-   Allows you to execute a block of code number of times based on a condition.

#### **For**

-   Loop n number of times.

```javascript
// loop starts with the value of 'i' as 0 and runs till 'i' becomes 9 and 'i' is incremented by one in each iteration.
for (let i = 0; i < 10; i++) {
    console.log(i);
}
```

#### **For of**

-   Loop through all elements of an array.

```javascript
const users = ["Niko", "Roman", "Carl", "Tommy"];

// New variable will be created for each iteration.
for (const user of users) {
    console.log(user);
}
```

#### **For in**

-   Loop through all properties in an object.

```javascript
const loggedInUser = {
    name: "Niko",
    age: 26,
    isAdmin: true,
};

for (const propertyName in loggedInUser) {
    console.log(propertyName + ": " + loggedInUser[propertyName]);
}
```

#### **While**

-   Loop as long as a certain condition is met.

```javascript
let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Do you want to quit?");
}

console.log("DONE");
```

---

## **Truthy & Falsy Value**

### **String**

```javascript
if ("") {
    console.log("TRUE");
} else {
    console.log("FALSE"); // FALSE
}

if ("Niko") {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}

if ("0") {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}

if ("false") {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}
```

### **Numeric**

```javascript
if (0) {
    console.log("TRUE");
} else {
    console.log("FALSE"); // FALSE
}

if (10) {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}

if (0.2) {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}

if (-2) {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}
```

### **Boolean**

```javascript
if (false) {
    console.log("TRUE");
} else {
    console.log("FALSE"); // FALSE
}

if (true) {
    console.log("TRUE"); // TRUE
} else {
    console.log("FALSE");
}
```
