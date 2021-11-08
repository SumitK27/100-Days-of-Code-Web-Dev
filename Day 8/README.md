# **Day 8** <!-- omit in toc -->

1. [**Limitations with Inline Elements**](#limitations-with-inline-elements)
2. [**Display Property**](#display-property)
   1. [**Block**](#block)
      1. [**Margin Collapsing**](#margin-collapsing)
   2. [**Inline-Block**](#inline-block)
3. [**Box Shadow Property**](#box-shadow-property)
4. [**Non Semantic Elements**](#non-semantic-elements)
   1. [**Span**](#span)
   2. [**Div**](#div)
5. [**Inline Element Types**](#inline-element-types)
   1. [**Replaced Inline Elements**](#replaced-inline-elements)
   2. [**Non Replace Inline Elements**](#non-replace-inline-elements)

---

## **Limitations with Inline Elements**

-   Margin Top and Margin Bottom doesn't apply for inline elements.
-   Padding Top and Padding Bottom can be added to the inline element but it doesn't moves other elements accordingly.

---

## **Display Property**

-   To solve the limitations with inline elements display property is used.

### **Block**

-   Takes full width of of the page.

```css
p {
    display: block;
}
```

#### **Margin Collapsing**

-   Only happens for vertical margin.
-   The space between the two elements will be the largest margin between those two elements.
-   eg. H1 and P are being used. H1 has 20px and P has 12px then the space between H1 and P will be 20px due to margin collapsing instead of 32px.

```html
<h1>Heading 1</h1>
<p>First Paragraph</p>
```

```css
h1 {
    margin: 20px;
}
p {
    margin: 12px;
}
```

### **Inline-Block**

-   Allows margin and padding to be applied on top and bottom of the content/element.

```css
p {
    display: inline-block;
}
```

---

## **Box Shadow Property**

```css
li {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
}
```

-   `1px` - offsetX (First Value)
-   `1px` - offsetY (Second Value)
-   `4px` - Blue Radius (Third Value)
-   `rgba(0, 0, 0, 0.2)` - Color of the shadow (Fourth Value)

## **Non Semantic Elements**

-   They don't have an meaning or purpose.
-   Can be used to define our own purpose.

### **Span**

-   It is an inline element.
-   Can be placed in any block or inline element.

```html
<p>This is a paragraph with a <span>span.</span> in it.</p>
```

### **Div**

-   It is a block element.

```html
<div></div>
```

---

## **Inline Element Types**

### **Replaced Inline Elements**

-   Elements that replaces themselves with the external content.
-   Vertical Margins can be applied.
-   eg. Image

### **Non Replace Inline Elements**

-   Elements that displays whatever is present/passed inside them.
-   eg. Anchor
