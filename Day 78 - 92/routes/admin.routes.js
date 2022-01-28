const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/products", adminController.getProducts);

router.get("/products/new", adminController.getNewProduct);

module.exports = router;
