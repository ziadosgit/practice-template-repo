const ps = require("prompt-sync");
const prompt = ps();

function movePlayer() {
    return new Promise((resolve, reject) => {
        let direction = prompt(`1. Up
2. Down
3. Right
4. Left
Which direction to move:
`);

        while (!["1", "2", "3", "4"].includes(direction)) {
            console.log("Please enter a number from 1 to 4");
            direction = prompt(`Which direction to move:
                1. Up
                2. Down
                3. Right
                4. Left:
                `);
        }

        if (direction === "1") direction = "up";
        else if (direction === "2") direction = "down";
        else if (direction === "3") direction = "right";
        else if (direction === "4") direction = "left";

        setTimeout(() => {
            resolve(direction);
        }, 5000);
    }).then(direction => {
        console.log(`You moved to ${direction} direction`);
    });
}

movePlayer();