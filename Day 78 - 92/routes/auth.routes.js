const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth.controller");

router.get("/signup", authController.getSignup);

router.post("/signup", authController.signup);

router.get("/login", authController.getLogin);

router.post("/login", authController.login);

router.post("/logout", authController.logout);

module.exports = router;
