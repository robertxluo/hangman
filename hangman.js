class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guessedLetters = [];
        this.status = "playing";
    }

    calculateStatus() {
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
    }

    getStatus() {
        if (this.status === "playing")
        {
            return `Guesses left: ${this.remainingGuesses}`;
        }
        else if (this.status === "failed")
        {
            return `Nice try! The word was "${this.word.join('')}."`;
        }
        else 
        {
            return "Great work! You guessed the word.";
        }        
    }

    getPuzzle() {
        let asterisks = '';
        this.word.forEach(letter => {
            asterisks = this.guessedLetters.includes(letter) || letter == ' ' ? asterisks += letter : asterisks += "*";
        });
        return asterisks;        
    }

    makeGuess(letter) {
        letter = letter.toLowerCase();
        const isUnique = !this.guessedLetters.includes(letter);
        const isBadGuess = !this.word.includes(letter);
        
        if (this.status !== "playing")
        {
            return;
        }
    
        if (isUnique)
        {
            this.guessedLetters.push(letter);
        }
    
        if (isUnique && isBadGuess)
        {
            this.remainingGuesses--;
        }
        this.calculateStatus();        
    }
}