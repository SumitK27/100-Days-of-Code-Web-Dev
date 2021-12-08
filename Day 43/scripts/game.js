function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        alert("Please set custom player names for both players!");
        return;
    }

    activePlayerNameElement.textContent = players[activePlayer].name;
    gameAreaElement.style.display = "block";
}

function selectGameField(event) {
    if (event.target.tagName !== "LI") {
        return;
    }

    const selectedField = event.target;
    const selectedColumn = selectedField.dataset.col - 1;
    const selectedRow = selectedField.dataset.row - 1;

    if (gameData[selectedRow][selectedColumn] !== 0) {
        alert("Please select an empty field");
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    selectedField.classList.add("disabled");

    gameData[selectedRow][selectedColumn] = activePlayer + 1;
    console.log(gameData);

    switchPlayer();
}

function switchPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    activePlayerNameElement.textContent = players[activePlayer].name;
}
