# **Day 56** <!-- omit in toc -->

1. [**Synchronous**](#synchronous)
2. [**Asynchronous**](#asynchronous)
   1. [**Callback Hell**](#callback-hell)
   2. [**Promise**](#promise)
   3. [**Error Handling**](#error-handling)
   4. [**Async-Await**](#async-await)
3. [**Database**](#database)
   1. [**Need?**](#need)
   2. [**Types**](#types)

## **Synchronous**

-   Code is executed sequentially.
-   Further code execution is blocked until the current statement has been executed.

```javascript
const fs = require("fs");

function readFileSync() {
    const fileData = fs.readFileSync("data.txt");

    console.log(fileData.toString());
    console.log("Hi there!");
}

readFileSync();
```

## **Asynchronous**

-   Code is executed asynchronously.
-   Code execution isn't blocked.
-   Further code gets executed until the current statements is under execution.
-   Uses callbacks.

```javascript
const fs = require("fs");

function readFileAsync() {
    fs.readFile("data.txt", function (error, fileData) {
        console.log("File parsing done!");
        console.log(fileData.toString());
    });

    console.log("Hi there!");
}

readFileAsync();
```

### **Callback Hell**

-   Callbacks that are nested inside other callbacks.

```javascript
function storeData() {
    fs.readFile("input-data.csv", function (error, data) {
        const cleanedData = cleanData(data);
        storeDataInDatabase(cleanedData, function (error, result) {
            if (result.changedData) {
                confirmDataChange(function (error, done) {
                    if (!error && done) {
                        res.render("success");
                    }
                });
            }
        });
    });
}
```

### **Promise**

-   Helps to write code in a structured way.
-   Callback isn't present in promise.
-   Instead, the code to be executed should be placed inside the `.then()` method of the promise.

```javascript
const fs = require("fs/promises");

function readFile() {
    fs.readFile("data.txt").then(function (fileData) {
        console.log("File parsing done!");
        console.log(fileData.toString());
    });

    console.log("Hi there!");
}

readFile();
```

**Example 2**

```javascript
const fs = require("fs/promises");

function readFile() {
    fs.readFile("data.txt")
        .then(function (fileData) {
            console.log("File parsing done!");
            console.log(fileData.toString());

            return anotherAsyncOperation;
        })
        .then(function () {
            // Gets executed after 'anotherAsyncOperation' is done
        });

    console.log("Hi there!");
}

readFile();
```

### **Error Handling**

-   As code is async, code further get's executed. Hence we can't use Try-Catch.
-   Instead, we use `.catch()` to the promise.
-   Therefore, `then()` is for success and `catch()` is for failure.

```javascript
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
```

### **Async-Await**

-   Automatically return a promise.
-   Add `async` at the beginning of function definition.
-   This allows us to use `await` which is alternative to `.then()` from promise.
-   Code written after the await is added to `then()` behind the scenes.
-   Now we can use try catch.

```javascript
const fs = require("fs/promises");

async function readFile() {
    const fileData = await fs.readFile("data.txt");
    console.log("File parsing done!");
    console.log(fileData.toString());

    console.log("Hi there!");
}

readFile();
```

**Error Handling**

```javascript
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
```

---

## **Database**

### **Need?**

-   Performing CRUD (Create, Read, Update, Delete) operation with a file is very inefficient due to:
    -   **Create** - Replace entire content in file with new content.
    -   **Read** - Always read entire file.
    -   **Update** - Read entire content, find content to update, replace entire content.
    -   **Delete** - Read entire content, find content to update, replace entire content.
-   Scalability and concurrent access might become an issue with the files.
    -   Multiple read/write operations at the same time on a single file.
    -   Too many read/write operations might overwhelm file system.
-   Database Management Systems (DBMS) are software systems optimized for data storage tasks.
    -   Optimize simultaneous read/write access.
    -   Optimize data storage and retrieval.
    -   Optimize data querying (with filters and conditions).

### **Types**

1. Relational Database Management Systems (RDBMS / SQL Databases).
2. Non-Relational Database Management Systems (NoSQL Databases).
