# **Day 34** <!-- omit in toc -->

1. [**Selecting first child element**](#selecting-first-child-element)
   1. [**Index**](#index)
   2. [**firstChild**](#firstchild)
   3. [**firstElementChild**](#firstelementchild)
   4. [**Child Node**](#child-node)
2. [**Ways of Selecting Elements**](#ways-of-selecting-elements)
   1. [**getElementById**](#getelementbyid)
   2. [**querySelector**](#queryselector)
   3. [**querySelectorAll**](#queryselectorall)
3. [**Exercise**](#exercise)
4. [**Adding an Element**](#adding-an-element)
   1. [**Create a New Element**](#create-a-new-element)
   2. [**Getting a parent element**](#getting-a-parent-element)
   3. [**Appending the new element to the parent**](#appending-the-new-element-to-the-parent)

## **Selecting first child element**

### **Index**

-   Accesses the HTML elements that are stored.

```javascript
document.body.children[0];
```

### **firstChild**

-   Accesses the first child node.
-   Will return the text node as the first child node in actually a line break followed by some white spaces used for indentation.

```javascript
document.body.firstChild;
```

### **firstElementChild**

```javascript
document.body.firstElementChild;
```

### **Child Node**

-   Contains a text or html tag.

---

## **Ways of Selecting Elements**

### **getElementById**

-   Selects the element with a certain ID present inside the document.

```javascript
let anchorElement = document.getElementById("page-link");
anchorElement.href = "https://facebook.com";
```

### **querySelector**

-   Selects the first element specified from the document.
-   Any tag, class name or id can be passed inside the query selector similar to the CSS selectors.

```javascript
anchorElement = document.querySelector("#page-link"); // by ID
anchorElement.href = "https://google.com";

anchorElement = document.querySelector("a"); // by Tag

anchorElement = document.querySelector("p a"); // Selects first anchor tag present inside a paragraph.
```

### **querySelectorAll**

-   Similar to `querySelector` but lets you select all the elements instead of the first element that matches the selector.
-   Return an array.

```javascript
document.querySelectorAll("p");
```

---

## **Exercise**

1. Select the `<h1>` element by "drilling into the DOM" and
   save it in a variable with a name of your choice
2. Use the variable from (1) and get access to the "parent"
   element of the stored `<h1>` element (i.e. to the `<body>` element)
   BONUS: Try using the variable from (1) to get access to the
   sibling element (i.e. the `<p>` element next to the `<h1>` element)
3. Select the `<h1>` element with getElementById and store in
   the same or a new variable (up to you)
4. Select the second `<p>` element with querySelector (you might
   need to add something in the HTML code, e.g. a class)
   and store it in a new variable with a name of your choice
5. BONUS TASK: Try changing the text content of the `<p>` element
   you selected in (4) and set it to any other text of your choice

---

## **Adding an Element**

```html
<body>
    <p id="toAdd"></p>
</body>
```

### **Create a New Element**

```javascript
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = "This leads to Google";
newAnchorElement.href = "https://google.com";
```

### **Getting a parent element**

```javascript
let parentElement = document.querySelector("#toAdd");
```

### **Appending the new element to the parent**

```javascript
parentElement.appendChild(newAnchorElement);
```
