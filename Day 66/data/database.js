const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connect() {
    // Creating Connection
    const client = await MongoClient.connect("mongodb://localhost:27017");
    // Connecting to "blog" Database
    database = client.db("blog");
}

function getDb() {
    if (!database) {
        throw {
            message: "Database connection not established!",
        };
    }
    return database;
}

module.exports = {
    connectToDatabase: connect,
    getDb: getDb,
};
