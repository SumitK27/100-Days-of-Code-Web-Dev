# **Day 2** <!-- omit in toc -->

1. [**Setting Up Development Environment**](#setting-up-development-environment)
2. [**Why Visual Studio Code?**](#why-visual-studio-code)
3. [**HTML Elements**](#html-elements)
   1. [**Why to use HTML Elements?**](#why-to-use-html-elements)
   2. [**Different tags**](#different-tags)
4. [**Getting started with CSS**](#getting-started-with-css)

---

## **Setting Up Development Environment**

**Text Editor/IDE** - `Visual Studio Code`
**Changing Theme** - `File => Preferences => Color Theme`
**Changing Layout** - `View => Appearance`
**Open a File** - `File => Open File`
**Open a Folder** - `File => Open Folder`

---

## **Why Visual Studio Code?**

1. Syntax Highlighting
2. Extra information with MDN Docs
3. Auto-closing Tags
4. Auto-complete
5. Auto-indentation
6. Color picker

---

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

---

### **Why to use HTML Elements?**

-   Without extra annotation, content often has no meaning.
-   Without it it's just like plain text.
-   It is helpful for users, search engine crawlers, screen readers.

---

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

---

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
