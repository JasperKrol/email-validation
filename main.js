// JS CODE
// Index koppelen aan main.js script tag onderin index.html
// SCRIPT
// sla de referenties op naar de inputvelden -> label
const usernameInput = document.getElementById('input-username');

// sla de referenties op naar de warning-messages --> P element
const usernameWarning = document.getElementById('username-warning');

// voeg eventlisteners toe op de inputvelden
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


// sla de referenties op naar de inputvelden -> van/naar label in html
const passwordInput = document.getElementById("input-password");
// sla de referenties op naar de warning-messages -> van/naar p element in html
const passwordWarning = document.getElementById("password-warning")

// voeg een eventlistener toe op de inputvelden - key is event, listener is de functie te maken
passwordInput.addEventListener("keyup", checkPassword);

// schrijf een functie die de password input checkt en door de eventlistener aangeroepen wordt
function checkPassword (e) {
    // check of de input minimaal 6 tekens heeft -> geen warning
    if (e.target.value === "" || e.target.value.length > 6) {
        // geen melding dus
        passwordWarning.textContent = "";
    } else {
        // geen een melding als het niet correct is
        passwordWarning.textContent = "De minimale invoer is 6 tekens"
    }
}



