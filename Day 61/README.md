# **Day 61** <!-- omit in toc -->

1. [**Connecting With Database**](#connecting-with-database)
   1. [**Installing Package**](#installing-package)
   2. [**Database Connectivity**](#database-connectivity)
   3. [**Getting Data**](#getting-data)
   4. [**Storing Data**](#storing-data)

## **Connecting With Database**

### **Installing Package**

```bash
$ npm install mysql2
```

### **Database Connectivity**

`/data/database.js`

```javascript
const mysql = require("mysql2/promise");

// Create the connection
const pool = mysql.createPool({
    host: "localhost",
    database: "blog",
    user: "root",
    password: "root",
});

module.exports = pool;
```

-   Pool is similar to creating connections but you can have multiple connections in it simultaneously.

### **Getting Data**

`/routes/blog.js`

```javascript
const db = require("../data/database");
...
router.get("/new-post", async function (req, res) {
    // Query to fetch authors will return array with two items
    // 1: result set for the query, 2: metadata
    const [authors] = await db.query("SELECT * FROM authors");
    res.render("create-post", { authors: authors });
});
```

`/views/create-post.ejs`

```html
<select id="author" name="author">
    <% for(const author of authors) { %>
    <option value="<%= author.id %>"><%= author.name %></option>
    <% } %>
</select>
```

### **Storing Data**

`/routes/blog.js`

```javascript
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
```

`/views/posts-list.ejs`

```html
<body>
    <%- include('includes/header') %>
    <main id="all-posts">
        <h1>All Posts</h1>

        <% if (!posts || posts.length === 0) { %>
        <p>No posts found - maybe start creating some?</p>
        <a class="btn" href="/new-post">Create a new post</a>
        <% } else {%>
        <ol id="posts-list">
            <% for(const post of posts) { %>
            <li><%- include("includes/post-item", { post: post }) %></li>
            <% } %>
        </ol>
        <% } %>
    </main>
</body>
```

`/views/includes/post-item.ejs`

```html
<article class="post-item">
    <h2><%= post.title %></h2>
    <p class="post-item-author">By <%= post.author_name %></p>
    <p><%= post.summary %></p>
    <div class="post-actions">
        <button class="btn btn-alt">Delete Post</button>
        <a href="...">Edit Post</a>
        <a class="btn" href="...">View Post</a>
    </div>
</article>
```
