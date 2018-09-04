const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
};

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter));

    if (this.remainingGuesses === 0)
    {
        this.status = "failed";
    }
    else if (finished)
    {
        this.status = "finished";
    }
    else
    {
        this.status = "playing";
    }
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