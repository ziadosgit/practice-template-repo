const ps = require("prompt-sync");
const prompt = ps();
function initializeGame() {
    return new Promise(function (resolve, reject) {
        let character = prompt("Enter your name: ");
        resolve(character);
    }).then(data => {
        console.log(`Hi ${data}, the game initialized successfully`);
    });
}

initializeGame();
