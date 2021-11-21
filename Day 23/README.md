# **Day 23** <!-- omit in toc -->

1. [**Media Queries**](#media-queries)
2. [**Side Drawer**](#side-drawer)
   1. [**Structure**](#structure)
   2. [**Internal Links**](#internal-links)
   3. [**Target Selector**](#target-selector)

## **Media Queries**

-   Should be defined after the main rule is defined.

**Example**

```css
#latest-products ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

@media (max-width: 768px) {
    #latest-products ul {
        grid-template-columns: 100%;
    }
}
```

## **Side Drawer**

**Logic**

1. Create clickable hamburger button in mobile view.
2. Open side drawer on first click.
3. Close side drawer on second click.

### **Structure**

```html
<header>
    <nav>...</nav>
    <a href="#side-drawer">
        <span></span>
        <span></span>
        <span></span>
    </a>
</header>
<aside>...</aside>
<main>...</main>
```

### **Internal Links**

-   Let's you navigate to a particular section/position on the same page.
-   Adds defined to URL.
-   `href="id"`

**`index.html`**

```html
<aside id="side-drawer">...</aside>

<a href="#side-drawer">Open Drawer</a>
```

-   After clicking the link the url would be `https://localhost/index.html#-side-drawer`

### **Target Selector**

-   Activates CSS rules if defined ID is selected in URL.
-   `#id:target`

```css
#side-drawer:target {
    display: static;
}
```
