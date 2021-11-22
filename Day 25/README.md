# **Day 25** <!-- omit in toc -->

1. [**CSS Variables / Custom Properties**](#css-variables--custom-properties)
2. [**Root vs Html vs Selectors**](#root-vs-html-vs-selectors)
   1. [**html**](#html)
   2. [**:root**](#root)
   3. [**\***](#)
3. [**CSS Transformation**](#css-transformation)
4. [**CSS Transition**](#css-transition)
5. [**Using SVGs**](#using-svgs)

## **CSS Variables / Custom Properties**

-   Get's added directly in the CSS file.
-   Defined in `html` selector.
-   Defined with `--` in the beginning.

**Syntax**

-   **For Defining:** `--property-description-subDescription: value`.
-   **For Using**: `property: var(variableName)`.

```css
html {
    --color-grey-100: rgb(236, 236, 236);
    --color-primary-300: rgb(167, 226, 255);

    --size-1: 18px;
    --size-5: 50px;

    background-color: var(--color-grey-100);
}

p {
    font-size: var(--size-1);
    color: var(--color-grey-100);
    background-color: var(--color-primary-300);
}
```

-   `--` to indicate that it's a variable.
-   `color` as we are using this for defining a color.
-   `grey` to describe that it's a grey color.
-   `100` is the value that will tell you how dark or light the color is. Ranges between 50 to 900.
-   `rgb(236, 236, 236)` is the value assigned to our variable.
-   `var(--color-grey-100)` for using the defined variable value as the background color for the html document.

**Use case**: If you are using a common value between multiple elements or properties and you want to change the value later then it is helpful to just change it on a single location (in the definition) and it will reflect everywhere.

---

## **Root vs Html vs Selectors**

### **html**

-   Root element of an HTML file.
-   CSS rules are applied to this element and gets inherited to nested elements inside the html element.

### **:root**

-   Pseudo selector.
-   Selects the element that is root of the document.
-   CSS rules are applied to this element and gets inherited to nested elements inside the root element.
-   In files other than HTML can be styled with this root pseudo selector.
-   Specificity is higher than `html` selector.

### **\***

-   Selects all the elements of the HTML document.
-   CSS rules are directed applied to all the elements.

---

## **CSS Transformation**

-   Moves or changes the appearance of the element.
-   Scale, Rotate, etc.

```css
a:hover {
    transform: scale(2);
}
```

---

## **CSS Transition**

-   Smooth transition from initial to transformed state.
-   Applied to the initial state of the element.
-   Transition can also be applied to the nested elements.

```css
a {
    transition: transform 0.5s ease-out 1s;
}
```

-   `transform` is the property we need the transition to apply on.
-   `0.5s` is the duration of the transition.
-   `ease-out` is the timing function which distributes the time evenly.
-   `1s` is the delay before the transition starts.

---

## **Using SVGs**

-   SVG stands for Scalable Vector Graphics.
-   XML based markup language.
-   Describes two-dimensional vector graphics.
-   Text-based description of scalable images that can be rendered by the browser.

You can find SVGs online on websites like

-   [HeroIcons.dev](https://heroicons.dev)
-   [HeroIcons.com](https://heroicons.com)
