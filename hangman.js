const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
};

Hangman.prototype.getPuzzle = function () {
    let asterisks = '';
    this.word.forEach(letter => {
        asterisks = this.guessedLetters.includes(letter) || letter == ' ' ? asterisks += letter : asterisks += "*";
    });
    return asterisks;
};

Hangman.prototype.makeGuess = function(letter) {
    letter = letter.toLowerCase();
    const isUnique = !this.guessedLetters.includes(letter);
    const isBadGuess = !this.word.includes(letter);
    
    if (isUnique)
    {
        this.guessedLetters.push(letter);
    }

    if (isUnique && isBadGuess)
    {
        this.remainingGuesses--;
    }
};

const puzzle_element = document.querySelector("#puzzle");
const guesses_element = document.querySelector("#guesses");
const game1 = new Hangman('Cat', 2);
puzzle_element.textContent = game1.getPuzzle();
guesses_element.textContent = `You have ${game1.remainingGuesses} guess(es) remaining.`;

console.log();

window.addEventListener("keypress", function (e) {
    const guess = e.key;
    game1.makeGuess(guess);
    puzzle_element.textContent = game1.getPuzzle();
    guesses_element.textContent = `You have ${game1.remainingGuesses} guess(es) remaining.`;
})