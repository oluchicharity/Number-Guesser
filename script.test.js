const { generateSecretNumber, checkGuess } = require('./script.js ');

test('generates a number between 1 and 100', () => {
    const number = generateSecretNumber();
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(100);
});

test('checks guess correctly', () => {
    const secretNumber = 50;
    expect(checkGuess(40, secretNumber)).toBe('Too low!');
    expect(checkGuess(60, secretNumber)).toBe('Too high!');
    expect(checkGuess(50, secretNumber)).toBe('Congratulations! You guessed the correct number!');
});
