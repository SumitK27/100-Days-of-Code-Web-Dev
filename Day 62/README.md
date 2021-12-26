# **Day 62** <!-- omit in toc -->

1. [**Displaying Data**](#displaying-data)
2. [**Format Data**](#format-data)
3. [**Update Data**](#update-data)
4. [**Deleted Data**](#deleted-data)

## **Displaying Data**

`/routes/blog.js`

```javascript
// `:id` here is a placeholder and the data from the URL will be stored in the `id` variable
router.get("/posts/:id", async function (req, res) {
    // Get Data from the URL parameter
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

    res.render("post-detail", { post: posts[0] });
});
```

`/views/post-detail.ejs`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <%- include('includes/head', { title: post.title }) %>
        <link rel="stylesheet" href="/styles/posts.css" />
    </head>

    <body>
        <%- include('includes/header') %>
        <main id="post-detail">
            <h1><%= post.title %></h1>
            <section id="post-meta">
                <address>
                    <a href="mailto:<%= post.author_email %>">
                        <%= post.author_name %>
                    </a>
                </address>
                |
                <time datetime="<%= post.date %>"><%= post.date %></time>
            </section>
            <hr />
            <section>
                <p id="body"><%=post.body %></p>
            </section>
        </main>
    </body>
</html>
```

`/views/includes/posts-item.ejs`

```html
<article class="post-item">
    <h2><%= post.title %></h2>
    <p class="post-item-author">By <%= post.author_name %></p>
    <p><%= post.summary %></p>
    <div class="post-actions">
        <button class="btn btn-alt">Delete Post</button>
        <a href="...">Edit Post</a>
        <a class="btn" href="/posts/<%= post.id %>">View Post</a>
    </div>
</article>
```

## **Format Data**

`/public/styles/post.css`

```css
/* Preserve line-breaks */
#body {
    white-space: pre-wrap;
}
```

`/routes/blog.js`

```javascript
router.get("/posts/:id", async function (req, res) {
    ...
    // Format date
    const postData = {
        ...posts[0],
        date: posts[0].date.toISOString(),
        humanReadableDate: posts[0].date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }),
    };

    res.render("post-detail", { post: postData });
});
```

`/views/post-detail.ejs`

```html
<time datetime="<%= post.date %>"> <%= post.humanReadableDate %> </time>
```

## **Update Data**

`/routes/blog.js`

```javascript
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
```

`/views/includes/post-item.ejs`

```html
...
<a href="/posts/<%= post.id %>/edit">Edit Post</a>
...
```

`/views/update-post.ejs`

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <%- include('includes/head', { title: <%= post.title %> }) %>
        <link rel="stylesheet" href="/styles/forms.css" />
    </head>

    <body>
        <%- include('includes/header') %>
        <main>
            <h1>Update post</h1>
            <form action="/posts/<%= post.id %>/edit" method="POST">
                <div class="form-control">
                    <label for="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value="<%= post.title %>"
                        required
                    />
                </div>
                <div class="form-control">
                    <label for="summary">Summary</label>
                    <input
                        type="text"
                        id="summary"
                        name="summary"
                        value="<%= post.summary %>"
                        required
                        maxlength="255"
                    />
                </div>
                <div class="form-control">
                    <label for="content">Post Content</label>
                    <textarea id="content" name="content" required rows="5">
<%= post.body %></textarea
                    >
                </div>
                <button class="btn">Update Post</button>
            </form>
        </main>
    </body>
</html>
```

## **Deleted Data**

`/routes/blog.js`

```javascript
router.post("/posts/:id/delete", async function (req, res) {
    await db.query("DELETE FROM posts WHERE id = ?", [req.params.id]);

    res.redirect("/posts");
});
```

`/views/includes/post-item.ejs`

```html
...
<form action="/posts/<%= post.id %>/delete" method="POST">
    <button class="btn btn-alt">Delete Post</button>
</form>
...
```
