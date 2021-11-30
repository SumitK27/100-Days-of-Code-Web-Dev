let anchorElement = document.getElementById("page-link");
anchorElement.href = "https://facebook.com";
console.log(anchorElement);

anchorElement = document.querySelector("#page-link");
anchorElement.href = "https://google.com";
console.log(anchorElement);

anchorElement = document.querySelector("p a");
anchorElement.href = "https://amazon.com";
console.log(anchorElement);

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.textContent = "This leads to Google";
newAnchorElement.href = "https://google.com";

// 2. Get access to the parent element that should hold the new element.
let parentElement = document.querySelector("#toAdd");

// 3. Insert the new element into the parent element content.
parentElement.appendChild(newAnchorElement);
