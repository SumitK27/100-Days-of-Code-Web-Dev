# **Day 68** <!-- omit in toc -->

1. [**File Uploading**](#file-uploading)
   1. [**Server-Side**](#server-side)
      1. [**Storing File Path**](#storing-file-path)
      2. [**Serving Files**](#serving-files)
   2. [**Client-Side**](#client-side)
      1. [**Adding File Preview**](#adding-file-preview)
2. [**XML**](#xml)
3. [**JSON**](#json)
4. [**Ajax**](#ajax)
   1. [**What?**](#what)
      1. [**XMLHttpRequest**](#xmlhttprequest)
      2. [**fetch()**](#fetch)
   2. [**Why?**](#why)
      1. [**Without AJAX**](#without-ajax)
      2. [**With AJAX**](#with-ajax)

## **File Uploading**

### **Server-Side**

#### **Storing File Path**

```javascript
// Database Connectivity
const db = require("../data/database");

router.post("/profiles", upload.single("image"), async function (req, res) {
    // Get the stored file
    const uploadImageFile = req.file;

    // Get the form inputs
    const userData = req.body;

    // Storing Username and Image path
    await db.getDb().collection("users").insertOne({
        name: userData.username,
        imagePath: uploadImageFile.path,
    });

    res.redirect("/");
});
```

#### **Serving Files**

**`/app.js`**

```javascript
app.use("/images", express.static("images"));
```

**`/routes/user.js`**

```html
<ul>
    <% for (const user of users) { %>
    <li class="user-item">
        <article>
            <img src="<%= user.imagePath %>" alt="The image of the user." />
            <h2><%= user.name %></h2>
        </article>
    </li>
    <% } %>
</ul>
```

### **Client-Side**

#### **Adding File Preview**

**`/views/new-user.ejs`**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Profile</title>
        <link rel="stylesheet" href="/styles/base.css" />
        <link rel="stylesheet" href="/styles/profiles.css" />
        <script src="/scripts/file-preview.js" defer></script>
    </head>
    <body>
        <main id="new-user">
            <form
                action="/profiles"
                method="POST"
                enctype="multipart/form-data"
            >
                <div class="form-control">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div class="form-control">
                    <img src="" id="image-preview" alt="Your picked Image" />
                    <label for="image">User image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept=".jpg,.jpeg,.png"
                        required
                    />
                </div>
                <button class="btn">Save User</button>
            </form>
        </main>
    </body>
</html>
```

**`/public/scripts/file-preview.js`**

```javascript
const filePickerElement = document.getElementById("image");
const imagePreviewElement = document.getElementById("image-preview");

function showPreview(event) {
    const files = filePickerElement.files;

    if (!files || files.length === 0) {
        imagePreviewElement.style.display = "none";
        return;
    }

    const pickedFile = files[0];

    // Generate link of picked file and assign to image preview
    imagePreviewElement.src = URL.createObjectURL(pickedFile);
    imagePreviewElement.style.display = "block";
}

filePickerElement.addEventListener("change", showPreview);
```

**`/public/styles/profiles.css`**

```css
#image-preview {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    display: none;
}
```

---

## **XML**

-   Data format for formatting / structuring text data in a machine-readable way.
-   Looks like HTML (based on XML)
-   XML is not standardized. Uses Custom tags.

```xml
<post-comment>
    <title>This was great!</title>
    <comment-text>Thanks a lot - this was really helpful!</comment-text>
</post-comment>
```

---

## **JSON**

-   Used instead of XML.
-   Uses key-value pairs for storing data.
-   Easier to read by humans and machines.
-   Properties and String values should be wrapped inside double quotes.
-   Also supports value types like boolean, numbers, nested arrays and objects.

```json
{
    "title": "This was great!",
    "commentText": "Thanks a lot - this was really helpful!"
}
```

---

## **Ajax**

### **What?**

-   Acronym for _**A**synchronous **J**avaScript **A**nd **X**ML_
-   It is historic time and a bit outdated.
-   Sending HTML requests via JavaScript (Browser-side).
-   Two Built-in Browser-side JavaScript Features:
    -   XMLHttpRequest
    -   fetch()

#### **XMLHttpRequest**

-   Built-in Browser-side JavaScript Object.
-   Contains utility methods for sending Http requests via JavaScript.
-   Originally developed to send XML data.
-   Clunky to use.
-   Typically used indirectly via third-party libraries (eg. axios)

#### **fetch()**

-   Built-in Browser-side JavaScript Object.
-   Contains utility methods for sending Http requests via JavaScript.
-   Uses modern JavaScript features like Promises.
-   Easier to use.
-   Alternative to XMLHttpRequest and libraries.

### **Why?**

#### **Without AJAX**

-   After sending a GET request to URL, Submitting a form (GET/POST) we were loading a new page.
-   Wastes the bandwidth.

#### **With AJAX**

-   Send a Http request vai browser-side JavaScript.
-   Handle response in save script code.
-   Only loads a part of page.
-   Don't need to reload the page while sending/receiving some data.
