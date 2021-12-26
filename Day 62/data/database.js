const mysql = require("mysql2/promise");

// Create the connection
const pool = mysql.createPool({
    host: "localhost",
    database: "blog",
    user: "root",
    password: "root",
});

module.exports = pool;
