# **Day 66** <!-- omit in toc -->

1. [**Creating Blogs Website**](#creating-blogs-website)
   1. [**Fetching Posts**](#fetching-posts)
   2. [**Fetch Individual Post**](#fetch-individual-post)
   3. [**Updating Post**](#updating-post)
   4. [**Delete Post**](#delete-post)
   5. [**Error Handling**](#error-handling)

## **Creating Blogs Website**

### **Fetching Posts**

**`/routes/blog.js`**

```javascript
router.get("/posts", async function (req, res) {
    const posts = await db
        .getDb()
        .collection("posts")
        .find({}, { title: 1, summary: 1, "author.name": 1 })
        .toArray();

    res.render("posts-list", { posts: posts });
});
```

### **Fetch Individual Post**

**`/routes/blog.js`**

```javascript
router.get("/posts/:id", async function (req, res) {
    // Getting ID from the URL
    const postId = req.params.id;

    // Fetching post
    const post = await db
        .getDb()
        .collection("posts")
        .findOne({ _id: new ObjectId(postId) });

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
```

### **Updating Post**

**`/routes/blog.js`**

```javascript
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
```

### **Delete Post**

**`/routes/blog.js`**

```javascript
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
```

### **Error Handling**

-   In async functions, you have to handle the errors manually.

**`/routes/blog.js`**

```javascript
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
```
