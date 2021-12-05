// ========== FIRST EXAMPLE ==========
const calculateSumButton = document.querySelector("#calculator button");

calculateSumButton.addEventListener("click", calculateSum);

function calculateSum() {
    const userNumberInputElement = document.getElementById("user-number");
    const enteredNumber = userNumberInputElement.value;
    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber += i;
    }

    const outResultElement = document.getElementById("calculated-sum");
    outResultElement.style.display = "block";
    outResultElement.textContent = sumUpToNumber;
}

// ========== SECOND EXAMPLE ==========

const highlightButton = document.querySelector("#highlight-links button");

highlightButton.addEventListener("click", highlightAnchors);

function highlightAnchors() {
    const anchorElements = document.querySelectorAll("#highlight-links a");

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add("highlight");
    }
}

// ========== THIRD EXAMPLE ==========

const userData = {
    firstName: "Niko",
    lastName: "Bellic",
    age: 26,
};

const displayUserDataButton = document.querySelector("#user-data button");

displayUserDataButton.addEventListener("click", displayUserData);

function displayUserData() {
    const outputDataElement = document.getElementById("output-user-data");

    outputDataElement.innerHTML = "";

    for (const key in userData) {
        const newUserDataListItemElement = document.createElement("li");
        const outputText = key.toUpperCase() + ": " + userData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.appendChild(newUserDataListItemElement);
    }
}

// ========== FOURTH EXAMPLE ==========

const rollDiceButton = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement =
        document.getElementById("user-target-number");
    const diceRollListElement = document.getElementById("dice-rolls");
    const enteredNumber = targetNumberInputElement.value;

    diceRollListElement.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();

        numberOfRolls++;
        const newRollListItemElement = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollListElement.append(newRollListItemElement);

        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement =
        document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById(
        "output-target-number"
    );

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButton.addEventListener("click", deriveNumberOfDiceRolls);
