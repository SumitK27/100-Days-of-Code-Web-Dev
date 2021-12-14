# **Day 50** <!-- omit in toc -->

1. [**Handling Form Inputs**](#handling-form-inputs)
2. [**HTML Templates**](#html-templates)
   1. [**Installing EJS**](#installing-ejs)
   2. [**Adding EJS to your Express app**](#adding-ejs-to-your-express-app)
   3. [**Converting HTML to EJS**](#converting-html-to-ejs)
   4. [**Adding Dynamic Data to EJS files**](#adding-dynamic-data-to-ejs-files)
   5. [**Passing Data to inject in Template**](#passing-data-to-inject-in-template)
   6. [**Conditional Rendering**](#conditional-rendering)

## **Handling Form Inputs**

1. Add the method to `/restaurants` where the data entered should be passed and action as `POST` as a post request to the form.
2. Create a file to store the submitted data. `data/restaurants.json` with `[]` (empty array) in it.
3. Add a middleware to parse the incoming requests.

```javascript
// Parse incoming requests
app.use(express.urlencoded({ extended: false }));
```

4. Add the post route.

```javascript
app.post("/recommend", function (req, res) {
    // Get the input data as an object
    const restaurant = req.body;

    const restaurantsFilePath = path.join(
        __dirname,
        "data",
        "restaurants.json"
    );

    const restaurantsFile = fs.readFileSync(restaurantsFilePath);

    restaurantData = JSON.parse(restaurantsFile);

    restaurantData.push(restaurant);

    fs.writeFileSync(restaurantsFilePath, JSON.stringify(restaurantData));

    // redirect the user to `/confirm` route
    res.redirect("/confirm");
});
```

---

## **HTML Templates**

-   Templates are HTML files with some placeholders.
-   It has Dynamic data with the static HTML code in it.
-   There are different template engines for this which has different syntax.
-   Express supports these kind of templates. One of which is EJS.

### **Installing EJS**

-   Run `npm install ejs` and it will add ejs as a dependency.

### **Adding EJS to your Express app**

-   `app.set()` allows to add options to the express app.
-   `views` tells where to look for view files.
-   `path.join(__dirname, "folderName")` is the path to your template files
-   `view engine` tells that we are using a template engine for view files.
-   `ejs` will be the name of the template engine.

```javascript
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
```

### **Converting HTML to EJS**

-   Rename file extensions from `.html` to `.ejs`.
-   Change `res.sendFile()` to `res.render()` in your express app.
-   `res.render()` parses the template file into a HTML file and render it.
-   Pass the template file name to be rendered with out the extension (as its defined in view engine).

**Code to Render HTML file**

```javascript
app.get("/about", function (req, res) {
    const htmlFilePath = path.join(__dirname, "views", "about.html");
    res.sendFile(htmlFilePath);
});
```

**Code to render Template file**

```javascript
app.get("/about", function (req, res) {
    res.render("about");
});
```

### **Adding Dynamic Data to EJS files**

-   EJS has a special syntax to use javascript in the html content.
    -   `<%= %>` for outputting a single value.
    -   `<% %>`

```html
<main>
    <p>We found <%= numberOfRestaurants %> restaurants.</p>
    <ul id="restaurants-list">
        <% for (const restaurant of restaurants) { %>
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
        <% } %>
    </ul>
</main>
```

### **Passing Data to inject in Template**

```javascript
app.get("/restaurants", function (req, res) {
    const filePath = path.join(__dirname, "data", "restaurants.json");

    const fileData = fs.readFileSync(filePath);
    const storedRestaurants = JSON.parse(fileData);

    res.render("restaurants", {
        numberOfRestaurants: storedRestaurants.length,
        restaurants: storedRestaurants,
    });
});
```

### **Conditional Rendering**

```html
<main>
    <h1>Recommended restaurants</h1>
    <% if (numberOfRestaurants === 0) { %>
    <p>
        Unfortunately, we have no restaurants yet - maybe start recommending
        some?
    </p>
    <% } else { %>
    <p>Find your next favorite restaurants with help of our other users!</p>
    <p>We found <%= numberOfRestaurants %> restaurants.</p>
    <ul id="restaurants-list">
        <% for (const restaurant of restaurants) { %>
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
        <% } %>
    </ul>
    <% } %>
</main>
```
