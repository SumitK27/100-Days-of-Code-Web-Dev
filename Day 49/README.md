# **Day 49** <!-- omit in toc -->

1. [**Dynamic HTML Pages with NodeJS**](#dynamic-html-pages-with-nodejs)
2. [**NODEMON**](#nodemon)
3. [**Migrating Static HTML to Express Pages**](#migrating-static-html-to-express-pages)
   1. [**Serve Static Pages**](#serve-static-pages)
   2. [**Adding Styles and Scripts to our Pages**](#adding-styles-and-scripts-to-our-pages)

## **Dynamic HTML Pages with NodeJS**

-   Create a HTML list that contains all the usernames present in the `users.json` file.

```javascript
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get("/users", function (req, res) {
    const filePath = path.join(__dirname, "data", "users.json");

    const fileData = fs.readFileSync(filePath);
    const existingUsers = JSON.parse(fileData);

    let responseData = "<ul>";

    for (const user of existingUsers) {
        responseData += "<li>" + user + "</li>";
    }

    responseData += "</ul>";

    res.send(responseData);
});
```

---

## **NODEMON**

-   Avoid manually restarting the server after changes are made.
-   It is a third-party package.
-   Install it by `npm install nodemon --save-dev`.
-   `--save-dev` tells NodeJS that this is a dependency that is useful for development.
-   Add a script to the `package.json` of your NodeJS project to automate certain task.

```json
{
    "scripts": {
        "start": "nodemon app.js",
        "yourScriptName": "nodemon index.js"
    }
}
```

-   This makes nodemon which is only available inside the project accessible.
-   Start is a special script name so you can run it by `npm start`.
-   For any other script name you should type `npm run yourScriptName` to execute it.

---

## **Migrating Static HTML to Express Pages**

### **Serve Static Pages**

-   Create a folder with the names `views` and move your static html files in this directory.
-   Modify the links in the anchor tags to the routes. eg. `./index.html` to `/` and `./about.html` to `/about`.
-   The `/` in the beginning specifies that its an absolute path.

```html
<header id="main-header">
    <div id="logo"><a href="/">Eat-well</a></div>
    <nav>
        <ul>
            <li class="nav-item">
                <a href="/restaurants">Browse Restaurants</a>
            </li>
            <li class="nav-item">
                <a href="/recommend">Share a Restaurant</a>
            </li>
            <li class="nav-item">
                <a href="/about">About Eat-well</a>
            </li>
        </ul>
    </nav>
</header>
```

-   Create an express server to serve these static files.

```javascript
const path = require("path");
const express = require("express");

const app = express();

app.get("/", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "index.html");
    res.sendFile(htmlFilePath);
});

app.get("/about", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "about.html");
    res.sendFile(htmlFilePath);
});

app.listen(3000);
```

-   By doing this your stylings and scripts will be missing but you can still view your static files on `localhost:3000` and `localhost:3000/about`.

### **Adding Styles and Scripts to our Pages**

-   To import resources of our webpages we need to add a middleware using `app.use()` where `app` is the instance of express.
-   `express.static()` is the property.
-   And it takes a parameter which is a directory name.

1. Create a directory named `public`.
2. Move your resource files like images, scripts, stylings in it.
3. We don't need to modify anything in our HTML files but we do need to add the middleware in our express app.

```javascript
// Using resources (Styles and Scripts) that are present in the "public" folder
app.use(express.static("public"));
```
