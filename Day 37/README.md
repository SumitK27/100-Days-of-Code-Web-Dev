# **Day 37** <!-- omit in toc -->

1. [**Exercise on DOM**](#exercise-on-dom)
2. [**Control Structures**](#control-structures)
3. [**Boolean Values**](#boolean-values)
4. [**Types of Operators**](#types-of-operators)
   1. [**Math**](#math)
   2. [**Concatenation**](#concatenation)
   3. [**Comparison**](#comparison)
      1. [**Equality**](#equality)
      2. [**Greater/Lesser**](#greaterlesser)
      3. [**Negation**](#negation)
   4. [**Logical**](#logical)
      1. [**&&**](#)
      2. [**||**](#-1)
5. [**Types of Control Structures**](#types-of-control-structures)
   1. [**Conditions**](#conditions)
      1. [**If**](#if)
   2. [**Loops**](#loops)

## **Exercise on DOM**

1. Select the two `<button>` elements and store them in two different variables.
    - Select the first button without adding or using any `id`
    - Select the second button by using an `id`
2. Add `click` event listener to both buttons (with two different functions).
   The functions should `console.dir()` the clicked buttons.
    - Output the first button by using the variable in which it's stored
    - Output the second button WITHOUT using the variable in which it's stored
3. Now select and store the paragraphs mentioned in the text you see on the page (first and third paragraph)
    - Select BOTH paragraphs by drilling into the document and `navigating` to the mentioned elements
    - If you struggle with DOM drilling, use `ids` instead but watch the solution!
4. Change the functions from (2) such that:

    - The first button removes the third paragraph (i.e. the `<p>` prior to it)
    - The second button changes the background color of the first paragraph to blue

5. Solve (4) both by changing the `inline styles` as well as by adding CSS classes

---

## **Control Structures**

-   Special features that allows you to control:
    -   under which conditions code is executed. eg. if-statements
    -   how often some code is executed. eg. loops

## **Boolean Values**

-   It can oly be `true` or `false`.
-   They are useful for yes or no question.

```javascript
console.log(true);
console.log(false);
```

---

## **Types of Operators**

### **Math**

### **Concatenation**

### **Comparison**

-   Derive boolean values.

#### **Equality**

-   Checks for values and types.
-   Contains `==` and `===`
-   `==` only compares the values and not the types.
-   `===` only compares the values along with the types.

```javascript
2 == 2; // true
"2" === 2; // false
3 === 3; // true
3 === 5; // false
"h" == "s"; // false
```

#### **Greater/Lesser**

-   `>`, `<`, `>=`, `<=`

```javascript
5 > 3; // true
5 < 3; // false
"a" < "b"; // true
"c" < "b"; // false
"cb" > "ab"; // true
4 <= 4; // true
```

#### **Negation**

-   Checks for inverse or something that is NOT true.
-   Contains `!`, `!=`, `!==`

```javascript
!true; // false
!false; // true
!(2 < 1); // true
5 !== 2; // true
8 != 8; // false
"4" !== 4; // true
"4" != 4; // false
```

### **Logical**

-   Useful when you want to chain two or more conditions.
-   Combine boolean values.

#### **&&**

-   `&&` represents `AND` operation.
-   It returns true only if all the conditions are satisfied.

```javascript
5 == 5 && 3 < 4; // true
5 == 5 && 6 < 4; // false
```

#### **||**

-   `||` represents `OR` operation.
-   It returns true if at least any one of the conditions is satisfied.

```javascript
5 == 5 || 3 < 4; // true
5 == 5 || 6 < 4; // true
```

---

## **Types of Control Structures**

### **Conditions**

#### **If**

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

### **Loops**

-   Allows you to execute a block of code number of times based on a condition.
