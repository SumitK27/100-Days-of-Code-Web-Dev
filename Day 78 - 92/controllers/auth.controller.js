const User = require("../models/user.model");
const authUtil = require("../util/authentication");
const validation = require("../util/validation");

function getSignup(req, res) {
    res.render("customer/auth/signup");
}

async function signup(req, res, next) {
    const { email, password, confirmEmail, fullName, street, postal, city } =
        req.body;

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
        res.redirect("/signup");
        return;
    }

    const user = new User(email, password, fullName, street, postal, city);

    // Error Handling
    try {
        const existsAlready = await user.existsAlready();

        if (existsAlready) {
            res.redirect("/signup");
            return;
        }

        await user.signup();
    } catch (error) {
        return next(error);
    }

    res.redirect("/login");
}

function getLogin(req, res, next) {
    res.render("customer/auth/login");
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

    // Check if user with email exists
    if (!existingUser) {
        res.redirect("/login");
        return;
    }

    const passwordIsCorrect = await user.hasMatchingPassword(
        existingUser.password
    );

    // Check if Password is correct
    if (!passwordIsCorrect) {
        res.redirect("/login");
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
