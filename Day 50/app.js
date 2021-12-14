const fs = require("fs");

const path = require("path");

const express = require("express");

const app = express();

// Locating template files
app.set("views", path.join(__dirname, "views"));

// Defining template engine
app.set("view engine", "ejs");

// Using resources (Styles and Scripts) that are present in the "public" folder
app.use(express.static("public"));

// Parse incoming requests
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/restaurants", function (req, res) {
    const filePath = path.join(__dirname, "data", "restaurants.json");

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    res.render("restaurants", {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,
    });
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/recommend", function (req, res) {
    res.render("recommend");
});

app.post("/recommend", function (req, res) {
    const restaurant = req.body;

    const restaurantsFilePath = path.join(
        __dirname,
        "data",
        "restaurants.json"
    );

    const restaurantsFile = fs.readFileSync(restaurantsFilePath);

    restaurantData = JSON.parse(restaurantsFile);

    restaurantData.push(restaurant);

    fs.writeFileSync(restaurantsFilePath, JSON.stringify(restaurantData));

    res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
    res.render("confirm");
});

app.listen(3000);
