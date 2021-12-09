# **Day 45** <!-- omit in toc -->

1. [**Third Party Packages**](#third-party-packages)
   1. [**What?**](#what)
   2. [**When & Why?**](#when--why)
2. [**Third Party Package Example**](#third-party-package-example)
   1. [**CSS**](#css)
   2. [**JavaScript**](#javascript)
3. [**Third-Party vs Custom Code**](#third-party-vs-custom-code)
4. [**Bootstrap**](#bootstrap)
   1. [**Starting with Bootstrap**](#starting-with-bootstrap)
5. [**Parallax**](#parallax)
   1. [**Adding Parallax Effect**](#adding-parallax-effect)

## **Third Party Packages**

### **What?**

-   Code written by us or someone else.

### **When & Why?**

-   Saves time on rebuilding the same stuff.
-   Avoids errors.
-   Provide "ready to use" code which can be added to projects and sites.

---

## **Third Party Package Example**

### **CSS**

-   Bootstrap
-   Material UI
-   Tailwind CSS

### **JavaScript**

-   Image Carousel
-   Scrollspy
-   Parallax Effect

---

## **Third-Party vs Custom Code**

| Third Party                           | Custom Code               |
| :------------------------------------ | :------------------------ |
| Write less code                       | More code to write        |
| Quick results                         | Slower results            |
| No errors                             | More error-prone          |
| Less Control, more "default behavior" | Full control over results |

-   Bigger projects makes use of both third-part and custom code.

---

## **Bootstrap**

-   Its is a Third-party CSS framework that provides you with CSS components.
-   Navigate to [Bootstrap](https://getbootstrap.com/)

### **Starting with Bootstrap**

1. Create a HTML file.
2. Add the `link` tag for including Bootstrap to your webpage.

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
/>
```

3. Create a Navbar by copying the given snippet form [Bootstrap Documentation](https://getbootstrap.com/docs/5.1/components/navbar/)
4. Add JavaScript to make your components like drop-down, hamburger menu, etc. work.

```html
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
></script>
```

5. Adding a Carousel again from the [Documentation](https://getbootstrap.com/docs/5.1/components/carousel/)
6. You can overwrite the styles provided by Bootstrap by adding your style rules (either with style tags or a link to external CSS file) after importing Bootstrap CSS.

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
/>

<style>
    #carousel-example {
        width: 100%;
        max-width: 50rem;
        height: 30rem;
        margin: 2rem auto;
    }

    #carousel-example img {
        height: 30rem;
        object-fit: cover;
    }
</style>
```

7. Add a form from the [Documentation](https://getbootstrap.com/docs/5.1/forms/overview/)

---

## **Parallax**

-   An effect in which a particular object is scrolled with a different speed that any other object on the page.

### **Adding Parallax Effect**

1. Create a dummy webpage with an image and some sample content so that we can scroll the page.
2. Navigate to [Simple Parallax](https://simpleparallax.com/)
3. Add the `script` tag to your webpage.

```html
<script
    src="https://cdn.jsdelivr.net/npm/simple-parallax-js@5.5.1/dist/simpleParallax.min.js"
    defer
></script>
```

4. Add JavaScript (by using script tag or an external JavaScript file).
5. Select the image to which the effect is to be added using JavaScript.

**Example**

```html
<img id="main-image" src="./images/tasty.jpg" alt="Main Image" />
```

```javascript
const imageElement = document.getElementById("main-image");
new simpleParallax(imageElement);
```

6. Configure the effect by passing property values _mentioned [Here](https://simpleparallax.com/#settings)_ and passed them as a second parameter.

```javascript
new simpleParallax(imageElement, {
    scale: 1.6,
    delay: 0.1,
});
```
