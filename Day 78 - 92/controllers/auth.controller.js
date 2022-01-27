const User = require("../models/user.model");
const authUtil = require("../util/authentication");
const validation = require("../util/validation");
const sessionFlash = require("../util/session-flash");

function getSignup(req, res) {
    let sessionData = sessionFlash.getSessionData(req);

    if (!sessionData) {
        sessionData = {
            email: "",
            confirmEmail: "",
            password: "",
            fullName: "",
            street: "",
            postal: "",
            city: "",
        };
    }

    res.render("customer/auth/signup", { inputData: sessionData });
}

async function signup(req, res, next) {
    const { email, password, confirmEmail, fullName, street, postal, city } =
        req.body;
    const enteredData = {
        email,
        confirmEmail,
        password,
        fullName,
        street,
        postal,
        city,
    };

    // Validation
    if (
        !validation.userDetailsAreValid(
            email,
            password,
            fullName,
            street,
            postal,
            city
        ) ||
        !validation.emailIsConfirmed(email, confirmEmail)
    ) {
        sessionFlash.flashDataToSession(
            req,
            {
                errorMessage:
                    "Please check your input. Password must be at least 6 characters long, postal code must be 5 characters long",
                ...enteredData,
            },
            function () {
                res.redirect("/signup");
            }
        );
        return;
    }

    const user = new User(email, password, fullName, street, postal, city);

    // Error Handling
    try {
        const existsAlready = await user.existsAlready();

        if (existsAlready) {
            sessionFlash.flashDataToSession(
                req,
                {
                    errorMessage:
                        "User exists already. Try logging in instead!",
                    ...enteredData,
                },
                function () {
                    res.redirect("/signup");
                }
            );
            return;
        }

        await user.signup();
    } catch (error) {
        return next(error);
    }

    res.redirect("/login");
}

function getLogin(req, res, next) {
    let sessionData = sessionFlash.getSessionData(req);

    if (!sessionData) {
        sessionData = {
            email: "",
            password: "",
        };
    }

    res.render("customer/auth/login", { inputData: sessionData });
}

async function login(req, res) {
    const user = new User(req.body.email, req.body.password);
    let existingUser;

    // Error Handling
    try {
        existingUser = await user.getUserWithSameEmail();
    } catch (error) {
        return next(error);
    }

    const sessionErrorData = {
        errorMessage: "Invalid Email or Password",
        email: user.email,
        password: user.password,
    };

    // Check if user with email exists
    if (!existingUser) {
        sessionFlash.flashDataToSession(req, sessionErrorData, function () {
            res.redirect("/login");
        });
        return;
    }

    const passwordIsCorrect = await user.hasMatchingPassword(
        existingUser.password
    );

    // Check if Password is correct
    if (!passwordIsCorrect) {
        sessionFlash.flashDataToSession(req, sessionErrorData, function () {
            res.redirect("/login");
        });
        return;
    }

    authUtil.createUserSession(req, existingUser, function () {
        res.redirect("/");
    });
}

function logout(req, res) {
    authUtil.destroyUserAuthSession(req);
    res.redirect("/login");
}

module.exports = {
    getSignup,
    getLogin,
    signup,
    login,
    logout,
};
