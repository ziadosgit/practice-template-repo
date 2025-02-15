function checkGameOver(gameData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (gameData.lives <= 0 || gameData.timeLeft <= 0) {
                console.log("Game Over!");
                resolve("Game Over");
            } else {
                console.log("Continue playing.");
                resolve("Continue");
            }
        }, 1000);
    });
}
