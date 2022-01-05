# **Day 73** <!-- omit in toc -->

1. [**Authentication**](#authentication)
2. [**Authorization**](#authorization)
3. [**Adding Authorization**](#adding-authorization)
4. [**Passing Data Globally**](#passing-data-globally)

## **Authentication**

-   Sign up and Login with credentials.
-   Authenticated (logged in) user may then access restricted resources.
-   Eg. User can comment on a post only after logging in.

## **Authorization**

-   Restrict some content.
-   Even authenticated user may not be allowed to access everything on a website.
-   Eg. User cannot access Admin dashboard even if he is logged in (non-admin account).

## **Adding Authorization**

-   Add `isAdmin` property to a user from the database and set the value to `true`.

**`/routes/demo.js`**

```javascript
router.get("/admin", async function (req, res) {
    // If user is not logged in
    if (!req.session.user) {
        return res.status(401).render("401");
    }

    // Get the user info
    const user = await db
        .getDb()
        .collection("users")
        .findOne({ _id: req.session.user.id });

    // If user is not an admin
    if (!user || !user.isAdmin) {
        return res.status(403).render("403");
    }

    // Render admin
    res.render("admin");
});
```

## **Passing Data Globally**

**`/app.js`**

```javascript
// Custom middleware for sharing user data to header on all templates
app.use(async function (req, res, next) {
    const user = req.session.user;
    const isAuth = req.session.isAuthenticated;

    // If user is not authenticated
    if (!user || !isAuth) {
        // next() forwards the request to the next middleware in line
        return next();
    }

    // Get user Info
    const userDoc = await db
        .getDb()
        .collection("users")
        .findOne({ _id: user.id });
    const isAdmin = userDoc.isAdmin;

    // Allows to set global values for current request-response cycle
    res.locals.isAuth = isAuth;
    res.locals.isAdmin = isAdmin;

    next();
});
```

**`/routes/demo.js`**

```javascript
router.get("/admin", async function (req, res) {
    if (!res.locals.isAuth) {
        return res.status(401).render("401");
    }

    // If user is not an admin
    if (!res.locals.isAdmin) {
        return res.status(403).render("403");
    }

    // Render admin
    res.render("admin");
});

router.get("/profile", function (req, res) {
    if (!res.locals.isAuth) {
        return res.status(401).render("401");
    }
    res.render("profile");
});

router.post("/login", async function (req, res) {
    ...
    // Add User data after Authentication
    req.session.user = {
        id: existingUser._id,
        email: existingUser.email,
    };
    req.session.isAuthenticated = true;

    // Save the session in cookie
    req.session.save(function () {
        // Redirect user
        res.redirect("/profile");
    });
});

router.post("/logout", function (req, res) {
    // Deleting Session
    req.session.user = null;
    req.session.isAuthenticated = false;

    // Redirect the user
    res.redirect("/");
});
```

**`/views/header.js`**

```html
<header id="main-header">
    <nav>
        <ul>
            <li><a href="/">Home</a></li>

            <!-- Not Logged In -->
            <% if(!locals.isAuth) { %>
            <li><a href="/signup">Signup</a></li>
            <li><a href="/login">Login</a></li>
            <% } %>

            <!-- If Admin -->
            <% if(locals.isAdmin) { %>
            <li><a href="/admin">Admin</a></li>
            <% } %>

            <!-- Logged In -->
            <% if(locals.isAuth) { %>
            <li><a href="/profile">Profile</a></li>
            <li>
                <form action="/logout" method="POST">
                    <button>Logout</button>
                </form>
            </li>
            <% } %>
        </ul>
    </nav>
</header>
```
