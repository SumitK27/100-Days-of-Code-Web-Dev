const path = require("path");

const express = require("express");

// Import routes
const defaultRoutes = require("./routes/default");
const restaurantsRoutes = require("./routes/restaurants");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Adding routes as handlers. It only compares the beginning of the route
app.use("/", defaultRoutes);
app.use("/", restaurantsRoutes);

// Custom Middleware for 404 Page
app.use(function (req, res) {
    res.status(404).render("404");
});

// Middleware for error handling in all your routes
app.use(function (error, req, res, next) {
    res.status(500).render("500");
});

app.listen(3000);
