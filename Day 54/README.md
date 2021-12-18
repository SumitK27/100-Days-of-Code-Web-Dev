# **Day 54** <!-- omit in toc -->

1. [**Functions**](#functions)
   1. [**No Parameter**](#no-parameter)
   2. [**With Parameter**](#with-parameter)
   3. [**Default Parameter**](#default-parameter)
2. [**Operators**](#operators)
   1. [**Rest**](#rest)
   2. [**Spread**](#spread)
3. [**Functions are Objects**](#functions-are-objects)
4. [**Template Literal**](#template-literal)
5. [**Primitive vs Reference Values**](#primitive-vs-reference-values)
   1. [**Primitive Values**](#primitive-values)
   2. [**Reference Values**](#reference-values)

## **Functions**

### **No Parameter**

```javascript
// Normal Function
function greetUser() {
    console.log("Hi there!");
}

greetUser();
```

### **With Parameter**

```javascript
function greetUserParam(userName) {
    console.log("Hi " + userName + "!");
}

greetUserParam("Niko");
```

### **Default Parameter**

-   Useful when we may or may not want define any value.
-   It uses Defined value if passed any else uses a default value.
-   Default parameter should always be the last parameter in the function.

```javascript
function greetUserDefault(userName = "user") {
    console.log("Hi " + userName + "!");
}

greetUserDefault("Niko");
greetUserDefault();
```

```javascript
function greetUserMix(greeting, userName = "user") {
    console.log(greeting + " " + userName + "!");
}

greetUserMix("Hi", "Niko");
greetUserMix("Hi");
greetUserMix();
```

---

## **Operators**

### **Rest**

-   Combines any amount of received parameters into an array.
-   Used in function parameter lists (when defining a function).

```javascript
function findMin(...values) {
    // function code
}
```

### **Spread**

-   Split array or object values into a comma-separated list of values.
-   Used in any place where an array or object should be split up.

```javascript
const values = [-5, 3, 10];
Math.max(...values);
```

---

## **Functions are Objects**

```javascript
function add(num1, num2) {
    return num1 + num2;
}
console.log(add); // function object
console.log(add.name); // name of the function
console.log(add.length); // number of parameters
add.someProperty = "Some Value"; // sets a property to the function
console.log(add.someProperty); // Some Value
```

---

## **Template Literal**

-   Used for concatenation of string.
-   It allows line breaks
-   Uses \` Instead of `\"` or `\'`.

```javascript
console.log(greeting + " " + userName + "!");

console.log(`${greeting} ${userName}!`);
```

---

## **Primitive vs Reference Values**

### **Primitive Values**

-   They are simple values.
-   They can only contain a single at a time.
-   Values are stored in the memory.
-   Doesn't occupy lot of space, hence copying values is "cheap".
-   Examples:
    -   Numbers
    -   Strings
    -   Booleans
    -   Undefined
    -   Null

```javascript
let number = 1; // stores the value "1" in the memory
```

### **Reference Values**

-   They are complex values.
-   They can store more multiple values at a time.
-   Address is stored in the memory.
-   Avoids unnecessary copies.
-   Occupy lot of space, hence copying values is "expensive".
-   Examples:
    -   Objects
    -   Arrays

```javascript
let hobbies = ["Sports", "Cooking"]; // pointer is stored

hobbies.push("Reading"); // Address doesn't change

console.log(hobbies);

hobbies = ["Coding", "Sleeping"]; // New Address is stored
```

```javascript
const person = { age: 32 };

function getAdultYears(p) {
    p.age -= 18;
    return p.age;
}

console.log(person); // { age: 32 }
console.log(getAdultYears(person)); // 14
console.log(person); // { age: 14 }
```

```javascript
const person2 = { age: 32 };

function getAdultYears(p) {
    return p.age - 18;
}

console.log(person2); // { age: 32 }
console.log(getAdultYears(person2)); // 14
console.log(person2); // { age: 32 }
```

```javascript
const person3 = { age: 32 };

function getAdultYears3(p) {
    p.age -= 18;
    return p.age;
}

console.log(person3); // { age: 32 }
console.log(getAdultYears3({ ...person3 })); // 14
console.log(person3); // { age: 32 }
```
