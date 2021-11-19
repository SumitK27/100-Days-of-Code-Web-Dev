# **Day 20** <!-- omit in toc -->

1. [**Working with Unicode**](#working-with-unicode)
   1. [**Unicode**](#unicode)
   2. [**UTF-8**](#utf-8)
   3. [**Adding a Character**](#adding-a-character)
2. [**Responsive Design**](#responsive-design)

## **Working with Unicode**

### **Unicode**

-   International encoding standard.
-   Used with different languages and scripts.
-   Each letter, digit, or symbol has a unique numeric value.
-   Value stays the same across different platforms and programs.

### **UTF-8**

-   UCS Transformation Format 8.
-   World Wide Web's most common character encoding.
-   Each character is of one to four bytes long.

```html
<meta charset="UTF-8" />
```

-   Let's your browser understand the certain set of characters (UTF-8) being used.

### **Adding a Character**

-   Use `&#x` and the hexadecimal code of the character to use unicode characters.

&#x2192;

```html
<p>Explore &#x2192;</p>
<!-- 2192 is the code for a right arrow (→) -->
```

## **Responsive Design**

-   Refers to the design of the web page that looks good on all devices (size)
-   There are different kind of devices available. e.g. Desktop, laptop, tablet, mobile, etc.
