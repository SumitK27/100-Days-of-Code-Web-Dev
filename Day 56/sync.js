const fs = require("fs");

function readFileSync() {
    const fileData = fs.readFileSync("data.txt");

    console.log(fileData.toString());
    console.log("Hi there!");
}

readFileSync();
