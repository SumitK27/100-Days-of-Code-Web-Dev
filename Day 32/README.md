# **Day 32** <!-- omit in toc -->

1. [**Console Log**](#console-log)
2. [**Methods**](#methods)
3. [**Math Operations**](#math-operations)
   1. [**Addition**](#addition)
   2. [**Subtracting**](#subtracting)
   3. [**Multiplication**](#multiplication)
   4. [**Division**](#division)
   5. [**Modulus**](#modulus)
   6. [**Rules**](#rules)
4. [**Shorthand Operations**](#shorthand-operations)
   1. [**Increment**](#increment)
   2. [**Decrement**](#decrement)
   3. [**Addition**](#addition-1)
   4. [**Subtraction**](#subtraction)
   5. [**Multiplication**](#multiplication-1)
   6. [**Division**](#division-1)
5. [**String Operations**](#string-operations)
   1. [**Concatenation**](#concatenation)
   2. [**Length**](#length)
   3. [**Upper Case**](#upper-case)
   4. [**Lower Case**](#lower-case)
   5. [**Character At**](#character-at)

## **Console Log**

-   It is used for debugging the output.
-   `console.log()` takes flexible amount of parameters.
-   Output is only visible inside the console tab of Dev Tools.
-   It doesn't return anything.

```javascript
console.log("Hello");
```

---

## **Methods**

-   A function inside an object is called a method.

```javascript
let person = {
    // Property
    name: "Niko",

    // Method
    setName(name) {
        this.name = name;
    },

    getName() {
        console.log(this.name);
    },

    greet() {
        console.log("Hello " + this.name + "!");
    },
};

person.getName(); // Niko
person.greet(); // Hello Niko!

person.setName("Roman");
person.getName(); // Roman
person.greet(); // Hello Roman!
```

---

## **Math Operations**

-   Recap of [Day 31](../Day%2031/).

### **Addition**

-   Adds the values and return the result.

```javascript
console.log(5 + 2); // 7
```

### **Subtracting**

-   Subtracts the values and return the result.

```javascript
console.log(5 - 2); // 3
```

### **Multiplication**

-   Multiplies the values and return the result.

```javascript
console.log(5 * 2); // 10
```

### **Division**

-   Divides the values and return the result.
-   Value return would be a float value.

```javascript
console.log(5 / 2); // 2.5
```

### **Modulus**

-   Returns the remainder of the operation.
-   eg. `5/2` will return `1` as the remainder.

```javascript
console.log(5 % 2); // 1
```

### **Rules**

-   Regular Math Rules (BOADMAS) still apply.

```javascript
// 5 + 2 - 5 * 2 / 5 % 2 = 7
console.log(5 + 2 - (((5 * 2) / 5) % 2)); // 7
```

-   Evaluation of an expression starts from right to left.

```javascript
let result = 5;
result = result + 2; // 5 + 2
console.log(result); // 7
```

---

## **Shorthand Operations**

### **Increment**

```javascript
let result = 0;
result++; // result = result + 1
console.log(result); // 1
```

### **Decrement**

```javascript
let result = 0;
result--; // result = result - 1
console.log(result); // -1
```

### **Addition**

```javascript
let result = 0;
result += 2; // result = result + 2
console.log(result); // 2
```

### **Subtraction**

```javascript
let result = 0;
result -= 2; // result = result - 2
console.log(result); // -2
```

### **Multiplication**

```javascript
let result = 5;
result *= 2; // result = result * 2
console.log(result); // 10
```

### **Division**

```javascript
let result = 5;
result /= 2; // result = result / 2
console.log(result); // 2.5
```

---

## **String Operations**

### **Concatenation**

-   Combines (concat) two strings.

```javascript
console.log("Niko" + " " + "Bellic"); // Niko Bellic
```

### **Length**

```javascript
let userName = "Niko";

console.log(userName.length); // 4
```

### **Upper Case**

```javascript
let userName = "Niko";

console.log(userName.toUpperCase()); // NIKO
```

### **Lower Case**

```javascript
let userName = "Niko";

console.log(userName.toLowerCase()); // niko
```

### **Character At**

```javascript
let userName = "Niko";

console.log(userName.charAt()); // N
console.log(userName.charAt(3)); // o
```
