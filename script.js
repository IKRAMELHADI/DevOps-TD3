// Générer un nombre aléatoire entre 0 et 100
let randomNumber = Math.floor(Math.random() * 101);
let attempts = 0;

function checkGuess() {
    let userGuess = document.getElementById("userGuess").value;
    let message = document.getElementById("message");

    if (userGuess === "") {
        message.textContent = "Veuillez entrer un nombre !";
        return;
    }

    userGuess = Number(userGuess);
    attempts++;

    if (userGuess < 0 || userGuess > 100) {
        message.textContent = "Choisissez un nombre entre 0 et 100.";
    } else if (userGuess < randomNumber) {
        message.textContent = "Trop bas ! Essayez encore.";
    } else if (userGuess > randomNumber) {
        message.textContent = "Trop haut ! Essayez encore.";
    } else {
        message.textContent = `Bravo ! Vous avez trouvé en ${attempts} essais. 🎉`;
        document.getElementById("userGuess").disabled = true;
    }
}

