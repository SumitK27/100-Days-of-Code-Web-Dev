// 1) Select the two <button> elements and store them in two different variables.
//    - Select the first button without adding or using any "id"
//    - Select the second button by using an "id"
let btnRemove = document.querySelector("button");
let btnAdd = document.getElementById("btn-add");

// 2) Add "click" event listener to both buttons (with two different functions).
btnRemove.addEventListener("click", printWithVariable);
btnAdd.addEventListener("click", printWithoutVariable);
//    The functions should "console.dir()" the clicked buttons.
//    - Output the first button by using the variable in which it's stored
function printWithVariable() {
    console.dir(btnRemove);
}

//    - Output the second button WITHOUT using the variable in which it's stored
function printWithoutVariable(e) {
    console.dir(e.target);
}

// 3) Now select and store the paragraphs mentioned in the text you see on the page (first and third paragraph)
//    - Select BOTH paragraphs by drilling into the document and "navigating" to the mentioned elements
//    - If you struggle with DOM drilling, use "ids" instead but watch the solution!
let paragraphOne = document.body.children[2].children[1];
let paragraphThree = paragraphOne.nextElementSibling.nextElementSibling;

// 4) Change the functions from (2) such that:
btnRemove.addEventListener("click", removeParagraph);
btnAdd.addEventListener("click", changeBackground);

//    - The first button removes the third paragraph (i.e. the <p> prior to it)
function removeParagraph() {
    paragraphThree.remove();
}

//    - The second button changes the background color of the first paragraph to blue
function changeBackground() {
    // paragraphOne.style.backgroundColor = "blue";

    // 5) Solve (4) both by changing the "inline styles" as well as by adding CSS classes
    paragraphOne.classList.add("changeStyle");
}
