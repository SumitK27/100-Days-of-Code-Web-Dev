# **Day 22** <!-- omit in toc -->

1. [**Percentage vs EM vs REM**](#percentage-vs-em-vs-rem)
   1. [**Percentage**](#percentage)
   2. [**EM**](#em)
   3. [**REM**](#rem)
2. [**Desktop First Design vs Mobile First Design**](#desktop-first-design-vs-mobile-first-design)
   1. [**Desktop First Design**](#desktop-first-design)
   2. [**Mobile First Design**](#mobile-first-design)
3. [**Media Query**](#media-query)
   1. [**Common Breakpoints**](#common-breakpoints)
      1. [**Portrait**](#portrait)
      2. [**Landscape**](#landscape)

## **Percentage vs EM vs REM**

### **Percentage**

-   Value depends on the parent element.

```html
<div id="container">
    <h2>Hello</h2>
</div>
```

```css
#container {
    width: 800px;
}
h2 {
    padding: 10%; /* 80px */
}
```

### **EM**

-   Always refers to the font-size property.

### **REM**

-   Always refers to the font-size property of the root element.

## **Desktop First Design vs Mobile First Design**

### **Desktop First Design**

-   Traditional Approach.
-   Focuses on Office based audience.
-   Has large space available.
-   Allows to create feature-rich website.
-   Website is designed for the desktop mode and later converted to the other smaller devices.

### **Mobile First Design**

-   Function Approach.
-   Focuses on lifestyle/news audience.
-   Has less space available.
-   Content first.
-   Website is designed for the mobile mode and later converted to other larger devices.

## **Media Query**

-   Only gets executed if the criteria is met.
-   Criteria is the width of the device.
-   If the approach is
    -   Desktop First, use max-width as the criteria as we are scaling down.
    -   Mobile First, use min-width as the criteria as we are scaling up.
-   We can add multiple media queries. eg. for 768px and 1200px width.

```css
@media (min-width or max-width: 1200px) {
    p {
        font-size: 2rem;
    }
}
```

### **Common Breakpoints**

#### **Portrait**

-   **Smartphones** - 480px
-   **Tablets** - 768px

#### **Landscape**

-   **Notebook** - 1024px
-   **Desktop Computer** - 1200px
-   **TV** - > 1200px
