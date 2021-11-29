let hobbies = ["Sports", "Cooking"];
console.log(hobbies.length);

console.log("Window Object:", window);

// alert("Hello Alert");
// window.alert("Hello from Window");

console.dir("Document Object:", document);
console.log("HEAD:", document.head.children);
console.log("Title:", document.head.children[3].innerHTML); // Advance JavaScript
console.log("BODY:", document.body.children);

document.body.children[1].children[0].href = "https://google.com/";
//       body  ->  p    ->    a  ->   href

console.log(document.getElementById("page-link").href);
console.log(document.querySelector(".heading").innerHTML);
