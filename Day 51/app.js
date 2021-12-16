const fs = require("fs");

const path = require("path");

const uuid = require("uuid");

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

app.get("/restaurants/:id", function (req, res) {
    const restaurantId = req.params.id;

    // Get Restaurants Data
    const filePath = path.join(__dirname, "data", "restaurants.json");
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    // Get the restaurant with the given ID
    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            return res.render("restaurant-detail", {
                rid: restaurantId,
                restaurant: restaurant,
            });
        }
    }
});

app.get("/about", function (req, res) {
    res.render("about");
});

app.get("/recommend", function (req, res) {
    res.render("recommend");
});

app.post("/recommend", function (req, res) {
    const restaurant = req.body;

    // Adding ID to the object
    restaurants.id = uuid.v4();

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
