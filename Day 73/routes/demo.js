const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("welcome");
});

router.get("/signup", function (req, res) {
    let sessionInputData = req.session.inputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            email: "",
            confirmedEmail: "",
            password: "",
        };
    }

    // Clear temporary Session data
    req.session.inputData = null;

    res.render("signup", { inputData: sessionInputData });
});

router.get("/login", function (req, res) {
    let sessionInputData = req.session.inputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            email: "",
            password: "",
        };
    }

    // Clear temporary Session data
    req.session.inputData = null;

    res.render("login", { inputData: sessionInputData });
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
        // Storing temporary data
        req.session.inputData = {
            hasError: true,
            message: "Invalid Input - please check your data.",
            email: enteredEmail,
            confirmedEmail: enteredConfirmEmail,
            password: enteredPassword,
        };

        // Redirect after invalid inputs are saved in the session
        req.session.save(function () {
            res.redirect("/signup");
        });

        return;
    }

    // Check if user with the email ID already exists
    const existingUser = await db
        .getDb()
        .collection("users")
        .findOne({ email: enteredEmail });

    if (existingUser) {
        console.log("User exists already");

        // Storing temporary data
        req.session.inputData = {
            hasError: true,
            message: "User already exists!",
            email: enteredEmail,
            confirmedEmail: enteredConfirmEmail,
            password: enteredPassword,
        };

        // Redirect user after session is saved
        res.session.save(function () {
            res.redirect("/signup");
        });

        return;
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

        // Storing temporary data
        req.session.inputData = {
            hasError: true,
            message: "Could not log you in - please check your credentials",
            email: enteredEmail,
            password: enteredPassword,
        };

        // Redirect user after session is saved
        req.session.save(function () {
            res.redirect("/login");
        });
        return;
    }

    const passwordAreEqual = await bcrypt.compare(
        enteredPassword,
        existingUser.password
    );

    if (!passwordAreEqual) {
        console.log("Could not log in - passwords are not equal!");

        // Storing temporary data
        req.session.inputData = {
            hasError: true,
            message: "Could not log you in - please check your credentials",
            email: enteredEmail,
            password: enteredPassword,
        };

        // Redirect user after session is saved
        req.session.save(function () {
            res.redirect("/login");
        });
        return;
    }

    // Add User data after Authentication
    req.session.user = {
        id: existingUser._id,
        email: existingUser.email,
    };
    req.session.isAuthenticated = true;

    // Save the session in cookie
    req.session.save(function () {
        // Redirect user
        res.redirect("/profile");
    });
});

router.get("/admin", async function (req, res) {
    if (!res.locals.isAuth) {
        return res.status(401).render("401");
    }

    // If user is not an admin
    if (!res.locals.isAdmin) {
        return res.status(403).render("403");
    }

    // Render admin
    res.render("admin");
});

router.get("/profile", function (req, res) {
    if (!res.locals.isAuth) {
        return res.status(401).render("401");
    }
    res.render("profile");
});

router.post("/logout", function (req, res) {
    // Deleting Session
    req.session.user = null;
    req.session.isAuthenticated = false;

    // Redirect the user
    res.redirect("/");
});

module.exports = router;
