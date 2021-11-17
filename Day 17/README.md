# **Day 17** <!-- omit in toc -->

1. [**CSS Unit**](#css-unit)
   1. [**Percentage**](#percentage)
2. [**Box Sizing**](#box-sizing)
   1. [**Content Box**](#content-box)
   2. [**Border Box**](#border-box)
3. [**Object Fit**](#object-fit)
   1. [**Fill**](#fill)
   2. [**Contain**](#contain)
   3. [**Cover**](#cover)

## **CSS Unit**

### **Percentage**

-   Related to the parent element.

```html
<div id="container">
    <div id="one">
        <div id="two"></div>
    </div>
</div>
```

```css
#container {
    width: 600px; /* 600px */
}

#one {
    width: 50%; /* 300px */
}

#two {
    width: 50%; /* 150px */
}
```

---

## **Box Sizing**

### **Content Box**

-   It is the default box sizing.
-   Only includes the size of the content.

```css
#content {
    box-sizing: content-box;
}
```

### **Border Box**

-   Includes the Content, Padding & Border.

```css
#content {
    box-sizing: border-box;
}
```

---

## **Object Fit**

### **Fill**

-   Default
-   Image is resized to fit in given direction into the container.
-   Aspect ratio is lost.

```css
img {
    object-fit: fill;
}
```

### **Contain**

-   Aspect ratio remains.
-   Container may have empty spacing.

```css
img {
    object-fit: contain;
}
```

### **Cover**

-   Aspect ratio remains.
-   Fill the container.
-   Get's clipped to fit into the container.

```css
img {
    object-fit: cover;
}
```
