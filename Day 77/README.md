# **Day 76** <!-- omit in toc -->

1. [**Adding Controller**](#adding-controller)
2. [**Refactoring Controllers**](#refactoring-controllers)
3. [**Problems with Asynchronous Functions**](#problems-with-asynchronous-functions)
4. [**Route Protection**](#route-protection)

## **Adding Controller**

**`/controllers/post-controllers.js`**

```javascript
const Post = require("../models/post");

function getHome(req, res) {
    res.render("welcome", { csrfToken: req.csrfToken() });
}

async function getAdmin(req, res) {
    if (!res.locals.isAuth) {
        return res.status(401).render("401");
    }

    const posts = await Post.fetchAll();

    let sessionInputData = req.session.inputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            title: "",
            content: "",
        };
    }

    req.session.inputData = null;

    res.render("admin", {
        posts: posts,
        inputData: sessionInputData,
        csrfToken: req.csrfToken(),
    });
}

async function createPost(req, res) {
    const enteredTitle = req.body.title;
    const enteredContent = req.body.content;

    if (
        !enteredTitle ||
        !enteredContent ||
        enteredTitle.trim() === "" ||
        enteredContent.trim() === ""
    ) {
        req.session.inputData = {
            hasError: true,
            message: "Invalid input - please check your data.",
            title: enteredTitle,
            content: enteredContent,
        };

        res.redirect("/admin");
        return; // or return res.redirect('/admin'); => Has the same effect
    }

    const post = new Post(enteredTitle, enteredContent);
    await post.save();

    res.redirect("/admin");
}

async function getSinglePost(req, res) {
    const post = new Post(null, null, req.params.id);
    await post.fetch();

    if (!post.title || !post.content) {
        return res.render("404");
    }

    let sessionInputData = req.session.inputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            title: post.title,
            content: post.content,
        };
    }

    req.session.inputData = null;

    res.render("single-post", {
        post: post,
        inputData: sessionInputData,
        csrfToken: req.csrfToken(),
    });
}

async function updatePost(req, res) {
    const enteredTitle = req.body.title;
    const enteredContent = req.body.content;

    if (
        !enteredTitle ||
        !enteredContent ||
        enteredTitle.trim() === "" ||
        enteredContent.trim() === ""
    ) {
        req.session.inputData = {
            hasError: true,
            message: "Invalid input - please check your data.",
            title: enteredTitle,
            content: enteredContent,
        };

        res.redirect(`/posts/${req.params.id}/edit`);
        return;
    }

    const post = new Post(enteredTitle, enteredContent, req.params.id);
    await post.save();

    res.redirect("/admin");
}

async function deletePost(req, res) {
    const post = new Post(null, null, req.params.id);
    await post.delete();

    res.redirect("/admin");
}

module.exports = {
    getHome,
    getAdmin,
    createPost,
    getSinglePost,
    updatePost,
    deletePost,
};
```

**`/routes/blog.js`**

```javascript
const express = require("express");

const blogControllers = require("../controllers/post-controllers");

const router = express.Router();

router.get("/", blogControllers.getHome);

router.get("/admin", blogControllers.getAdmin);

router.post("/posts", blogControllers.createPost);

router.get("/posts/:id/edit", blogControllers.getSinglePost);

router.post("/posts/:id/edit", blogControllers.updatePost);

router.post("/posts/:id/delete", blogControllers.deletePost);

module.exports = router;
```

## **Refactoring Controllers**

**`/middlewares/csrf-token-middleware.js`**

```javascript
function addCSRFToken(req, res, next) {
    res.locals.csrfToken = req.csrfToken();
    next();
}

module.exports = addCSRFToken;
```

**`/app.js`**

```javascript
const addCSRFTokenMiddleware = require("./middlewares/csrf-token-middleware");
...
app.use(addCSRFTokenMiddleware);
...
```

**`/views/includes/header.js`**

**`/views/includes/post-form.js`**

**`/views/admin.js`**

**`/views/login.js`**

**`/views/signup.js`**

```diff
- <input type="hidden" value="<%= csrfToken %>" name="_csrf" />
+ <input type="hidden" value="<%= locals.csrfToken %>" name="_csrf" />
```

**`/util/validation.js`**

```javascript
function postIsValid(title, content) {
    return title && content && title.trim() !== "" && content.trim() !== "";
}

module.exports = {
    postIsValid,
};
```

**`/util/validation-session.js`**

```javascript
function getSessionErrorData(req, defaultValues) {
    let sessionInputData = req.session.inputData;

    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            ...defaultValues,
        };
    }

    req.session.inputData = null;

    return sessionInputData;
}

function flashErrorsToSession(req, data, action) {
    req.session.inputData = {
        hasError: true,
        ...data,
    };

    req.session.save(action);
}

module.exports = {
    getSessionErrorData,
    flashErrorsToSession,
};
```

**`/controllers/post-controllers.js`**

```javascript
const Post = require("../models/post");
const validationSession = require("../util/validation-session");
const validation = require("../util/validation");

async function getAdmin(req, res) {
    ...

    sessionErrorData = validationSession.getSessionErrorData(req, {
        title: "",
        content: "",
    });
    ...
}

async function createPost(req, res) {
   ...
    if (!validation.postIsValid(enteredTitle, enteredContent)) {
        validationSession.flashErrorsToSession(
            req,
            {
                message: "Invalid input - please check your data.",
                title: enteredTitle,
                content: enteredContent,
            },
            function () {
                res.redirect(`/admin`);
            }
        );
        return; // or return res.redirect('/admin'); => Has the same effect
    }
    ...
}

async function getSinglePost(req, res) {
    ...
    sessionErrorData = validationSession.getSessionErrorData(req, {
        title: post.title,
        content: post.content,
    });
    ...
}

async function updatePost(req, res) {
    ...
    if (!validation.postIsValid(enteredTitle, enteredContent)) {
        validationSession.flashErrorsToSession(
            req,
            {
                message: "Invalid input - please check your data.",
                title: enteredTitle,
                content: enteredContent,
            },
            function () {
                res.redirect(`/posts/${req.params.id}/edit`);
            }
        );

        return;
    }
    ...
}
...
```

## **Problems with Asynchronous Functions**

-   Asynchronous Functions are not handled by express's default error handling mechanism.
-   Failing to handle them could crash your server.
-   You should write your own error handling mechanisms for these kind of functions.

**Example**

**Before**

```javascript
async function deletePost(req, res) {
    const post = new Post(null, null, req.params.id);

    await post.delete();

    res.redirect("/admin");
}
```

**After**

```javascript
async function deletePost(req, res, next) {
    let post;

    try {
        post = new Post(null, null, req.params.id);
    } catch (error) {
        // If Finding post fails, execute the next middleware and pass the error object to the express's default error handler
        next(error);
        return;
    }

    await post.delete();

    res.redirect("/admin");
}
```

## **Route Protection**

**`/routes/auth.js`**

```javascript
router.get("/401", authController.get401);
```

**`/middlewares/auth-protection.js`**

```javascript
function guardRoute(req, res, next) {
    if (!res.locals.isAuth) {
        return res.redirect("/401");
    }

    next();
}

module.exports = guardRoute;
```

**`/routes/blog.js`**

```javascript
router.get("/", blogController.getHome);

// Routes defined after this line will have 'guardRoute' middleware applied
router.use(guardRoute);

router.get("/admin", blogController.getAdmin);

router.post("/posts", blogController.createPost);
```
