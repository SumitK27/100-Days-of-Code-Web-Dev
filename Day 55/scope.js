const fs = require("fs");

function readFile() {
    let varA = 10;
    try {
        const fileData = fs.readFileSync("data.json");

        console.log(fileData); // Accessible
        console.log(varA); // Accessible
    } catch (err) {
        console.log("An Error Occurred!", err);
    }

    console.log(fileData); // Not accessible
    console.log(varA); // Accessible
}

readFile();
