# **Day 52** <!-- omit in toc -->

1. [**Error Handling (Routes/Middleware)**](#error-handling-routesmiddleware)
   1. [**404**](#404)
      1. [**Specific Use case**](#specific-use-case)
      2. [**General Use case**](#general-use-case)
   2. [**500**](#500)
2. [**Refactoring Code**](#refactoring-code)

## **Error Handling (Routes/Middleware)**

### **404**

-   Displayed when no matching route is found.

**`views/404.ejs`**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <%- include("includes/head") %>
    </head>
    <body>
        <%- include("includes/header") %> <%- include("includes/side-drawer") %>
        <main>
            <h1>Page not found!</h1>
            <p>Unfortunately, we weren't able to find this page.</p>
        </main>
    </body>
</html>
```

#### **Specific Use case**

**`app.js`**

```javascript
app.get("/restaurants/:id", function (req, res) {
    // Get ID from Query parameter
    // Get Restaurants Data
    // Get the restaurant with the given ID

    // Send Error Response
    res.status(404).render("404");
});
```

#### **General Use case**

```javascript
// Custom Middleware for 404 Page
app.use(function (req, res) {
    res.status(404).render("404");
});
```

-   `res.status()` allows you to send the HTTP status code to the browser.

### **500**

-   Used to show something happened on server-side.

```javascript
// Middleware for error handling in all your routes
app.use(function (error, req, res, next) {
    res.status(500).render("500");
});
```

---

## **Refactoring Code**

1. Split your repetitive code into a new file.
2. Add the necessary imports in it.
3. export the functions or values from the newly created file with `module.exports` as an object.
4. Import your file in the main code.

**`util/restaurant-data.js`**

```javascript
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "data", "restaurants.json");

function getStoredRestaurants() {
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    return storedRestaurants;
}

function storeRestaurants(storableRestaurants) {
    fs.writeFileSync(filePath, JSON.stringify(storableRestaurants));
}

module.exports = {
    getStoredRestaurants,
    storeRestaurants,
};
```

**`app.js`**

```javascript
const resData = require("./util/restaurant-data");

app.post("/recommend", function (req, res) {
    const restaurant = req.body;

    // Adding ID to the object
    restaurant.id = uuid.v4();

    const restaurants = resData.getStoredRestaurants();

    restaurantData.push(restaurant);

    resData.storeRestaurants(restaurants);

    res.redirect("/confirm");
});
```
