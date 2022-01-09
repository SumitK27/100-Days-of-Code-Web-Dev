const express = require("express");
const bcrypt = require("bcryptjs");

const db = require("../data/database");

const router = express.Router();

router.get("/signup", function (req, res) {
    let sessionInputData = req.session.inputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            email: "",
            confirmEmail: "",
            password: "",
        };
    }

    req.session.inputData = null;

    res.render("signup", {
        inputData: sessionInputData,
        csrfToken: req.csrfToken(),
    });
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

    req.session.inputData = null;
    res.render("login", {
        inputData: sessionInputData,
        csrfToken: req.csrfToken(),
    });
});

router.post("/signup", async function (req, res) {
    const userData = req.body;
    const enteredEmail = userData.email; // userData['email']
    const enteredConfirmEmail = userData["confirm-email"];
    const enteredPassword = userData.password;

    if (
        !enteredEmail ||
        !enteredConfirmEmail ||
        !enteredPassword ||
        enteredPassword.trim().length < 6 ||
        enteredEmail !== enteredConfirmEmail ||
        !enteredEmail.includes("@")
    ) {
        req.session.inputData = {
            hasError: true,
            message: "Invalid input - please check your data.",
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
        };

        req.session.save(function () {
            res.redirect("/signup");
        });
        return;
    }

    const existingUser = await db
        .getDb()
        .collection("users")
        .findOne({ email: enteredEmail });

    if (existingUser) {
        req.session.inputData = {
            hasError: true,
            message: "User exists already!",
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
        };
        req.session.save(function () {
            res.redirect("/signup");
        });
        return;
    }

    const hashedPassword = await bcrypt.hash(enteredPassword, 12);

    const user = {
        email: enteredEmail,
        password: hashedPassword,
    };

    await db.getDb().collection("users").insertOne(user);

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
        req.session.inputData = {
            hasError: true,
            message: "Could not log you in - please check your credentials!",
            email: enteredEmail,
            password: enteredPassword,
        };
        req.session.save(function () {
            res.redirect("/login");
        });
        return;
    }

    const passwordsAreEqual = await bcrypt.compare(
        enteredPassword,
        existingUser.password
    );

    if (!passwordsAreEqual) {
        req.session.inputData = {
            hasError: true,
            message: "Could not log you in - please check your credentials!",
            email: enteredEmail,
            password: enteredPassword,
        };
        req.session.save(function () {
            res.redirect("/login");
        });
        return;
    }

    req.session.user = { id: existingUser._id, email: existingUser.email };
    req.session.isAuthenticated = true;
    req.session.save(function () {
        res.redirect("/admin");
    });
});

router.post("/logout", function (req, res) {
    req.session.user = null;
    req.session.isAuthenticated = false;
    res.redirect("/");
});

module.exports = router;
