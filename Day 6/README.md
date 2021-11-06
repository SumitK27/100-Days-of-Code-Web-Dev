# **Day 6** <!-- omit in toc -->

1. [**Lists**](#lists)
   1. [**Types**](#types)
      1. [**Ordered List**](#ordered-list)
      2. [**Unordered List**](#unordered-list)
2. [**Comments**](#comments)
3. [**Order of the CSS Rules**](#order-of-the-css-rules)
   1. [**Inheritance**](#inheritance)
   2. [**Cascading**](#cascading)
   3. [**Specificity**](#specificity)

---

## **Lists**

Used when the content is relevant.

### **Types**

#### **Ordered List**

-   Used when something needs to be followed in a certain order.

```html
<ol>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
</ol>
```

#### **Unordered List**

-   Used for something that can be followed in any order

```html
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Tomatoes</li>
</ul>
```

---

## **Comments**

-   Used to hide the information from being rendered.

```css
/*
This is a comment in CSS
*/
```

---

## **Order of the CSS Rules**

-   Low to High.

1. Inheritance
2. Cascading
3. Specificity

### **Inheritance**

-   (Selected) container rules apply to descendants. ie.Styling applied to a parent element is also inherited to the nested child elements.

`index.html`

```html
<ol>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
</ol>
```

`style.css`

```css
ol {
    color: rgb(251, 255, 0);
}
```

-   Even when the color property is applied to the ordered list, the styling gets inherited to the individual list items as well.

Similarly, if the list items also has some rule for color then the color rule from the ordered list get overwritten.

`index.html`

```html
<ol>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
</ol>
```

`style.css`

```css
ol {
    color: rgb(251, 255, 0);
}

li {
    color: rgb(167, 1, 78);
}
```

### **Cascading**

-   Multiple rules can be applied to the same element. ie. Same property can also be applied to an element but the order matters where the rule applied at the end is having the superiority.

```css
li {
    list-style: square;
    list-style: none;
}
```

-   The `list-style: none` overwrites the `list-style: square` for the list items.

### **Specificity**

-   More specific selector's rule wins over less specific selector.

`index.html`

```html
<ol>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
</ol>
```

`style.css`

```css
li {
    list-style: none;
    list-style: square;
}

ol {
    list-style: none;
}
```

-   In the above snippet, `il` is more specific than `ol` for the list items so the rule applied for `li` will be applied to the list items even if the rule for `ol` is defined at the later stage.

---
