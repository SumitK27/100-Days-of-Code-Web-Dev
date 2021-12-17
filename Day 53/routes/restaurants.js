const uuid = require("uuid");
const express = require("express");

const resData = require("../util/restaurant-data");

const router = express.Router();

router.get("/restaurants", function (req, res) {
    let order = req.query.order;
    let nextOrder = "desc";

    if (order !== "asc" && order !== "desc") {
        order = "asc";
    }

    if (order === "desc") {
        nextOrder = "asc";
    }

    const restaurants = resData.getStoredRestaurants();

    restaurants.sort(function (resA, resB) {
        if (
            (order === "asc" && resA.name > resB.name) ||
            (order === "desc" && resB.name > resA.name)
        ) {
            return 1; // flip items
        }
        return -1; // no swapping
    });

    res.render("restaurants", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
        nextOrder: nextOrder,
    });
});

router.get("/restaurants/:id", function (req, res) {
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

router.get("/recommend", function (req, res) {
    res.render("recommend");
});

router.post("/recommend", function (req, res) {
    const restaurant = req.body;

    // Adding ID to the object
    restaurant.id = uuid.v4();

    const restaurants = resData.getStoredRestaurants();

    restaurants.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect("/confirm");
});

router.get("/confirm", function (req, res) {
    res.render("confirm");
});

module.exports = router;
