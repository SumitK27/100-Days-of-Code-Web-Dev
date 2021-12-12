# **Day 48** <!-- omit in toc -->

1. [**NPM**](#npm)
2. [**ExpressJS**](#expressjs)
   1. [**Installing Express**](#installing-express)
   2. [**NodeJS vs ExpressJS Code**](#nodejs-vs-expressjs-code)
   3. [**Parsing User Data**](#parsing-user-data)
   4. [**File Manipulation**](#file-manipulation)

## **NPM**

-   Is a Package Manager for Node.
-   Allows you to install third-party packages.

1.  Initial the project into NodeJS project by `npm init`.
2.  Add the Metadata for the project.
3.  `package.json` file will be created.
4.  Install a package by `npm install <package_name>`.
5.  Install all the packages mentioned in `package.json` file by `npm install`.

-   You must not delete _package.json_, _package-lock.json_ or _node_modules_ in order to use third-party package that you installed.

---

## **ExpressJS**

-   Easier to setup server than NodeJS.

### **Installing Express**

1. Open the terminal in the NPM initialized project.
2. Run `npm install express`.
3. `node_modules` folder will appear with all the dependent packages that express needs.
4. `package.json` will now contain a `dependencies` object with `express` in it with the current installed version.

### **NodeJS vs ExpressJS Code**

**NodeJS Server Example**

```javascript
// Import built-in 'http' module.
const http = require("http");

// Create a server with the 'http' object.
const server = http.createServer(handleRequest);

// Listen for the response on a certain port. '3000'
server.listen(3000);

// Handle requests from the client's browser
function handleRequest(request, response) {
    // Check the current path
    if (request.url === "/current-time") {
        // Send a status code to the browser as success (200)
        response.statusCode = 200;

        // Send the response to the client
        response.end("<h1>" + new Date().toISOString() + "</h1>");
    } else if (request.url === "/") {
        // Send a status code to the browser as success (200)
        response.statusCode = 200;

        // Send the response to the client
        response.end("<h1>Hello World</h1>");
    }
}
```

**Express Server Example**

```javascript
// Import 'express' module.
const express = require("express");

// Create express object
const app = express();

// Create a request handler for get request on "localhost:3000/current-time"
app.get("/current-time", function (req, res) {
    // Send the response to the client
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

// Create a request handler for get request on "localhost:3000"
app.get("/", function (req, res) {
    // Send the response to the client
    res.send("<h1>Hello World</h1>");
});

// Listen for the response on a certain port. '3000'
app.listen(3000);
```

### **Parsing User Data**

```javascript
// Import 'express' module.
const express = require("express");

// Create express object
const app = express();

// Add handler for all incoming requests. Middleware
// urlencoded parse incoming data and translate it into javascript object
app.use(express.urlencoded({ extended: false }));

// Create a request handler for get request on "localhost:3000"
app.get("/", function (req, res) {
    // Send the response to the client
    res.send(
        "<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username' /><button>Submit</button></form>"
    );
});

// Create a request handler for post request on "localhost:3000/store-user"
app.post("/store-user", function (req, res) {
    // Get value submitted in the input with "username" as name from the form
    const userName = req.body.username;

    // Log input data
    console.log(userName);

    // Send the response
    res.send("<h1>Hello " + userName + "!</h1>");
});

// Listen for the response on a certain port. '3000'
app.listen(3000);
```

### **File Manipulation**

-   Create a file `data/users.json` and add `[]` in it.

```javascript
// Import built-in "fs" module for file systems
const fs = require("fs");

// Import built-in "path" module. let's you build paths that works on all operating systems
const path = require("path");

// Import 'express' module.
const express = require("express");

// Create express object
const app = express();

// Add handler for all incoming requests. Middleware
// urlencoded parse incoming data and translate it into javascript object
app.use(express.urlencoded({ extended: false }));

// Create a request handler for get request on "localhost:3000/current-time"
app.get("/current-time", function (req, res) {
    // Send the response to the client
    res.send("<h1>" + new Date().toISOString() + "</h1>");
});

// Create a request handler for get request on "localhost:3000"
app.get("/", function (req, res) {
    // Send the response to the client
    res.send(
        "<form action='/store-user' method='POST'><label>Your Name</label><input type='text' name='username' /><button>Submit</button></form>"
    );
});

// Create a request handler for post request on "localhost:3000/store-user"
app.post("/store-user", function (req, res) {
    // Get value submitted in the input with "username" as name from the form
    const userName = req.body.username;

    // Log input data
    console.log(userName);

    // Create (absolute) path of the file to write the data.
    // "__dirname" holds the absolute path of the current directory
    const filePath = path.join(__dirname, "data", "users.json");

    // Tells file system the path of the file to which data is to be read. It will return the data from the file in raw text format.
    const fileData = fs.readFileSync(filePath);

    // Convert Raw data to json object
    const existingUsers = JSON.parse(fileData);

    // Append new username to the array
    existingUsers.push(userName);

    // Convert json object back to raw text
    const updatedData = JSON.stringify(existingUsers);

    // Tell file system the path of the file to which data is to be written.
    // "writeFileSync()" to instantly write data which takes file path and data as the parameter.
    fs.writeFileSync(filePath, updatedData);

    // Send the response
    res.send("<h1>Username stored</h1>");
});

// Listen for the response on a certain port. '3000'
app.listen(3000);
```
