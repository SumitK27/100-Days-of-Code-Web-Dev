# **Day 51** <!-- omit in toc -->

1. [**Partial Includes**](#partial-includes)
   1. [**Static Data**](#static-data)
   2. [**Dynamic Data**](#dynamic-data)
2. [**Dynamic Routes**](#dynamic-routes)
   1. [**Adding Unique IDs**](#adding-unique-ids)
   2. [**Passing Dynamic Data**](#passing-dynamic-data)
   3. [**Accessing Data**](#accessing-data)

## **Partial Includes**

-   Useful as it avoids duplication of code.
-   Split the code to be reused in a separate file.
-   Use `<%- %>` to render the HTML content.
-   `include()` contains the path of the file and optionally the data to be passed as the parameters.

### **Static Data**

**`index.ejs`**

```html
<%- include("includes/header") %>
```

**`includes/header.ejs`**

```html
<header id="main-header">
    <div id="logo"><a href="/">Eatwell</a></div>
    <nav>
        <ul>
            <li class="nav-item">
                <a href="/restaurants">Browse Restaurants</a>
            </li>
            <li class="nav-item">
                <a href="/recommend">Share a Restaurant</a>
            </li>
            <li class="nav-item">
                <a href="/about">About Eatwell</a>
            </li>
        </ul>
    </nav>
    <button id="drawer-btn">
        <span></span>
        <span></span>
        <span></span>
    </button>
</header>
```

### **Dynamic Data**

**`includes/restaurants/restaurant-item.ejs`**

```html
<li class="restaurant-item">
    <article>
        <h2><%= restaurant.name %></h2>
        <div class="restaurant-meta">
            <p><%= restaurant.cuisine %></p>
            <p><%= restaurant.address %></p>
        </div>
        <p><%= restaurant.description %></p>
        <div class="restaurant-actions">
            <a href="<%= restaurant.website %>">View Website</a>
        </div>
    </article>
</li>
```

**`restaurants.ejs`**

```html
<ul id="restaurants-list">
    <% for (const restaurant of restaurants) { %> <%-
    include("includes/restaurants/restaurant-item", {restaurant: restaurant}) %>
    <% } %>
</ul>
```

---

## **Dynamic Routes**

-   Used to display same page with different data in it.
-   We add a placeholder while creating a dynamic route. `/restaurants/:id` where `id` is the placeholder.
-   `res.param` is used to access the value of the defined placeholder.

_Use absolute path if your ejs files are deeply nested in routes_

### **Adding Unique IDs**

-   A third-party package called `uuid` _(Uniform Unique ID)_ makes it easier to create Random Unique IDs.
-   It returns a string with alpha numeric value.

```javascript
const uuid = require("uuid");

app.post("/recommend", function (req, res) {
    const restaurant = req.body;

    // Adding ID to the object
    restaurants.id = uuid.v4();

    // Store Data ......

    res.redirect("/confirm");
});
```

### **Passing Dynamic Data**

```javascript
app.get("/restaurants/:id", function (req, res) {
    const restaurantId = req.params.id;

    // Get Restaurants Data
    const filePath = path.join(__dirname, "data", "restaurants.json");
    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    // Get the restaurant with the given ID
    for (const restaurant of storedRestaurants) {
        if (restaurant.id === restaurantId) {
            // Pass the restaurant object
            return res.render("restaurant-detail", {
                rid: restaurantId,
                restaurant: restaurant,
            });
        }
    }
});
```

### **Accessing Data**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <%- include("includes/head") %>
        <link rel="stylesheet" href="/styles/restaurants.css" />
    </head>
    <body>
        <%- include("includes/header") %> <%- include("includes/side-drawer") %>
        <main>
            <h1><%= restaurant.name %></h1>
            <p><%= restaurant.cuisine %> | <%= restaurant.address %></p>
            <p><%= restaurant.description %></p>
            <p><a href="<%= restaurant.website %>">View Website</a></p>
        </main>
    </body>
</html>
```
