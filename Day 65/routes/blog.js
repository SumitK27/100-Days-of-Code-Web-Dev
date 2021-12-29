const express = require("express");
const { ObjectId } = require("mongodb");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/posts");
});

router.get("/posts", function (req, res) {
    res.render("posts-list");
});

router.post("/posts", async function (req, res) {
    // Get author ID
    const authorId = new ObjectId(req.body.author);

    // Get author details from the database
    const author = await db
        .getDb()
        .collection("authors")
        .findOne({ _id: authorId });

    // Create post object to be stored
    const newPost = {
        title: req.body.title,
        summary: req.body.summary,
        body: req.body.content,
        date: new Date(),
        author: {
            id: authorId,
            name: author.name,
            email: author.email,
        },
    };

    // Insert newly created post
    const result = await db.getDb().collection("posts").insertOne(newPost);

    res.redirect("/posts");
});

router.get("/new-post", async function (req, res) {
    // Access "authors" collection
    // `toArray()` will get all the authors. If not used then returns cursor (data in chunks)
    const authors = await db.getDb().collection("authors").find().toArray();

    // Passing data to the template
    res.render("create-post", { authors: authors });
});

module.exports = router;
