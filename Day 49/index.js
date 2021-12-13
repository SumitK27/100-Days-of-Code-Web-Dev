const path = require("path");

const express = require("express");

const app = express();

// Using resources (Styles and Scripts) that are present in the "public" folder
app.use(express.static("public"));

app.get("/", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "index.html");
    res.sendFile(htmlFilePath);
});

app.get("/restaurants", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "restaurants.html");
    res.sendFile(htmlFilePath);
});

app.get("/about", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "about.html");
    res.sendFile(htmlFilePath);
});

app.get("/recommend", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "recommend.html");
    res.sendFile(htmlFilePath);
});

app.get("/confirm", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "confirm.html");
    res.sendFile(htmlFilePath);
});

app.listen(3000);
