# **Day 47** <!-- omit in toc -->

1. [**Command Line**](#command-line)
2. [**NodeJS**](#nodejs)
   1. [**What is NodeJS**](#what-is-nodejs)
   2. [**Installing NodeJS**](#installing-nodejs)
   3. [**Writing NodeJS Code**](#writing-nodejs-code)
   4. [**Custom NodeJS Server**](#custom-nodejs-server)
   5. [**Different responses based on Routes**](#different-responses-based-on-routes)

## **Command Line**

-   Text-based interface.
-   Allows execution of commands on machines.
-   They are pre-installed on every operating system.
-   Example:
    -   Windows: Command Prompt
    -   Linux: Bash
    -   macOS: Terminal

---

## **NodeJS**

### **What is NodeJS**

-   A JavaScript Runtime.
-   A tool executing JavaScript code outside of the browser.
-   Can be installed on Any computer.

### **Installing NodeJS**

1. Visit [NodeJS](https://nodejs.org)
2. Download the setup.
3. Walk through the steps.
4. Close the setup when done.

### **Writing NodeJS Code**

1. Create a javascript file. eg. `app.js`
2. Write some code in it.

```javascript
const userName = "Niko";
console.log(userName);
```

3. Open terminal and execute the file by:

```bash
$ node app.js # app.js is the name of the file
```

You should see the output on the terminal.

### **Custom NodeJS Server**

**`app.js`**

```javascript
// Import built-in 'http' module.
const http = require("http");

// Create a server with the 'http' object.
const server = http.createServer(handleRequest);

// Listen for the response on a certain port. '3000'
server.listen(3000);

// Handle requests from the client's browser
function handleRequest(request, response) {
    // Send a status code to the browser as success (200)
    response.statusCode = 200;

    // Send the response to the client
    response.end("<h1>Hello World</h1>");
}
```

1. Execute the above code. `node app.js`
2. Open browser and navigate to `localhost:3000`. You'll see the response rendered on the browser.
3. Kill the process by pressing `Ctrl+C` on the terminal.

### **Different responses based on Routes**

```javascript
// Handle requests from the client's browser
function handleRequest(request, response) {
    // Check the current path (localhost:3000/current-time)
    if (request.url === "/current-time") {
        // Send a status code to the browser as success (200)
        response.statusCode = 200;

        // Send the response to the client with the current time
        response.end("<h1>" + new Date().toISOString() + "</h1>");
    } else if (request.url === "/") {
        // Send a status code to the browser as success (200)
        response.statusCode = 200;

        // Send the response to the client with simple text
        response.end("<h1>Hello World</h1>");
    }
}
```

-   Navigate to `localhost:3000/current-time` to see the current date and time.
-   Navigate to `localhost:3000` to see `Hello World` as the response.
