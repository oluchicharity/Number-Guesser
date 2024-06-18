let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

document.getElementById('guess-button').addEventListener('click', () => {
    const guess = Number(document.getElementById('guess-input').value);
    const feedback = document.getElementById('feedback');
    const attemptsRemaining = document.getElementById('attempts-remaining');
    
    if (!guess || guess < 1 || guess > 100) {
        feedback.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    attempts--;

    if (guess === secretNumber) {
        feedback.textContent = `Congratulations! You've guessed the correct number: ${secretNumber}`;
        endGame();
    } else if (guess < secretNumber) {
        feedback.textContent = 'Too low!';
    } else {
        feedback.textContent = 'Too high!';
    }

    if (attempts > 0) {
        attemptsRemaining.textContent = `Attempts remaining: ${attempts}`;
    } else {
        feedback.textContent = `Sorry, you've run out of attempts. The number was ${secretNumber}.`;
        endGame();
    }
});

function endGame() {
    document.getElementById('guess-button').disabled = true;
    document.getElementById('guess-input').disabled = true;
}
