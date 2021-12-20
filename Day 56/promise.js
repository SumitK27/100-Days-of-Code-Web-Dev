const fs = require("fs/promises");

function readFile() {
    fs.readFile("data.txt")
        .then(function (fileData) {
            console.log("File parsing done!");
            console.log(fileData.toString());
        })
        .catch(function (error) {
            console.log("Error occurred!", error);
        });

    console.log("Hi there!");
}

readFile();
