const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("welcome");
});

router.get("/signup", function (req, res) {
    res.render("signup");
});

router.get("/login", function (req, res) {
    res.render("login");
});

router.post("/signup", async function (req, res) {
    // Get form data
    const userData = req.body;
    const enteredEmail = userData.email;
    const enteredConfirmEmail = userData["confirm-email"];
    const enteredPassword = userData.password;

    // Encrypt the Password
    const hashedPassword = await bcrypt.hash(enteredPassword, 12);

    // Create user object
    const user = {
        email: enteredEmail,
        password: hashedPassword,
    };

    // Store the user
    await db.getDb().collection("users").insertOne(user);

    // Redirect user on success
    res.redirect("/login");
});

router.post("/login", async function (req, res) {});

router.get("/admin", function (req, res) {
    res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
