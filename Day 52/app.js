const path = require("path");

const uuid = require("uuid");
const express = require("express");

const resData = require("./util/restaurant-data");

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
    const restaurants = resData.getStoredRestaurants();

    res.render("restaurants", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
    });
});

app.get("/restaurants/:id", function (req, res) {
    const restaurantId = req.params.id;

    // Get Restaurants Data
    const restaurants = resData.getStoredRestaurants();

    // Get the restaurant with the given ID
    for (const restaurant of restaurants) {
        if (restaurant.id === restaurantId) {
            return res.render("restaurant-detail", {
                rid: restaurantId,
                restaurant: restaurant,
            });
        }
    }

    // Send Error Response
    res.status(404).render("404");
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
    restaurant.id = uuid.v4();

    const restaurants = resData.getStoredRestaurants();

    restaurants.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect("/confirm");
});

app.get("/confirm", function (req, res) {
    res.render("confirm");
});

// Custom Middleware for 404 Page
app.use(function (req, res) {
    res.status(404).render("404");
});

// Middleware for error handling in all your routes
app.use(function (error, req, res, next) {
    res.status(500).render("500");
});

app.listen(3000);
