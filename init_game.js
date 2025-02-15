const ps = require("prompt-sync");
const prompt = ps();
function initializeGame() {
    return new Promise(function (resolve, reject) {
        let character = prompt("Enter your name: ");
        setTimeout(() => {
            resolve(character);
        }, 10000);
    }).then(data => {
        console.log(`Hi ${data}, the game initialized successfully`);
    });
}

initializeGame();
