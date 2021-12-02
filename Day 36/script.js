const productNameInputElement = document.getElementById("product-name");
const remainingCharsElement = document.getElementById("remaining-chars");
const maxCharsElement = document.getElementById("max-chars");

// Get the maximum length allowed by the input field
const maxAllowedChars = productNameInputElement.maxLength;

// Set the initial value to the max limit
remainingCharsElement.textContent = maxAllowedChars;
maxCharsElement.textContent = maxAllowedChars;

function updateRemainingCharacters(event) {
    // Get current length of the text inside the input field
    let enteredTextLength = event.target.value.length;
    let remainingCharacters = maxAllowedChars - enteredTextLength;

    // Update the number of remaining characters
    remainingCharsElement.textContent = remainingCharacters;
}

// Add an event listener on "input" event
productNameInputElement.addEventListener("input", updateRemainingCharacters);
