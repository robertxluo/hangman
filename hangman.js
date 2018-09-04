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

const game1 = new Hangman('Cat', 2);
console.log(game1.getPuzzle());
console.log(`You have: ${game1.remainingGuesses} guess(es) remaining`);

window.addEventListener("keypress", function (e) {
    const guess = e.key;
    game1.makeGuess(guess);
    console.log(game1.getPuzzle());
})