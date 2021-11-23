# **Day 27** <!-- omit in toc -->

1. [**Styling Inputs**](#styling-inputs)
2. [**Label**](#label)
3. [**Types of Inputs**](#types-of-inputs)
   1. [**Text**](#text)
   2. [**Email**](#email)
   3. [**Number**](#number)
   4. [**Password**](#password)
   5. [**Date**](#date)
   6. [**Radio**](#radio)
   7. [**Checkbox**](#checkbox)
   8. [**File**](#file)
   9. [**Other Types of Inputs**](#other-types-of-inputs)

## **Styling Inputs**

```css
body {
    font-family: "Roboto", sans-serif;
    background-color: rgb(31, 30, 30);
}

form {
    width: 30rem;
    padding: 1rem;
    margin: 3rem auto;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
}

label {
    margin-bottom: 0.5rem;
    display: block;
}

input {
    width: 100%;
    display: block;
    margin-bottom: 1rem;
    box-sizing: border-box;
    border: 1px solid rgb(184, 184, 184);
    padding: 0.25rem;
    color: rgb(61, 58, 58);
}

input:focus {
    background-color: rgb(219, 190, 253);
    color: rgb(32, 5, 63);
    border-color: rgb(32, 5, 63);
}

button {
    display: block;
    /* font: normal 1rem "Roboto", sans-serif; */
    font: inherit;
    background-color: rgb(32, 5, 63);
    color: white;
    border: 1px solid rgb(32, 5, 63);
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: rgb(52, 14, 95);
    border-color: rgb(52, 14, 95);
}
```

-   `font` is the Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet.
-   `inherit` overwrites the specificity to inherit the styles instead of using the browser default stylings.

---

## **Label**

-   Describes the purpose of the input.
-   `for` attribute links the label with the input by using the `id` of the input.

```html
<form action="/" method="POST">
    <label for="username">Your Name</label>
    <input type="text" name="user-name" id="username" />
    <button>Submit</button>
</form>
```

---

## **Types of Inputs**

### **Text**

-   A single-line text input field.
-   Default type of input.

`<input type="text">`

### **Email**

-   An input field optimized for email input.
-   For a mobile device a keyboard for email type would show up.
-   Includes built-in validations.

`<input type="email">`

### **Number**

-   Optimized for number.
-   eg. Selecting quantity.

`<input type="number">`

### **Password**

-   Entered characters are hidden.

`<input type="password">`

### **Date**

-   Browser opens a date picker overlay.
-   eg. Date of Birth.

`<input type="date">`

### **Radio**

-   Can be used to present multiple options where only one option can be selected simultaneously.
-   eg. Gender Selection.

`<input type="radio">`

### **Checkbox**

-   Can be used for toggling.
-   eg. Agree to terms, Remember me.

`<input type="checkbox">`

### **File**

-   Allows user to pick a file.
-   eg. Uploading Image or PDF.

`<input type="file">`

### **Other Types of Inputs**

-   There are many other types of inputs which aren't used that often.
-   You could find them on [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)
