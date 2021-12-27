# **Day 63** <!-- omit in toc -->

1. [**NoSQL Introduction**](#nosql-introduction)
2. [**Installation**](#installation)
   1. [**MongoDB Server**](#mongodb-server)
   2. [**Testing the Installation**](#testing-the-installation)
   3. [**MongoDB Shell**](#mongodb-shell)
3. [**Using MongoDB**](#using-mongodb)
   1. [**Creating Database**](#creating-database)
   2. [**Inserting Data**](#inserting-data)

## **NoSQL Introduction**

-   Store data without focusing on a strict schemas/data structures or relationships across multiple tables.
-   Data is stored similar to JSON (JavaScript Objects)
-   Data doesn't have to be in similar structure between documents.
-   **Collections** - Tables but without structure (no columns and rows) in NoSQL.
-   **Documents** - Individual Rows inside the collections. They contain key-value pairs of data.
-   Related data is stored together as nested objects instead of normalizing/splitting across.

```json
// Books
{
    "id": "abc",
    "title": "Harry Potter",
    "author": { "name": "J.K. Rowling" },
    "movies": ["m1", "m2"]
}

// Movies
{
    "id": "m1",
    "title": "Harry Potter 1",
    "director": {...}
}
```

-   Try to optimize database layout to make expected queries as efficient as possible!
-   Data which is frequently queried together, should typically be stored together.

---

## **Installation**

### **MongoDB Server**

1. Navigate to [MongoDB](https://mongodb.com).
2. Hover on `Software` from the navigation bar and select `Community Server`.
3. Select the Version and Platform and press download.
4. Launch the installer and Accept the License.
5. Click Next, Keep the [x] for Installing MongoD.
6. Change the path of `Data Directory` if needed which will be used to store all the data from our databases to a file. Click Next.
7. Click Next and Install.
8. Start and Stop the MongoDB server:
   a. Navigating to `Services` in Windows and search for `MongoDB Server`
   b. Open command prompt and run `net start MongoDB` or `net stop MongoDB`.

### **Testing the Installation**

1. Open `mongo.exe` from `C:\Program Files\MongoDB\Server\5.x\bin`.
2. Run `show dbs`. You should see the list of available databases.

### **MongoDB Shell**

1. Goto [MongoDB Shell](https://mongodb.com/try/download/shell)
2. Download the Setup and Launch it.
3. Walk through the installer.
4. Search for `mongosh` in Start menu and launch it.

---

## **Using MongoDB**

### **Creating Database**

```shell
use ratingportal
```

-   `use` is used to switch between databases and it can also create a new database if it doesn't exists.
-   `ratingportal` is the name of the database to be created.
-   _Database will not be visible until some data is been stored in it._

### **Inserting Data**

```shell
db.restaurants.insertOne(
    {
        name: "Munich House",
        address: {
            street: "Some Street",
            streetNumber: "23b"
        }
    }
)

db.restaurants.insertOne(
    {
        name: "Burger House",
        address: {
            street: "Another Street",
            streetNumber: "15"
        }
    }
)
```

-   `restaurants` is the collection name to be used where data is to be inserted.
-   Like databases, collections also can be created on-the-fly.
-   `insertOne()` let's you insert one document (at a time) in the collection.
-   Data inside `insertOne` should be a JSON object.
