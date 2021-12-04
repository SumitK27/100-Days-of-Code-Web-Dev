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

    // Add "warning" class when remaining characters are less than or equal to ten, add "error" class when remaining characters is zero and remove both of them when conditions are not satisfied
    if (remainingCharacters === 0) {
        productNameInputElement.classList.add("error");
        remainingCharsElement.classList.add("error");
    } else if (remainingCharacters <= 10) {
        productNameInputElement.classList.add("warning");
        remainingCharsElement.classList.add("warning");
        productNameInputElement.classList.remove("error");
        remainingCharsElement.classList.remove("error");
    } else {
        productNameInputElement.classList.remove("error", "warning");
        remainingCharsElement.classList.remove("error", "warning");
    }

    // Update the number of remaining characters
    remainingCharsElement.textContent = remainingCharacters;
}

// Add an event listener on "input" event
productNameInputElement.addEventListener("input", updateRemainingCharacters);
