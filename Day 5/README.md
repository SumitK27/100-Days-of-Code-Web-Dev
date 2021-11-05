# **Day 5** <!-- omit in toc -->

1. [**Adding an Image**](#adding-an-image)
2. [**Styling the image**](#styling-the-image)
3. [**Adding Background Overlay**](#adding-background-overlay)
4. [**Sharing CSS file**](#sharing-css-file)
5. [**Organizing the Project Directory**](#organizing-the-project-directory)

---

## **Adding an Image**

```html
<img src="./challenges-trophy.jpg" alt="A trophy" />
```

-   `img` is a void tag
-   `src` is used to add the path to the image which can be exact or absolute.
-   `alt` is used for screen readers or as an alternative text to be displayed when the server fails to load the image.

---

## **Styling the image**

Making the image circular:

```css
img {
    width: 200px;
    height: 200px;
    border-radius: 100px;
}
```

-   `border-radius` allows to change the shape of the border of any element. For making the element circular, the border-radius should be a value that is half of the width and height of the element. e.g. `border-radius: 100px` is half of `width: 200px` and `height: 200px`.

---

## **Adding Background Overlay**

```html
<body>
    ....
</body>
```

```css
body {
    background-color: rgb(233, 215, 207);
}
```

---

## **Sharing CSS file**

`index.html`

```html
<head>
    <link href="shared.css" rel="stylesheet" />
    <link href="daily-challenge.css" rel="stylesheet" />
</head>
```

`shared.css`

```css
body {
    text-align: center;
    background-color: rgb(233, 215, 207);
    color: rgb(83, 75, 75);
}
```

`daily-challenge.css`

```css
body {
    color: rgb(167, 1, 78);
    margin: 50px;
}
```

-   `color: rgb(167, 1, 78)` overwrites the `color: rgb(83, 75, 75)` written in `shared.css`.
-   Although, `margin: 50px` get's added to the body in `index.html` since no margin was defined for the body in `shared.css`.

---

## **Organizing the Project Directory**

Create separate directories in your project's root directory that could hold e.g. images, styles, scripts and other kind of directories.
This makes it easier to manage the project by looking at the dedicated folders.
