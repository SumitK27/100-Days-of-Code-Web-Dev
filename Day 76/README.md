# **Day 76** <!-- omit in toc -->

1. [**Clean Code**](#clean-code)
2. [**MVC Pattern**](#mvc-pattern)
   1. [**Model**](#model)
   2. [**View**](#view)
   3. [**Controller**](#controller)
3. [**Creating Model**](#creating-model)

## **Clean Code**

-   Tips mentioned are optional but recommended to follow.

-   Splitting Routes
-   Extract Configuration Settings
-   Extracting Custom Middleware

## **MVC Pattern**

-   Stands for **M**odel **V**iew **C**ontroller.

### **Model**

-   Contains logic for interacting with database.
-   eg. Functions for storing/fetching data from database.

### **View**

-   Contains logic for presenting content to the user.
-   eg. template files and logic related to them.

### **Controller**

-   Connect models with views.
-   Typically connected to your routes.

## **Creating Model**

**`/models/post.js`**

```javascript
const { ObjectId } = require("mongodb");
const db = require("../data/database");

class Post {
    constructor(title, content, id) {
        this.title = title;
        this.content = content;

        if (id) {
            this.id = new ObjectId(id);
        }
    }

    static async fetchAll() {
        const posts = await db.getDb().collection("posts").find().toArray();

        return posts;
    }

    async fetch() {
        if (!this.id) {
            return;
        } else {
            const post = await db
                .getDb()
                .collection("posts")
                .findOne({ _id: this.id });
            this.title = post.title;
            this.content = post.content;
        }
    }

    async save() {
        let result;
        if (this.id) {
            result = await db
                .getDb()
                .collection("posts")
                .updateOne(
                    { _id: this.id },
                    { $set: { title: this.title, content: this.content } }
                );
        } else {
            result = await db.getDb().collection("posts").insertOne({
                title: this.title,
                content: this.content,
            });
        }

        return result;
    }

    async delete() {
        if (!this.id) {
            return;
        }

        const result = await db
            .getDb()
            .collection("posts")
            .deleteOne({ _id: this.id });

        return result;
    }
}

module.exports = Post;
```

**`/routes/blog.js`**

```javascript
router.get("/posts/:id/edit", async function (req, res) {
    const post = new Post(null, null, req.params.id)
    await post.fetch();

    if (!post.title || !post.content) {
        return res.render("404");
    }
    ...
});

router.get("/admin", async function (req, res) {
    ...
    const posts = await Post.fetchAll();
    ...
    res.render("admin", {
        posts: posts,
        inputData: sessionInputData,
        csrfToken: req.csrfToken(),
    });
});

router.post("/posts", async function (req, res) {
    const enteredTitle = req.body.title;
    const enteredContent = req.body.content;
    ...
    const post = new Post(enteredTitle, enteredContent);
    await post.save();
    ...
});


router.post("/posts/:id/edit", async function (req, res) {
    const enteredTitle = req.body.title;
    const enteredContent = req.body.content;
    ...
    const post = new Post(enteredTitle, enteredContent, req.params.id);
    await post.save();
    ...
});

router.post("/posts/:id/delete", async function (req, res) {
    const post = new Post(null, null, req.params.id);
    await post.delete();
    ...
});
```

**`/views/single-post.ejs`**

```diff
<main>
<%- include('includes/post-form', {
-   submitUrl: '/posts/' + post._id + '/edit',
+   submitUrl: '/posts/' + post.id + '/edit',
    hasError: inputData.hasError,
    errorMessage: inputData.message,
    title: inputData.title,
    content: inputData.content })
%>
</main>
```
