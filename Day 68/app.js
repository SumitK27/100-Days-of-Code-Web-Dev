const path = require("path");

const express = require("express");

const userRoutes = require("./routes/users");
const db = require("./data/database");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 'urlencoded' is used to handle 'application/x-www-form-urlencoded' data
// app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// Serve images
app.use("/images", express.static("images"));

app.use(userRoutes);

db.connectToDatabase().then(function () {
    app.listen(3000);
});
