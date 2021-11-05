# **Day 4** <!-- omit in toc -->

1. [**Overwriting default stylings**](#overwriting-default-stylings)
2. [**CSS Pseudo Selector**](#css-pseudo-selector)
3. [**Why is CSS called Cascading Style Sheet?**](#why-is-css-called-cascading-style-sheet)
4. [**External CSS File**](#external-css-file)
5. [**Void Elements**](#void-elements)
6. [**How Browser handles multiple files**](#how-browser-handles-multiple-files)
7. [**Using ID selector in CSS**](#using-id-selector-in-css)
8. [**CSS Sizes & Units**](#css-sizes--units)
   1. [**Absolute Units**](#absolute-units)
   2. [**Relative Units**](#relative-units)
9. [**Using Fonts**](#using-fonts)

---

## **Overwriting default stylings**

```html
<a href="https://www.google.com">Google</a>
```

`Default browser styling for an anchor tag`

```css
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
```

`Overwritten styles`

```css
a {
    color: rgb(167, 1, 78);
    text-decoration: none;
}
```

---

## **CSS Pseudo Selector**

```css
a:hover {
    text-decoration: underline;
}
```

---

## **Why is CSS called Cascading Style Sheet?**

We can have multiple CSS Rules that affect the same element.

---

## **External CSS File**

`index.html`

```html
...
<head>
    <link ref="stylesheet" href="./daily-challenge.css" />
</head>
...
```

-   `link` is a meta tag used to include external files (css, manifest, favicon) in the HTML document.
-   `ref` attribute tells the type of the document to be imported.
-   `href` attribute is used to locate the file either by using fixed or relative path.

`daily-challenge.css`

```css
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

a {
    color: rgb(167, 1, 78);
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}
```

---

## **Void Elements**

-   Elements that don't have any closing tags are void elements.
-   They are also the self-closing tags by adding `/` at the end of the opening tag before the closing angular bracket. `<link ref="stylesheet" href="./daily-challenge.css" />`
-   eg. link, img, input

---

## **How Browser handles multiple files**

Browser requests for multiple files to include the resources that are present and used in the webpage.
Those files can be CSS files, Scripts or images.

Open `Dev Tools` and navigate to the `Network` tab

---

## **Using ID selector in CSS**

-   Used if you want to style an element differently than other elements with the same tags.
-   ID with a specific name can only be assigned once in the document.
-   ID should not contain any special character or a whitespace.

**Example**

`index.html`

```html
<p id="todays-challenge">
    Learn about the basics of web development - specifically dive into the
    Overwriting Default CSS Rules, Using CSS pseudo selector, External CSS File,
    Void Elements, Multiple browser requests, CSS ID selectors.
</p>
```

`daily-challenge.css`

```css
#todays-challenge {
    color: rgb(170, 96, 83);
    font-weight: bold;
    font-size: 52px;
}
```

---

## **CSS Sizes & Units**

---

### **Absolute Units**

1. `px` - Pixels, a device independent pixel on the screen.

---

### **Relative Units**

1. `rem`
2. `%`

---

## **Using Fonts**

1. Goto [Google Fonts](https://fonts.google.com) and choose any fonts of your choice.
2. Select the appropriate font weight and copy the import code with the `<link>` tag.
3. Add that link tags to the head section of the HTML page above your styling files.
4. Add the `font-family` property to the element you want to apply and add the name of the font family as the value.

`index.html`

```html
...
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&family=Oswald:wght@700&display=swap"
        rel="stylesheet"
    />
    <link rel="stylesheet" href="./daily-challenge.css" />
</head>
...
```

`daily-challenge..css`

```css
h1 {
    font-family: "Oswald", sans-serif;
    text-align: center;
    color: rgb(83, 75, 75);
}

p {
    font-family: "Fira Sans", sans-serif;
    text-align: center;
    color: rgb(83, 75, 75);
}
```

-   The secondary font has been added to the css rules which would be used only if the it fails to import the primary font family.
-   You can add as many secondary font families as you want.
