# **Day 53** <!-- omit in toc -->

1. [**Splitting Routes**](#splitting-routes)
2. [**Query Parameters**](#query-parameters)

## **Splitting Routes**

-   Makes your large project manageable.

1. Move your routes to a separate file.
2. Replace the instance of express app ie. `app` from the routes with `router` from `express.Router()`.
3. Export the router object.
4. Import the routes file in the main app.
5. Use the routes with `express.use()` and path to begin with as first parameter and imported router object as second.

```javascript
app.use("/", routes);

routes.get("/", ...); // localhost:3000/
routes.get("/about", ...); // localhost:3000/about
```

```javascript
app.use("/users", routes);

routes.get("/", ...); // localhost:3000/users
routes.get("/about", ...); // localhost:3000/users/about
```

**`routes/default.js`**

```javascript
const express = require("express");

const router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
});

router.get("/about", function (req, res) {
    res.render("about");
});

module.exports = router;
```

**`app.js`**

```javascript
// Import routes
const defaultRoutes = require("./routes/default");

// Adding routes as handlers.
app.use("/", defaultRoutes);
```

---

## **Query Parameters**

-   Extra Optional value added to URL.
-   Used to change the displayed data on the page.
-   value of order in `/restaurants?order=asc` can be accessed by `req.query.order`.

```html
<form action="/restaurants" method="GET">
    <input type="hidden" value="<%=nextOrder%>" name="order" />
    <button class="btn">Change Order</button>
</form>
```

```javascript
router.get("/restaurants", function (req, res) {
    let order = req.query.order;
    let nextOrder = "desc";

    if (order !== "asc" && order !== "desc") {
        order = "asc";
    }

    if (order === "desc") {
        nextOrder = "asc";
    }

    const restaurants = resData.getStoredRestaurants();

    restaurants.sort(function (resA, resB) {
        if (
            (order === "asc" && resA.name > resB.name) ||
            (order === "desc" && resB.name > resA.name)
        ) {
            return 1; // flip items
        }
        return -1; // no swapping
    });

    res.render("restaurants", {
        numberOfRestaurants: restaurants.length,
        restaurants: restaurants,
        nextOrder: nextOrder,
    });
});
```
