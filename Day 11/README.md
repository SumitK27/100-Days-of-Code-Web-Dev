# **Day 11** <!-- omit in toc -->

1. [**Deploying**](#deploying)
2. [**Hosting**](#hosting)
   1. [**Hosting a Static Site**](#hosting-a-static-site)
3. [**Favicon**](#favicon)
   1. [**Generating a Favicon**](#generating-a-favicon)
   2. [**Adding a Favicon**](#adding-a-favicon)
4. [**Paths**](#paths)
   1. [**Relative Paths**](#relative-paths)
   2. [**Absolute Paths**](#absolute-paths)

---

## **Deploying**

-   Moving the website onto a remote machine ("server") that servers the site to visitors.

---

## **Hosting**

-   The remote machine ("server") hosts (stores) the website code and serves it to visitors.

### **Hosting a Static Site**

-   A remote machine ("server") holds the website code and sends it to browser that sent a request to that remote machine.

1. Visit [Netlify](https://app.netlify.com/drop)
2. Drop the entire folder of you site.
3. Wait for it to be deployed automatically.
4. Your website is live and anyone on the internet can access it by using the given link.

---

## **Favicon**

-   Favicon is an image that sits next to the Title of the website in your browser tab.

### **Generating a Favicon**

1. Goto [Favicon.io](https://favicon.io/favicon-converter)
2. Upload an image that you want as a favicon.
3. Download the converted file.
4. Extract it, it will have multiple files that are suitable for different devices.

### **Adding a Favicon**

1. Move the extracted icons to the project folder.
2. Open your HTML file.
3. Add the icon with:

```html
<link rel="shortcut icon" href="./images/favicon.ico" type="image/x-icon" />
```

---

## **Paths**

### **Relative Paths**

-   Looks for files and folders relative from the source file.
-   Is defined directly. e.g. `images/my-image.jpg`
-   Suppose you have the following structure:

```
|- styles
   |- style.css
|- pages
    |- page1.html
|- index.html
```

`/pages/page1.html`

```html
<link href="../styles/style.css" />
```

`/index.html`

```html
<link href="styles/style.css" />
```

### **Absolute Paths**

-   Look for files and folders relative from the root folder.
-   Is defined by a `/`. e.g. `/images/my-image.jpg`

```
|- styles
   |- style.css
|- pages
    |- page1.html
|- index.html
```

`/pages/page1.html`

```html
<link href="/styles/style.css" />
...
<a href="/index.html"></a>
```

`/index.html`

```html
<link href="/styles/style.css" />
...
<a href="/pages/page1.html"></a>
```
