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

router.get("/posts/:id", async function (req, res) {
    const postId = req.params.id;

    const query = `SELECT posts.*, authors.name AS author_name, authors.email AS author_email FROM posts 
    INNER JOIN authors ON posts.author_id = authors.id
    WHERE posts.id = ?
    `;

    const [posts] = await db.query(query, [postId]);

    // Handle invalid post ID
    if (!posts || posts.length === 0) {
        res.status(404).render("404");
        return;
    }

    // Format date
    const postData = {
        ...posts[0],
        date: posts[0].date.toISOString(),
        humanReadableDate: posts[0].date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }),
    };

    res.render("post-detail", { post: postData });
});

router.get("/posts/:id/edit", async function (req, res) {
    const postId = req.params.id;

    const query = `SELECT * FROM posts WHERE posts.id = ?`;

    const [posts] = await db.query(query, [postId]);

    // Handle invalid post ID
    if (!posts || posts.length === 0) {
        res.status(404).render("404");
        return;
    }

    res.render("update-post", { post: posts[0] });
});

router.post("/posts/:id/edit", async function (req, res) {
    const postId = req.params.id;
    const postTitle = req.body.title;
    const postSummary = req.body.summary;
    const postContent = req.body.content;

    const query = `UPDATE posts SET title = ?, summary = ?, body = ? WHERE id=?`;

    await db.query(query, [postTitle, postSummary, postContent, postId]);
    res.redirect("/posts");
});

router.post("/posts/:id/delete", async function (req, res) {
    await db.query("DELETE FROM posts WHERE id = ?", [req.params.id]);

    res.redirect("/posts");
});

router.get("/new-post", async function (req, res) {
    // Query to fetch authors will return array with two items
    // 1: result set for the query, 2: metadata
    const [authors] = await db.query("SELECT * FROM authors");
    res.render("create-post", { authors: authors });
});

module.exports = router;
