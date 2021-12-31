const express = require("express");

// For extracting file
const multer = require("multer");

// Storage Object
const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        // Error, Destination
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        // Error, FileName
        cb(null, `${Date.now()} - ${file.originalname}`);
    },
});

// Middleware
// 'multer' to handle 'multipart/form-data'
const upload = multer({
    // Storage Configuration
    storage: storageConfig,
});

const router = express.Router();

router.get("/", function (req, res) {
    res.render("profiles");
});

router.get("/new-user", function (req, res) {
    res.render("new-user");
});

router.post("/profiles", upload.single("image"), function (req, res) {
    // Get the stored file
    const uploadImageFile = req.file;

    // Get the form inputs
    const userData = req.body;

    console.log(uploadImageFile);
    console.log(userData);

    res.redirect("/");
});

module.exports = router;
