# **Day 67** <!-- omit in toc -->

1. [**Two Sides of File Uploading**](#two-sides-of-file-uploading)
   1. [**Client-Side**](#client-side)
      1. [**Input Type**](#input-type)
      2. [**Form**](#form)
   2. [**Server-Side**](#server-side)
      1. [**Parsing Incoming File**](#parsing-incoming-file)
      2. [**Storing Files**](#storing-files)
      3. [**File Storage with Custom Config**](#file-storage-with-custom-config)

## **Two Sides of File Uploading**

### **Client-Side**

-   User needs to be able to select a file.
-   Submitted file should contain file and other data.

#### **Input Type**

```html
<!-- OPTION 1: Allowing individual extensions -->
<input type="file" id="image" name="image" accept=".jpg,.jpeg,.png" required />

<!-- OPTION 2: Allowing similar types -->
<input
    type="file"
    id="image"
    name="image"
    accept="image/jpg,image/png"
    required
/>

<!-- OPTION 3: Accept all type of image files -->
<input type="file" id="image" name="image" accept="image/*" required />
```

#### **Form**

-   `application/x-www-form-urlencoded` default type of submission.
-   `multipart/form-data` type needed if the form contains file picker.

```html
<!-- Allow submission of file -->
<form action="/profiles" method="POST" enctype="multipart/form-data"></form>
```

### **Server-Side**

-   Incoming file should be extracted.
-   File has to be stored and serve.

#### **Parsing Incoming File**

```shell
$ npm install --save multer
```

```javascript
...
// For extracting file
const multer = require("multer");

// Middleware
// 'multer' to handle 'multipart/form-data'
const upload = multer({});
...
router.post("/profiles", upload.single("image"), function (req, res) {
    // Get the submitted file
    const uploadImageFile = req.file;

    // Get the form inputs
    const userData = req.body;
});
...
```

-   "image" is the input name for the file picker in the form.

#### **Storing Files**

-   Files shouldn't be stored in the database because they are not optimized for storage and retrieval of file.
-   Use file systems to store files on hard drive.
-   Path to the file should be stored in the database.

```javascript
const upload = multer({
    // destination folder name "images"
    dest: "images",
});
...

router.post("/profiles", upload.single("image"), function (req, res) {
    // Get the path of stored file
    const uploadImageFile = req.file.path;

    // Get the form inputs
    const userData = req.body;

    console.log(uploadImageFile);
    console.log(userData);

    res.redirect("/");
});
```

#### **File Storage with Custom Config**

```javascript
...
// Storage Object
const storageConfig = multer.diskStorage({
    destination: function (req, file, cb) {
        // Error, Destination
        cb(null, "images");
    },
    filename: function (req, file, cb) {
        // Error, FileName
        cb(null, `${Date.now()} - ${file.originalname}`);
    },
});

// Middleware
// 'multer' to handle 'multipart/form-data'
const upload = multer({
    // Storage Configuration
    storage: storageConfig,
});
```
