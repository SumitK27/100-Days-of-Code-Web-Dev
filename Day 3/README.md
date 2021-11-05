# **Day 3** <!-- omit in toc -->

1. [**Working with Colors**](#working-with-colors)
2. [**Code Formatting**](#code-formatting)
3. [**Developer Tools**](#developer-tools)
4. [**Adding Links**](#adding-links)
5. [**Nesting HTML Elements**](#nesting-html-elements)
6. [**CSS Rules**](#css-rules)
7. [**Structure of HTML Document**](#structure-of-html-document)
   1. [**DOCTYPE**](#doctype)
      1. [**History of HTML**](#history-of-html)
   2. [**HTML**](#html)
   3. [**Head**](#head)
   4. [**Body**](#body)

---

## **Working with Colors**

Colors can be represented with:

-   Names - `gray`. Although this are limited.
-   Hex Codes - `#534b4b`. This is a six digit where each pair represents the portion of Red, Green & Blue in the same sequence. There are 16 Million combinations.
-   RGB values - `rgb(83, 75, 75)` where the range of each color ranges from 0 to 255.
-   HSL - Hue Saturation Lightness. `hsl(0, 5%, 31%)`

**Example**

```html
<p style="color: gray;">Color with Name - gray</p>
<p style="color: #808080;">Color with HEX Code - #808080</p>
<p style="color: hsl(0, 0%, 50%);">Color with HSL - hsl(0%, 0%, 50%)</p>
<p style="color: rgb(128, 128, 128);">Color with RGB - rgb(128, 128, 128)</p>
```

---

## **Code Formatting**

Code can be formatted by three ways:

1. By Manually formatting it.
2. By using VS Code's built-in code formatter.
3. By using an extension `Prettier`.

Press `Alt + Shift + F` to auto-format the code. <br />
Open `Settings` in VS Code and search for `format` and select `Prettier` as the default code formatter. <br />
Optionally enable `Format on Save`

---

## **Developer Tools**

-   Useful for debugging any webpage.
-   Let's you inspect and tweak the code written.
-   Changes applied in the developer tools are not been saved.

1. Open developer tools in any browser by right clicking on the page and selecting `Inspect Element`, a Sidebar should open.
2. Click on `Elements` tab and place your pointer on any of the element, the element should be highlighted on the Page where it's present.
3. Click in the `Styles` tab to see the styling applied to that specific element under `element.style` and other browser default stylings below that under the tag names.

**Example**<br />
`index.html`

```html
<h1 style="font-family: sans-serif; text-align: center; color: rgb(83, 75, 75)">
    My Challenge for Tuesday, November 2nd
</h1>
```

`Developer Tools`<br />

`Elements Tab`

```html
<h1 style="font-family: sans-serif; text-align: center; color: rgb(83, 75, 75)">
    My Challenge for Tuesday, November 2nd
</h1>
```

`Styles Tab`<br />

`Element Style`

```css
element.style {
    font-family: sans-serif;
    text-align: center;
    color: rgb(83, 75, 75);
}
```

`Browser Default Styles`

```css
h1 {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
}
```

---

## **Adding Links**

-   Used for locating a resource present at somewhere else (page or external resource)
-   Done with the help of anchor tag `<a></a>`
-   Adding an address to the resource is possible with a `href` attribute.

**Example**

```html
<a href="https://www.google.com">Google</a>
```

---

## **Nesting HTML Elements**

-   Adding an element inside another HTML element.
-   You can nest as many levels as you want.

**Example**

```html
<p>
    <a href="https://www.google.com">Google</a>
</p>
```

---

## **CSS Rules**

**Syntax**

```css
selector {
    property: value;
}
```

```css
p {
    color: #534b4b;
}
```

1. **Selector** - `p` is a tag selector that selects all the paragraphs on the web page.
2. **Property** - `color` sets the text color.
3. **Value** - `#534b4b` is the hex value to represent a color to be assign.

---

## **Structure of HTML Document**

```html
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <style>
            h1 {
                font-family: sans-serif;
                text-align: center;
                color: rgb(83, 75, 75);
            }

            p {
                font-family: sans-serif;
                text-align: center;
                color: rgb(83, 75, 75);
            }
        </style>
    </head>
    <body>
        <h1>My Challenge for Wednesday, November 3rd</h1>
        <p>
            Learn about the basics of web development - specifically dive into
            the Structure of HTML, Developer Tools & Applying CSS Rules.
        </p>
        <p>
            I'll achieve this goal by diving into
            <a href="https://www.google.com"> more learning resources </a>
        </p>
    </body>
</html>
```

---

### **DOCTYPE**

Defines the version of HTML to be used in the document

```html
<!DOCTYPE html>
```

---

#### **History of HTML**

-   1993 - HTML 1
-   1995 - HTML 2
-   1997 - HTML 3
-   1997 - 2000 - HTML 4
-   2014 - HTML 5

---

### **HTML**

---

### **Head**

-   Contains the metadata of the web page.
-   Can have title, favicon, links to the styles, scripts and meta tags.

```html
<head>
    <title>Some Title</title>
</head>
```

---

### **Body**

All the content of the web page (that is visible) is present inside this tag.

```html
<body>
    <h1>Welcome!</h1>
</body>
```
