# **Day 33** <!-- omit in toc -->

1. [**Array Operations**](#array-operations)
2. [**Global Objects**](#global-objects)
   1. [**Window**](#window)
   2. [**Document**](#document)
3. [**DOM**](#dom)
4. [**Traversing Document Tree**](#traversing-document-tree)
   1. [**HTML Document**](#html-document)
   2. [**DOM Tree Structure**](#dom-tree-structure)
   3. [**JavaScript**](#javascript)
      1. [**Drilling into Elements**](#drilling-into-elements)
      2. [**Query Elements**](#query-elements)

## **Array Operations**

-   A string similar to an array is a collection of characters.

```javascript
let hobbies = ["Sports", "Cooking"];
console.log(hobbies.length); // 2
```

---

## **Global Objects**

### **Window**

-   Global object.
-   Holds information related to the active browser window.
-   Everything inside the window object is globally available.

```javascript
console.log(window); // Return Properties and Methods of the window object.

alert("Hello Alert"); // Alert present in window object is directly accessible.
window.alert("Hello from Window"); // Accessing alert with window object.
```

### **Document**

-   Object of the window object.
-   Holds information and functionality to the loaded website content.

```javascript
console.log(window.document);
```

---

## **DOM**

-   Stands for **_Document Object Model_**.
-   Accessible through _document_ object.
-   Data representation of parsed HTML code.
-   Browser parses HTML code to JavaScript Objects.
-   JavaScript can interact with those objects.

**Example**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        ...
    </head>
    <body>
        <h1>Hi there!</h1>
        <p>
            This is a
            <a href="...">link</a>
        </p>
    </body>
</html>
```

```javascript
{
    ...,
    head: {
        ...,
        children: [
            {},
            {},
            {},
        ]
    },
    body: {
        ...,
        children: [
            ...,
            {
                nodeName: 'P',
                children: [
                    {
                        nodeName: 'A'
                    }
                ]
            },
        ],
        innerHTML: "\n<h1>Hi there!</h1>\n<p>\nThis is a\n<a href=\"...\"></a>\n</p>",
        innerText: "Hi there!\n\nThis is a"
    }
}
```

---

## **Traversing Document Tree**

-   `defer` attribute let's you load the javascript code only after the entire document has been loaded.

### **HTML Document**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Advance JavaScript</title>
        <script src="./script.js" defer></script>
    </head>
    <body>
        <h1>Hi there!</h1>
        <p>
            This is a
            <a href="#">link</a>
        </p>
    </body>
</html>
```

### **DOM Tree Structure**

```
               document
                   |
        ----------------------
        |                    |
       head                body
                             |
                    -------------------
                    |                  |
                   h1                  p
                                       |
                                       a
```

### **JavaScript**

#### **Drilling into Elements**

-   We need to know the exact structure of the DOM.
-   Not a preferred way.

```javascript
document.head.children[3].innerHTML; // Advance JavaScript
//       head  ->  title  -> innerHTML

document.body.children[1].children[0].href = "https://google.com/";
//       body  ->  p    ->    a  ->   href
```

#### **Query Elements**

-   Easier and most preferred way.
-   Makes use of utility functions. eg. `getElementById("some-id")`, `querySelector(".some-class")`.
-   Selection works similar to CSS selectors.
-   No need to know the exact DOM structure.

```javascript
console.log(document.getElementById("page-link").href); // https://www.google.com/
console.log(document.querySelector(".heading").innerHTML); // Hi there!
```
