const User = require("../models/user.model");

function getSignup(req, res) {
    res.render("customer/auth/signup");
}

async function signup(req, res) {
    const { email, password, fullName, street, postal, city } = req.body;

    const user = new User(email, password, fullName, street, postal, city);

    await user.signup();

    res.redirect("/login");
}

function getLogin(req, res) {
    res.render("customer/auth/login");
}

module.exports = {
    getSignup,
    getLogin,
    signup,
};
