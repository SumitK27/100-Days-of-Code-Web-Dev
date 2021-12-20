const fs = require("fs");

function readFile() {
    try {
        // Code where error might occur
        const fileData = fs.readFileSync("data.json");
    } catch (err) {
        // Code after error occurred
        console.log("An Error Occurred!", err);
    }

    console.log("Hi there!");
}

readFile();
