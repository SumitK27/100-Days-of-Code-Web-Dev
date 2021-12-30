const express = require("express");
const { ObjectId } = require("mongodb");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
    const posts = await db
        .getDb()
        .collection("posts")
        .find({}, { title: 1, summary: 1, "author.name": 1 })
        .toArray();

    res.render("posts-list", { posts: posts });
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

router.get("/posts/:id", async function (req, res, next) {
    // Getting ID from the URL
    let postId = req.params.id;
    // Error Handling
    try {
        postId = new ObjectId(postId);
    } catch (error) {
        // return custom error
        // return res.status(404).render("404");

        // Fall back to default error handling code
        return next(error);
    }

    // Fetching post
    const post = await db.getDb().collection("posts").findOne({ _id: postId });

    // If Post ID is Invalid
    if (!post) {
        return res.status(404).render("404");
    }

    // Convert date to human readable format
    // "2021-12-29T18:33:37.725Z " -> "Thursday, December 30, 2021"
    post.humanReadableDate = post.date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Original date format for metadata
    post.date = post.date.toISOString();

    // Rendering page with the fetched data
    res.render("post-detail", { post: post });
});

router.get("/posts/:id/edit", async function (req, res) {
    // Get ID from URL
    const postId = req.params.id;

    // Fetch the post data
    const post = await db
        .getDb()
        .collection("posts")
        .findOne({ _id: new ObjectId(postId) });

    // If No post found with the given ID
    if (!post) {
        return res.status(404).render("404");
    }

    // pass post data to template
    res.render("update-post", { post: post });
});

router.post("/posts/:id/edit", async function (req, res) {
    // Get ID from URL
    const postId = req.params.id;

    // Extract form data
    const { title, summary, content } = req.body;

    // Create updated post object
    const updatedPost = {
        title: title,
        summary: summary,
        body: content,
    };

    // Update the post
    await db
        .getDb()
        .collection("posts")
        .updateOne({ _id: new ObjectId(postId) }, { $set: updatedPost });

    // Redirect the use to all posts page
    res.redirect("/posts");
});

router.post("/posts/:id/delete", async function (req, res) {
    // Get ID from URL
    const postId = req.params.id;

    // Delete the post
    await db
        .getDb()
        .collection("posts")
        .deleteOne({ _id: new ObjectId(postId) });

    // Redirect the use to all posts page
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
