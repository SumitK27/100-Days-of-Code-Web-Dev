const express = require("express");

// For extracting file
const multer = require("multer");

// Database Connectivity
const db = require("../data/database");

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

router.get("/", async function (req, res) {
    const users = await db.getDb().collection("users").find().toArray();
    res.render("profiles", { users: users });
});

router.get("/new-user", function (req, res) {
    res.render("new-user");
});

router.post("/profiles", upload.single("image"), async function (req, res) {
    // Get the stored file
    const uploadImageFile = req.file;

    // Get the form inputs
    const userData = req.body;

    // Storing Username and Image path
    await db.getDb().collection("users").insertOne({
        name: userData.username,
        imagePath: uploadImageFile.path,
    });

    res.redirect("/");
});

module.exports = router;
