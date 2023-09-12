document.addEventListener('DOMContentLoaded', function() {
    const hiddenWord = "VICTOR"; // Set your word here
    let guessedWord = Array(hiddenWord.length).fill('_');
    let attempts = 0;

    const wordContainer = document.getElementById('word-container');
    const guessInput = document.getElementById('guess');
    const submitButton = document.getElementById('submit');
    const messageDiv = document.getElementById('message');

    function displayWord() {
        wordContainer.textContent = guessedWord.join(' ');
    }

    function displayMessage(message, color) {
        messageDiv.textContent = message;
        messageDiv.style.color = color;
    }

    function checkGuess() {
        const guess = guessInput.value.toUpperCase();

        if (guess.length !== 1 || !/[A-Z]/.test(guess)) {
            displayMessage('Please enter a single letter.', 'red');
            return;
        }

        if (guessedWord.includes(guess)) {
            displayMessage('You already guessed that letter.', 'red');
            return;
        }

        let correctGuess = false;

        for (let i = 0; i < hiddenWord.length; i++) {
            if (hiddenWord[i] === guess) {
                guessedWord[i] = guess;
                correctGuess = true;
            }
        }

        if (correctGuess) {
            displayMessage('Correct guess!', 'green');
        } else {
            attempts++;
            displayMessage(`Incorrect guess. Attempts: ${attempts}`, 'red');
        }

        displayWord();

        if (guessedWord.join('') === hiddenWord) {
            displayMessage('Congratulations! You guessed the word!', 'green');
            guessInput.disabled = true;
            submitButton.disabled = true;
        }

        guessInput.value = '';
    }

    submitButton.addEventListener('click', checkGuess);
    displayWord();
});
