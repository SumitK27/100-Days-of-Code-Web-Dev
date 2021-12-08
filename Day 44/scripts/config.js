function openPlayerConfig(event) {
    const selectedPlayerId = +event.target.dataset.playerid; // get value of "data-playerId" property.
    editedPlayer = selectedPlayerId;
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target); // FormData() - automatically takes all the values entered in a form
    const enteredPlayerName = formData.get("player-name").trim(); // gets value inside the input with the name "player-name"

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById(
        "player-" + editedPlayer + "-data"
    );
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}
