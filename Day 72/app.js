const path = require("path");

const express = require("express");
const session = require("express-session");
const mongodbStore = require("connect-mongodb-session");

const db = require("./data/database");
const demoRoutes = require("./routes/demo");

const MongoDBStore = mongodbStore(session);

const app = express();

const sessionStore = new MongoDBStore({
    uri: "mongodb://localhost:27017", // MongoDB URI
    databaseName: "auth-demo", // Database to be used
    collection: "sessions", // Collection to store the session
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// Adding session middleware
app.use(
    session({
        secret: "super-secret", // to secure a session
        resave: false, // only update session if session data is changed
        saveUninitialized: false, // only save data if present
        store: sessionStore, // where to store session data (memory/file storage/database)
        cookie: {
            maxAge: 30 * 24 * 60 * 60 * 1000, // Expire cookie after a month
        },
    })
);

app.use(demoRoutes);

app.use(function (error, req, res, next) {
    res.render("500");
});

db.connectToDatabase().then(function () {
    app.listen(3000);
});
