# **Day 31** <!-- omit in toc -->

1. [**Operations**](#operations)
   1. [**Addition**](#addition)
   2. [**Subtraction**](#subtraction)
   3. [**Multiplication**](#multiplication)
   4. [**Division**](#division)
2. [**Function**](#function)
   1. [**Scope**](#scope)
   2. [**Return**](#return)
   3. [**Parameters**](#parameters)
3. [**Exercise**](#exercise)

## **Operations**

### **Addition**

```javascript
let num1 = 5;
let num2 = 2;
let sum = num1 + num2; // 5 + 2
alert(sum); // 7
```

### **Subtraction**

```javascript
let num1 = 5;
let num2 = 2;
let sub = num1 - num2; // 5 - 2
alert(sub); // 3
```

### **Multiplication**

```javascript
let num1 = 5;
let num2 = 2;
let mul = num1 * num2; // 5 * 2
alert(mul); // 10
```

### **Division**

```javascript
let num1 = 5;
let num2 = 2;
let div = num1 / num2; // 5 / 2
alert(div); // 2.5
```

---

## **Function**

-   Key feature of programming.
-   Let's you reuse a particular block of code anywhere else in the program.
-   A function is defined with `function` keyword.
-   Function has a name. Convention: function name should describe the operation to be perform.
-   A function might contain parameters described inside parenthesis `()`.
-   Defining a function doesn't execute it.

```javascript
let age = 45;
let adultYears;

// Defining the function
function calculateAdultYears() {
    adultYears = age - 18;
}

// Calling a function
calculateAdultYears();

alert(adultYears);
```

### **Scope**

-   A variable created inside a function is only accessible inside that particular function.

```javascript
function doSomething() {
    let value = 5;
}

doSomething();

alert(value); // Not accessible, throws "undefined" variable exception
```

-   Variable defined outside and inside a function are both separate variables.

```javascript
let value = 2; // Variable defined outside

function doSomething() {
    let value = 5; // Variable defined inside a function
}

doSomething();

alert(value); // 2
```

### **Return**

-   `return` is a keyword which is used to return a value from the function to outside of it where the function is been called.

```javascript
function doSomething() {
    return 10 - 5; // return 5
}

let value = doSomething(); // 5
alert(value); // 5

// OR
alert(doSomething()); // 5
```

### **Parameters**

-   Parameters are used to pass data from outside of the function to the function for performing operations on them.
-   Data is being passed while calling a function.

```javascript
function sum(a, b) {
    let sum = a + b;
    return sum;
}

alert(sum(5, 2)); // 7

// OR

let x = 7;
let y = 9;

alert(sum(x, y)); // 16
```

---

## **Exercise**

1. Create three new variables:
    - A variable that stores the name of an online course of your choice
    - A variable that stores the price of that course
    - A variable that stores the three main goals that you have, when taking this course
2. Output ("alert") the three variable values
3. Try "grouping" the three variables together and still output their values thereafter
4. Also output the second element in your "main goals" variable
5. Add a custom command that does the following:
    - Use your "main goals" variable and access an element by its identifier
    - The concrete identifier value should be dynamic / flexible
      (i.e. the command can be executed for different identifier)
    - The "main goals" variable should also be dynamic: The command should work
      with ANY list of values
    - The custom command should provide the accessed value (i.e. the list element)
6. Execute your custom command from (5) and output ("alert") the result
