# **Day 19** <!-- omit in toc -->

1. [**Overflow**](#overflow)
   1. [**Visible**](#visible)
   2. [**Hidden**](#hidden)
2. [**CSS Grid**](#css-grid)
   1. [**Display Grid**](#display-grid)
   2. [**Grid Template Columns**](#grid-template-columns)
      1. [**Using Pixels**](#using-pixels)
      2. [**Using Fraction**](#using-fraction)
   3. [**Gap**](#gap)
   4. [**Grid Column**](#grid-column)
3. [**CSS Pseudo Selector**](#css-pseudo-selector)
   1. [**First of Type**](#first-of-type)
   2. [**N<sup>th</sup> Type**](#nsupthsup-type)

## **Overflow**

### **Visible**

-   Default value.

```css
.item-content {
    overflow: visible;
}
```

### **Hidden**

-

```css
.item-content {
    overflow: hidden;
}
```

---

## **CSS Grid**

-   One of the default feature of CSS.
-   Shines in two-dimensional layouts unlike Flex shines in one-dimensional layouts.

### **Display Grid**

```css
ul {
    display: grid;
}
```

### **Grid Template Columns**

-   Defines the width each column should occupy.
-   There are n+1 points defined in the grid.

#### **Using Pixels**

```css
ul {
    width: 800px;
    grid-template-columns: 200px 400px 200px;
}
```

#### **Using Fraction**

```css
ul {
    grid-template-columns: 2fr 1fr;
}
```

-   For a width of 800px the container is divided into 3 fractions (2 + 1) where the first column occupies 2 fractions of a the container and the second column takes 1 fraction space.

### **Gap**

-   Defines the gap between different rows and columns.

```css
ul {
    gap: 100px 200px;
    /* row-spacing & column-spacing */
}
```

### **Grid Column**

-   Defines the number of columns to be occupied.

```css
li:nth-of-type(3) {
    grid-column: 1 / 3;
}
```

-   This will start the element from point 1 and end at point 3.
-   Alternatively, you can use `span` instead of `3` (number of available columns) to do the same without defining the value.

```css
li:nth-of-type(3) {
    grid-column: 1 / span 2;
    /* This will occupy 2 columns horizontally*/
}
```

## **CSS Pseudo Selector**

### **First of Type**

-   Target's the first element of the type.

```css
li:first-of-type {
    background-color: yellow;
}
```

-   Selects the first item in the list.

### **N<sup>th</sup> Type**

-   Selects the nth element of the specified type.
-   It takes a number as a parameter which represents the nth value.

```css
li:nth-of-type(3) {
    background-color: blue;
}
```

-   Selects the 3rd list item.
