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

    // Check for Validation constraints
    if (
        !enteredEmail ||
        !enteredConfirmEmail ||
        !enteredPassword ||
        enteredPassword.trim() < 6 ||
        enteredEmail !== enteredConfirmEmail ||
        !enteredEmail.includes("@")
    ) {
        console.log("Incorrect data");
        return res.redirect("/signup");
    }

    // Check if user with the email ID already exists
    const existingUser = await db
        .getDb()
        .collection("users")
        .findOne({ email: enteredEmail });

    if (existingUser) {
        console.log("User exists already");
        return res.redirect("/signup");
    }

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

router.post("/login", async function (req, res) {
    const userData = req.body;
    const enteredEmail = userData.email;
    const enteredPassword = userData.password;

    const existingUser = await db
        .getDb()
        .collection("users")
        .findOne({ email: enteredEmail });

    if (!existingUser) {
        console.log("Could not log in!");
        return res.redirect("/login");
    }

    const passwordAreEqual = await bcrypt.compare(
        enteredPassword,
        existingUser.password
    );

    if (!passwordAreEqual) {
        console.log("Could not log in - passwords are not equal!");
        return res.redirect("/login");
    }

    console.log("User is authenticated!");
    res.redirect("/admin");
});

router.get("/admin", function (req, res) {
    // Check the user "ticket"
    res.render("admin");
});

router.post("/logout", function (req, res) {});

module.exports = router;
