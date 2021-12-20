const fs = require("fs");

function readFile() {
    fs.readFile("data.txt", function (error, fileData) {
        console.log("File parsing done!");
        console.log(fileData.toString());

        // Start another async task sends the data to a database
    });

    console.log("Hi there!");
}

readFile();
