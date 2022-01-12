function getSignup(req, res) {
    res.render("customer/auth/signup");
}

function getLogin(req, res) {
    res.render("customer/auth/login");
}

module.exports = {
    getSignup,
    getLogin,
};
