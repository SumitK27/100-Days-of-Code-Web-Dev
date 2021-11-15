# **Day 15** <!-- omit in toc -->

1. [**Nav**](#nav)
2. [**Text Properties**](#text-properties)
   1. [**Text Align**](#text-align)
   2. [**Text Decoration**](#text-decoration)
   3. [**Text Transform**](#text-transform)
   4. [**Text Shadow**](#text-shadow)
3. [**CSS Flexbox**](#css-flexbox)
   1. [**Display**](#display)
   2. [**Flex Direction**](#flex-direction)
   3. [**Flex Wrap**](#flex-wrap)
   4. [**Flex Flow**](#flex-flow)
   5. [**Align Items**](#align-items)
   6. [**Justify Content**](#justify-content)

## **Nav**

-   Is is a block element.
-   Used for creating a navigation.

---

## **Text Properties**

### **Text Align**

-   Specifies the horizontal alignment of text in an element.

```css
p {
    text-align: center;
}
```

### **Text Decoration**

-   Specifies the decoration added to text.

```css
a {
    text-decoration: none;
}
h1 {
    text-decoration: underline overline dotted red;
}

h2 {
    text-decoration: underline overline wavy blue;
}
```

```html
<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<a href="#">This is a link</a>
```

### **Text Transform**

-   Controls the capitalization of text.

```css
#logo {
    text-transform: uppercase;
}
```

### **Text Shadow**

-   Shadow property adds shadow to text.

```css
#logo {
    text-shadow: 1px 1px 2px rgb(0, 0, 0);
}
```

---

## **CSS Flexbox**

-   Flexible Box.
-   Allows to manage way the elements are aligned in the box.

### **Display**

-   `display: flex;` enables the display type to flex.

### **Flex Direction**

-   `flex-direction` is by default set to `row`.
    -   `row`
        -   **Main axis:** left to right.
        -   **Cross axis:** top to bottom.
    -   `column`
        -   **Main axis:** top to bottom.
        -   **Cross axis:** left to right.
    -   `row-reverse`
        -   **Main axis:** right to left.
        -   **Cross axis:** bottom to top.
    -   `column-reverse`
        -   **Main axis:** bottom to top.
        -   **Cross axis:** right to left.

### **Flex Wrap**

-   `flex-wrap` is `nowrap` by default.
    -   `nowrap`
    -   `wrap`

### **Flex Flow**

-   `flex-flow` is the combination of `flex-direction` and `flex-wrap`.

### **Align Items**

-   `align-items` is used to vertically align items.

### **Justify Content**

-   `justify-content` is used for horizontal spacing.
    -   `space-between`: remaining space is added between the elements.
    -   `space-around`: remaining space is added evenly on both the side of the element.
    -   `space-evenly`: remaining space is added evenly on both the side of the element.
    -   `center`: horizontally centers the element.
    -   `flex-start`: default alignment of flex.
    -   `flex-end`: starts from the end of the container.

**Example**

```html
<header id="container">
    <div>
        <p>Travel Goals</p>
    </div>
    <nav>
        <ul>
            <li>Destinations</li>
            <li>About</li>
        </ul>
    </nav>
</header>
```

```css
#container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /* Alternative */
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
}
```
