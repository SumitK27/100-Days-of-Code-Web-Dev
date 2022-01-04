# **Day 72** <!-- omit in toc -->

1. [**Storing Sessions**](#storing-sessions)
2. [**Checking Session**](#checking-session)
3. [**Clear Session**](#clear-session)
4. [**Storing Data Temporary in Sessions**](#storing-data-temporary-in-sessions)

## **Storing Sessions**

**`/app.js`**

```javascript
// Adding session middleware
app.use(
    session({
        ...
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000, // Expire cookie after a month
        },
    })
);
```

**`/routes/demo.js`**

```javascript
router.post("/login", async function (req, res) {
    ...
    // Add User data after Authentication
    req.session.user = {
        id: existingUser._id,
        email: existingUser.email,
    };

    // Save the session in cookie
    req.session.save(function () {
        // Redirect user
        res.redirect("/admin");
    });
});
```

## **Checking Session**

**`/routes/demo.js`**

```javascript
router.get("/admin", function (req, res) {
    // Redirect User if not signed in
    if (!req.session.user) {
        return res.status(401).render("401");
    }

    res.render("admin");
});
```

## **Clear Session**

**`/routes/demo.js`**

```javascript
router.post("/logout", function (req, res) {
    // Deleting Session
    req.session.user = null;

    // Redirect the user
    res.redirect("/");
});
```

## **Storing Data Temporary in Sessions**

**`/routes/demo.js`**

```javascript
router.get("/signup", function (req, res) {
    let sessionInputData = req.session.inputData;

    // Assigning Default values to the session
    if (!sessionInputData) {
        sessionInputData = {
            hasError: false,
            email: "",
            confirmedEmail: "",
            password: "",
        };
    }

    // Clear temporary Session data
    req.session.inputData = null;

    // Passing Data to Sign Up page to show alerts
    res.render("signup", { inputData: sessionInputData });
});

router.post("/signup", async function (req, res) {
    ...
    // Check for Validation constraints
    if (
        !enteredEmail ||
        !enteredConfirmEmail ||
        !enteredPassword ||
        enteredPassword.trim() < 6 ||
        enteredEmail !== enteredConfirmEmail ||
        !enteredEmail.includes("@")
    ) {
        // Storing temporary data
        req.session.inputData = {
            hasError: true,
            message: "Invalid Input - please check your data.",
            email: enteredEmail,
            confirmedEmail: enteredConfirmEmail,
            password: enteredPassword,
        };

        // Redirect after invalid inputs are saved in the session
        req.session.save(function () {
            res.redirect("/signup");
        });

        return;
    }
    ...
});
```
