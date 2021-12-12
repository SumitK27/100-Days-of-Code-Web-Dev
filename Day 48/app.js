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
