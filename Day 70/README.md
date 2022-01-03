# **Day 70** <!-- omit in toc -->

1. [**What is Authentication?**](#what-is-authentication)
2. [**User Sign Up**](#user-sign-up)
3. [**Encrypting Passwords**](#encrypting-passwords)

## **What is Authentication?**

-   Many websites has some pages or features that are only accessible to a user that has an account on that website.
-   Examples:
    -   Personal profile on social network site.
    -   Shopping cart and order history in an online shop.
    -   Administration of some blog/online shop, etc.
-   Can be achieved in three steps:
    1. User Sign up: Allow the user to create an account.
    2. User Login: Use the account created with email and password.
    3. User Authentication: grant access to protected (members only) pages.

## **User Sign Up**

```javascript
router.post("/signup", async function (req, res) {
    // Get form data
    const userData = req.body;
    const enteredEmail = userData.email;
    const enteredConfirmEmail = userData["confirm-email"];
    const enteredPassword = userData.password;

    // Create user object
    const user = {
        email: enteredEmail,
        password: enteredPassword,
    };

    // Store the user
    await db.getDb().collection("users").insertOne(user);

    // Redirect user on success
    res.redirect("/login");
});
```

## **Encrypting Passwords**

-   Passwords stored directly in the database can be at high risk if gets exposed.
-   Password should always be stored in an encrypted format.
-   Hashing is a method that allows you to convert a string to a non-decodable string.

```shell
$ npm install bcryptjs
```

```javascript
const bcrypt = require("bcryptjs");
...
// Encrypt the Password
const hashedPassword = bcrypt.hash(enteredPassword, 12);
```
