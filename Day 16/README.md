# **Day 16** <!-- omit in toc -->

1. [**Background Properties**](#background-properties)
   1. [**Background Image**](#background-image)
   2. [**Background Position**](#background-position)
   3. [**Background Size**](#background-size)
2. [**Document Positioning**](#document-positioning)
   1. [**Static**](#static)
   2. [**Relative**](#relative)
   3. [**Absolute**](#absolute)
   4. [**Fixed**](#fixed)

## **Background Properties**

### **Background Image**

-   Let's you add an image as a background of an element.

```css
#hero {
    background-image: url("../images/places/ocean.jpg");
}
```

### **Background Position**

-   Pans the background image to a specific position for the element.

```css
#hero {
    background-position: center;
}
```

### **Background Size**

-   Let's you adjust the sizing of the background image of the element.

```css
#hero {
    background-size: cover;
}
```

## **Document Positioning**

-   Related to the positioning of an element.

```html
<div id="one"></div>
<div id="two"></div>
<div id="three"></div>
<div id="four"></div>
<div id="five"></div>
```

### **Static**

-   Default position.
-   Cannot change the position.

### **Relative**

-   Elements are still part of document flow. ie. other elements doesn't change their position.
-   Can change the position of the element.

```css
#one {
    position: relative;
    top: 20px;
    left: 15px;
}
#two {
    position: relative;
    bottom: 20px;
    right: 15px;
}
```

### **Absolute**

-   Elements are no longer in document flow.
-   Get's positioned relative to the first ancestor which has position relative applied.

```css
#two {
    position: absolute;
    top: 0;
}
```

### **Fixed**

-   Element sticks to the visible area of the page (view port).
-   It is not related to any ancestor element having relative position applied.

```css
#four {
    position: fixed;
}
```
