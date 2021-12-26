const express = require("express");

const db = require("../data/database");

const router = express.Router();

router.get("/", function (req, res) {
    res.redirect("/posts");
});

router.get("/posts", async function (req, res) {
    // Get all the posts with author names
    const query = `SELECT posts.*, authors.name AS author_name FROM posts 
    INNER JOIN authors ON posts.author_id = authors.id`;
    const [posts] = await db.query(query);

    res.render("posts-list", { posts: posts });
});

router.post("/posts", async function (req, res) {
    // Get submitted data from from
    const data = [
        req.body.title,
        req.body.summary,
        req.body.content,
        req.body.author,
    ];

    // Store Database to database
    // `?` is used as a placeholder
    await db.query(
        "INSERT INTO posts (title, summary, body, author_id) VALUES (?)",
        [data]
    );

    res.redirect("/posts");
});

router.get("/new-post", async function (req, res) {
    // Query to fetch authors will return array with two items
    // 1: result set for the query, 2: metadata
    const [authors] = await db.query("SELECT * FROM authors");
    res.render("create-post", { authors: authors });
});

module.exports = router;
