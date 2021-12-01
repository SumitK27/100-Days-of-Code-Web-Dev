// REMOVE ELEMENTS
// 1. Select the element that should be removed.
let h1 = document.querySelector("h1");
let pToDelete = document.querySelector("#toDelete");

// 2. Remove it!
h1.remove();

// Alternative (for older browsers)
pToDelete.parentElement.removeChild(pToDelete);

// MOVE ELEMENTS
// 1. Select the element to be moved.
let firstParagraph = document.querySelector("p");

// 2. Append that element to it's parent.
firstParagraph.parentElement.append(firstParagraph);

// innerHTML
firstParagraph.innerHTML = "Hello<br /><strong>World!!!</strong>";

// ADD EVENT LISTENER
let clickableParagraph = document.getElementById("btn");
clickableParagraph.addEventListener("click", changeParagraphText);

function changeParagraphText(event) {
    clickableParagraph.textContent = "Clicked!!!";
    console.log("Paragraph Clicked!");
    console.log(event);
}

let input = document.querySelector("input");

input.addEventListener("input", changingInput);

function changingInput(event) {
    let enteredText = event.target.value;
    console.log("Contains: " + enteredText);
    console.log("Added: " + event.data);
}
