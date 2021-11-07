# **Day 6** <!-- omit in toc -->

1. [**CSS Box Model**](#css-box-model)
   1. [**Content**](#content)
   2. [**Padding**](#padding)
      1. [**Single value**](#single-value)
      2. [**Two Values**](#two-values)
      3. [**Using individual properties**](#using-individual-properties)
   3. [**Border**](#border)
   4. [**Margin**](#margin)
      1. [**Single value**](#single-value-1)
      2. [**Two Values**](#two-values-1)
      3. [**Using individual properties**](#using-individual-properties-1)
2. [**Adding Structure to a Web Page**](#adding-structure-to-a-web-page)
   1. [**Header**](#header)
   2. [**Main**](#main)
   3. [**Footer**](#footer)
   4. [**Some other elements used for the structures**](#some-other-elements-used-for-the-structures)
3. [**Selectors**](#selectors)
   1. [**Type Selector**](#type-selector)
   2. [**ID Selector**](#id-selector)
   3. [**Class Selector**](#class-selector)
   4. [**Group Selector**](#group-selector)
4. [**Combinators**](#combinators)
   1. [**Descendant Combinator**](#descendant-combinator)
   2. [**Child Combinator**](#child-combinator)
5. [**Block Elements**](#block-elements)
6. [**Inline Elements**](#inline-elements)

---

## **CSS Box Model**

-   Has the following parts

```

    ------------------------------------
    |    -------------------------     |
    |    |   -----------------   |     |
    |    |   |   Content     |   |     |
    |    |   -----------------   |     |
    |    |       Padding         |     |
    |    -------------------------     |
    |            Border                |
    ------------------------------------
                 Margin
```

### **Content**

-   Represents the actual width and height the content is using.

```html
<p>The Box Model</p>
```

```css
p {
    padding: 2px;
    border: 2px solid black;
    margin: 2px;
}
```

### **Padding**

-   It is a spacing outside the content.
-   It can be assigned in many ways

#### **Single value**

-   This will add padding evenly to each side (top, left, bottom, right) of the content.

```css
p {
    padding: 2px;
}
```

#### **Two Values**

-   The first value represents the padding for top and bottom and second for left and right.

```css
p {
    padding: 2px 5px;
}
```

#### **Using individual properties**

```css
p {
    padding-top: 1px;
    padding-left: 2px;
    padding-bottom: 3px;
    padding-right: 4px;
}
```

### **Border**

-   A line that is outside the padding and represents the boundary of the element.

```css
p {
    border: 2px dashed black;
}
```

-   `2px` is the size of the border.
-   `dashed` is the type, can also use solid.
-   `black` is the color to be used.

### **Margin**

-   It is the spacing between two elements.
-   It can be assigned in many ways

#### **Single value**

-   This will add margin evenly to each side (top, left, bottom, right) of the content.

```css
p {
    margin: 2px;
}
```

#### **Two Values**

-   The first value represents the margin for top and bottom and second for left and right.

```css
p {
    margin: 2px 5px;
}
```

#### **Using individual properties**

```css
p {
    margin-top: 1px;
    margin-left: 2px;
    margin-bottom: 3px;
    margin-right: 4px;
}
```

-   If we use `auto` the it will center the element. eg. `margin: 0 auto;`

## **Adding Structure to a Web Page**

-   These are optional to be used but helps you maintain a long website.
-   Also useful for screen-readers.

### **Header**

-   Used for the Headers.

```html
<header></header>
```

### **Main**

-   Used to display the main content of the page.

```html
<main></main>
```

### **Footer**

-   Generally stores the information of the website like social media links, Copyright, etc.

```html
<footer></footer>
```

### **Some other elements used for the structures**

-   Section
-   Article
-   Aside
-   Nav

---

## **Selectors**

### **Type Selector**

-   Uses tag or element name to select the specific elements.
-   This will select all the tags you specified in the entire document.

```html
<p>First Paragraph</p>
<p>Second Paragraph</p>
<p>Third Paragraph</p>
```

```css
p {
    color: blue;
}
```

### **ID Selector**

-   Used to select an element with specified ID.
-   Can only select one element because ID should be unique.
-   Use `#` in CSS to select the element with an ID.

```html
<p id="first-paragraph">First Paragraph</p>
<p>Second Paragraph</p>
<p>Third Paragraph</p>
```

```css
#first-paragraph {
    color: blue;
}
```

### **Class Selector**

-   Used to select all the elements with specified class.
-   A class can be applied to multiple elements.
-   Use `.` in CSS to select the element with the class name.

```html
<p>First Paragraph</p>
<p class="paragraphs">Second Paragraph</p>
<h3 class="paragraphs">Third Paragraph</h3>
```

```css
.paragraphs {
    color: blue;
}
```

### **Group Selector**

-   Uses the combination of other selector types.
-   Use `,` to separate the different selectors.

```html
<p>First Paragraph</p>
<span>Second Paragraph</span>
<h3>Third Paragraph</h3>
```

```css
p,
h3 {
    color: blue;
}
```

---

## **Combinators**

-   Combination of different selectors.

### **Descendant Combinator**

-   Select an element that is a child of some other element.

```css
li p {
    /* YOUR CSS */
}
```

-   This will select all the paragraph tags that are inside list items.

### **Child Combinator**

-   Select the element that is a direct child of another element.

```css
h2 > p {
    /* YOUR CSS */
}
```

-   This will select the paragraph tag that is first level child of an `h2` tag.

---

## **Block Elements**

-   Covers the entire line.
-   Some Block Elements:
    -   Headings
    -   Paragraphs

## **Inline Elements**

-   Elements can be aligned next to each other.
-   Some Inline Elements:
    -   Anchors
    -   Images
    -   Buttons
    -   Span
