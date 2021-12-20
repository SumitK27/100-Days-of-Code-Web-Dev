const fs = require("fs/promises");

async function readFile() {
    try {
        const fileData = await fs.readFile("data.txt");
        console.log("File parsing done!");
        console.log(fileData.toString());
    } catch (error) {
        console.log("Error occurred", error);
    }

    console.log("Hi there!");
}

readFile();
