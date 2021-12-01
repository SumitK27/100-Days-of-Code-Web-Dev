# **Day 35** <!-- omit in toc -->

1. [**Remove an Element**](#remove-an-element)
2. [**Move an Element**](#move-an-element)
3. [**InnerHTML**](#innerhtml)
4. [**Events**](#events)
   1. [**Click Event**](#click-event)
   2. [**Input Event**](#input-event)
   3. [**Other Events**](#other-events)
   4. [**Event Object**](#event-object)

## **Remove an Element**

```javascript
// 1. Select the element to be removed
let h1 = document.querySelector("h1");

// 2. Remove the element
h1.remove();

// Alternative (for older browsers)
h1.parentElement.removeChild(h1);
```

---

## **Move an Element**

```javascript
// 1. Select the element to be moved
let firstParagraph = document.querySelector("p");

// 2. Append that element to it's parent.
firstParagraph.parentElement.append(firstParagraph);
```

-   Browser automatically deletes the

---

## **InnerHTML**

-   Takes a string and assigns it to the element.
-   String can contain any HTML element as well.
-   You can't add use line break directly.

```javascript
firstParagraph.innerHTML = "Hello<br /><strong>World!!!</strong>";
```

---

## **Events**

-   JavaScript let's you to listen to all the events on the page.
-   You can write your own code that gets executed on a certain event.
-   Events can be added to an element with the help of `addEventListener` method.
-   `addEventListener` takes in two parameters. An event and a callback function.
-   Do not add `()` for the callback function else it will get executed immediately.
-   You can add multiple events on an element.

### **Click Event**

-   Fires when the element has been clicked.

```html
<p id="input">Click Me!!!</p>
```

```javascript
// Select the element
let clickableParagraph = document.getElementById("btn");

// Add the "click" event listener on the selected element
clickableParagraph.addEventListener("click", changeParagraphText);

// Callback function that should be executed on that click
function changeParagraphText() {
    clickableParagraph.textContent = "Clicked!!!";
    console.log("Paragraph Clicked!");
}
```

### **Input Event**

-   Fires when key is pressed, released, input and drag-and-drop events.

```html
<input type="text" />
```

```javascript
let input = document.querySelector("input");

input.addEventListener("input", changingInput);

function changingInput() {
    let enteredText = input.value;
    console.log(enteredText);
}
```

### **Other Events**

-   There are many events available which can be found on the [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing).
-   Few of the common events are: keyup, keydown, keypress, mouseover, mouseleave.

### **Event Object**

-   Automatically passed by the browser for every event.
-   Event Object has many properties and methods.
-   `data` contains the data added at the moment and `target` shows the element on which the event listener has been added.
-   Properties & methods present in the event object depends on the type of the event.

```javascript
let input = document.querySelector("input");

input.addEventListener("input", changingInput);

function changingInput(event) {
    let enteredText = event.target.value;
    console.log("Contains: " + enteredText);
    console.log("Added: " + event.data);
}
```
