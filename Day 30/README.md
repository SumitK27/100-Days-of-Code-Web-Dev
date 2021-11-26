# **Day 30** <!-- omit in toc -->

1. [**Adding JavaScript to HTML**](#adding-javascript-to-html)
   1. [**Inside Head**](#inside-head)
   2. [**Inside Body**](#inside-body)
   3. [**External JavaScript File**](#external-javascript-file)
2. [**Values**](#values)
   1. [**Strings**](#strings)
   2. [**Numbers**](#numbers)
   3. [**Arrays**](#arrays)
   4. [**Objects**](#objects)
3. [**Variables**](#variables)
   1. [**let**](#let)
4. [**Syntax & Conventions**](#syntax--conventions)

## **Adding JavaScript to HTML**

### **Inside Head**

-   Code written inside gets executed immediately even if the page has not been loaded completely.

```html
<head>
    .....
    <script></script>
</head>
```

### **Inside Body**

-   Tag is added at the end of the body section.
-   Code is executed only after the entire page has been loaded.

```html
<body>
    .....
    <script></script>
</body>
```

### **External JavaScript File**

-   To use an external javascript file you can create one with any name but with the extension as `.js`. eg. `script.js`.
-   No script tag is required inside the javascript file.
-   Link the javascript file with the HTML document using the `script` tag with a `src` attribute.

```html
<head>
    .....
    <script src="path/to/script.js"></script>
</head>
```

## **Values**

### **Strings**

-   Can be written between single quotes (`' '`) or double quotes (`" "`).
-   You will need to use an escape character if you want to use the same quotes that wraps your string inside the text.

```js
"This is a string.";

"This is also a string.";

"This is a string with \"escape\" character";

'This is a string with another \'escape\' character';
```

### **Numbers**

-   Numbers in the JavaScript can be written directly unlike the strings that needs quotes surrounding them.

```js
32;
```

### **Arrays**

-   A variable can only store a single value at a time.
-   An array contain multiple values which are related to a category.
-   An array is written with a pair of square brackets `[]` and items are separated with a comma `,` between them.
-   eg. Hobbies.
-   Accessing an item from an array needs to add a square bracket after the name of an array and the position of the item written between them.
-   Positions inside an array is known as an index which starts from zero `0`.

```javascript
let hobbies = ["Sports", "Cooking", "Reading"];

alert(hobbies); // Output entire array.
alert(hobbies[0]); // Output first element from an array (Sports).
alert(hobbies[1]); // Output second element from an array (Cooking).
```

### **Objects**

-   Value is wrapped between a pair of curly braces `{ }`.
-   The value can contain different properties related the object.
-   eg. A person can have a name, age, gender, hobbies, etc. While the name can again be a combination of first name, middle name and last name.

```js
let person = {
    name: {
        firstName: "Niko",
        lastName: "Bellic",
    },
    age: 28,
    gender: "Male",
    hobbies: ["Shooting", "Travelling"],
};

alert(person); // Getting the entire object.
alert(person.name); // Accessing the property inside the object.
alert(person.name.firstName); // Accessing the nested property.
alert(person.age);
alert(person.gender);
alert(person.hobbies[0]);
```

## **Variables**

-   Used to store data or values.
-   Useful for reusing purposes.
-   Uses special keyword to create a variable.
-   Labels or variable names can be given any name but it should start with an alphabet and should not contain any special characters.
-   Code is executed from top to bottom so declaration should be done before using a variable.

### **let**

```js
let myMessage; // Declaring a variable.
myMessage = "Hi, I'm Niko!!!"; // Assigning a value to the variable.
let num = 32; // Declaring and assigning a value to a variable.

alert(myMessage); // Using the variable.
alert(myMessage); // Reusing the variable.

myMessage = "Text is Modified"; // Reassigning a variable.
alert(myMessage); // Using the variable.
```

## **Syntax & Conventions**

-   Syntax is a rule that must be followed in order to execute the program (properly).
    -   eg. variable name should not contain special characters, string should be placed between a pair of quote.
-   Conventional is optional to follow and doesn't affect the execution of the program. Be consistent with the conventions.
    -   eg. using camel case for assigning the name to the variable `myMessage`, adding a semicolon at the end of the line/statement `;`.
