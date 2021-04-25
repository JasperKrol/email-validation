// JS CODE
// Index koppelen aan main.js script tag onderin index.html
// SCRIPT
// 1. Sla de referentie naar het gebruikersnaam-veld op
const usernameInput = document.getElementById('input-username');

// 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
const usernameWarning = document.getElementById('username-warning');

// 3. Zet een event listener op het gebruikersnaam-veld
usernameInput.addEventListener("keyup", checkUsername);

// 4. Maak een functie die de event listener kan aanroepen als de gebruiker input geeft
function checkUsername (e) {
    // 5. Laat die functie checken of de huidige waarde van de input een '@' bevat
    if (e.target.value.includes("@")) {
        // 6. Als dit zo is, geef de waarschuwing weer
        usernameWarning.textContent = "Gebruikersnaam mag geen @ bevatten"
    }// 7. Als dit niet zo is, zorg dan dat de waarschuwing verdwijnt
    else {
        usernameWarning.textContent = " ";
    }
}



// 8. Herhaal deze stappen voor het wachtwoord


