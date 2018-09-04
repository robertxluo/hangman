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

const guess1 = new Hangman('Jesus Christ', 5);
const guess2 = new Hangman('Witch', 10);
console.log(guess1.getPuzzle());
console.log(guess2.getPuzzle());