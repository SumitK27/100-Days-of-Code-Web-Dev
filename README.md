# **Table of Content** <!-- omit in toc -->

1. [**Day 1**](#day-1)
   1. [**What is Web Development**](#what-is-web-development)
   2. [**How does the Web works**](#how-does-the-web-works)
      1. [**Anatomy**](#anatomy)
      2. [**Process**](#process)
      3. [**URL**](#url)
      4. [**DNS**](#dns)
   3. [**Three Key Programming Languages**](#three-key-programming-languages)
      1. [**1. HTML**](#1-html)
      2. [**2. CSS**](#2-css)
      3. [**3. JS**](#3-js)
   4. [**Creating our First HTML Page**](#creating-our-first-html-page)
2. [**Day 2**](#day-2)
   1. [**Setting Up Development Environment**](#setting-up-development-environment)
   2. [**Why Visual Studio Code?**](#why-visual-studio-code)
   3. [**HTML Elements**](#html-elements)
      1. [**Why to use HTML Elements?**](#why-to-use-html-elements)
      2. [**Different tags**](#different-tags)
   4. [**Getting started with CSS**](#getting-started-with-css)
3. [**Day 3**](#day-3)
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

# **Day 1**

## **What is Web Development**

Web Developers build Websites.

## **How does the Web works**

### **Anatomy**

Browsing the web is like calling a friend.

1. You call or ask something to your friend => Request
2. Your friend will reply you back => Response

### **Process**

1. You use a computer to use web
2. You type an address (called as URL) of the website
3. Your browser (client) sends a request to a remote server (computer operated by some computer) that is present somewhere in the world.
4. This request is sent in a standardized way through HTTP or HTTPS (Hypertext Transfer Protocol) which is understandable by both the client and the server.
5. The server has it's own code which has browser instructions that handlers what and how the browser should display the content.
6. This instructions are sent to the client by the server.

All this process usually happens in few milliseconds due to this visiting websites are very fast.
The content that is visible to the Client is called as Front-end.
The code at the server is known as Backend.

### **URL**

**Uniform Resource Locator**

Example -

```
https://google.com/search
```

**Protocol** - Hypertext Transfer Protocol Secure. `https`://google.com/search <br />
**Domain** - Human-readable address (identifier) of a website. https://`google.com`/search <br />
**Path** - Pointer to a specific resource. https:// google.com `/search`

### **DNS**

**IP: Internet Protocol**

-   A unique identifier (address) of network devices.
-   They are difficult to memorize.
-   Every device on the internet (or network) has an IP address.
-   Websites are also accessible through the IP address.

**Domain**

-   They are web addresses that are easier to remember by humans.
-   Connection to the web servers are made using Domains.
-   Not every device connected to the internet may have the Domain.

**Domain Name Servers**

-   They are the translation tables.
-   Stores the map of the domain and IP addresses.

When a client enters a domain name on the browser is entered, that address is sent to a DNS server the DNS in return sends the response with the IP address of the server to the client and then client communicates with the server by using the IP address.

## **Three Key Programming Languages**

The Browser Instructions mentioned earlier are the programming languages of the web.

### **1. HTML**

**Hypertext Markup Language**

-   Most important.
-   Represents the content and structure of the displayed page.
-   It controls the text, images, input forms, etc.
-   Although it is important, content with only HTML isn't stylish.

### **2. CSS**

**Cascading Style Sheets**

-   It is optional but every website uses it.
-   Allows us to apply style to the content on our website.
-   It controls the colors, position, etc.

### **3. JS**

**JavaScript**

-   It is optional.
-   It allows the interactivity needed to display the page.
-   It controls clicking of the buttons, convert something, etc.

## **Creating our First HTML Page**

1. Create an empty folder.
2. Create a file with name `index.html`
    1. `index.html` is a main entry point HTML document.
3. Open `index.html` with any text editor.
4. Add the following line.
    ```html
    <h1>Hello World!</h1>
    ```
5. Save the file.
6. Open it with any browser of your choice.

# **Day 2**

## **Setting Up Development Environment**

**Text Editor/IDE** - `Visual Studio Code`
**Changing Theme** - `File => Preferences => Color Theme`
**Changing Layout** - `View => Appearance`
**Open a File** - `File => Open File`
**Open a Folder** - `File => Open Folder`

## **Why Visual Studio Code?**

1. Syntax Highlighting
2. Extra information with MDN Docs
3. Auto-closing Tags
4. Auto-complete
5. Auto-indentation
6. Color picker

## **HTML Elements**

-   Language for adding extra information to the web page.
-   Gives a structure to the content by using elements wrapped between angular brackets.
-   Elements tell the browser which kind of content is displayed (heading, text, images, list, buttons)

**Example**

```html
<h1 style="color: blue">Hello World!</h1>
```

-   **HTML Element** - `<h1 style="color: blue">Hello World!</h1>`
-   **HTML Tags** - `<h1>` is an Opening Tag & `</h1>` is a Closing Tag.
-   **Element Name** - `h1` is the element name that stands for Heading 1.
-   **Attribute Name** - `style` are added inside the opening tags.
-   **Attribute Value** - `color: blue`
-   **Element Content** - `Hello World!`

### **Why to use HTML Elements?**

-   Without extra annotation, content often has no meaning.
-   Without it it's just like plain text.
-   It is helpful for users, search engine crawlers, screen readers.

### **Different tags**

-   There are lots of tags in HTML based on the type of content.
-   Detailed list can be found at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/)
-   Different tags might have different attributes but every tag supports `style` attribute.

<br />
    
`index.html`

```html
<h1>My Challenge for Tuesday, November 2nd</h1>
<p>
    Learn about the basics of web development - specifically dive into HTML &
    CSS.
</p>
```

## **Getting started with CSS**

-   Values written inside the style attribute represents the CSS for that HTML element.
-   A detailed list of CSS properties can be found at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
-   Every CSS styling has a property name and a value associated with it.
-   You can also assign multiple properties to the same element by separating each of them with a semicolon `;`

**Example**

```html
<h1 style="color: blue">Hello World!</h1>
```

-   **Property** - `color` is the name of the CSS property.
-   **Values** - `blue` is the value assigned to the `color` property for the `h1` element.

<br />

`index.html`

```html
<h1 style="font-family: sans-serif; text-align: center; color: red">
    My Challenge for Tuesday, November 2nd
</h1>
<p>
    Learn about the basics of web development - specifically dive into HTML &
    CSS.
</p>
```

# **Day 3**

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

## **Code Formatting**

Code can be formatted by three ways:

1. By Manually formatting it.
2. By using VS Code's built-in code formatter.
3. By using an extension `Prettier`.

Press `Alt + Shift + F` to auto-format the code. <br />
Open `Settings` in VS Code and search for `format` and select `Prettier` as the default code formatter. <br />
Optionally enable `Format on Save`

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

## **Adding Links**

-   Used for locating a resource present at somewhere else (page or external resource)
-   Done with the help of anchor tag `<a></a>`
-   Adding an address to the resource is possible with a `href` attribute.

**Example**

```html
<a href="https://www.google.com">Google</a>
```

## **Nesting HTML Elements**

-   Adding an element inside another HTML element.
-   You can nest as many levels as you want.

**Example**

```html
<p>
    <a href="https://www.google.com">Google</a>
</p>
```

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

### **DOCTYPE**

Defines the version of HTML to be used in the document

```html
<!DOCTYPE html>
```

#### **History of HTML**

-   1993 - HTML 1
-   1995 - HTML 2
-   1997 - HTML 3
-   1997 - 2000 - HTML 4
-   2014 - HTML 5

### **HTML**

### **Head**

-   Contains the metadata of the web page.
-   Can have title, favicon, links to the styles, scripts and meta tags.

```html
<head>
    <title>Some Title</title>
</head>
```

### **Body**

All the content of the web page (that is visible) is present inside this tag.

```html
<body>
    <h1>Welcome!</h1>
</body>
```
