const express = require("express");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(authRoutes);

app.listen(3000, function () {
    console.log("Server running on Port 3000");
});
