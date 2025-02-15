function calculateScore(gameData) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let score = 0;
            if (gameData.actions) {
                score += gameData.actions * 10;
            }
            if (gameData.bonus) {
                score += gameData.bonus;
            }
            console.log(`Calculated Score: ${score}`);
            resolve(score);
        }, 1000);
    });
}
calculateScore(gameData).then(score => console.log(`Final Score: ${score}`));
