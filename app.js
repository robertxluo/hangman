const puzzle_element = document.querySelector("#puzzle");
const guesses_element = document.querySelector("#guesses");
const game1 = new Hangman('Cat', 2);

puzzle_element.textContent = game1.getPuzzle();
guesses_element.textContent = `You have ${game1.remainingGuesses} guess(es) remaining.`;
game1.calculateStatus();
console.log(game1.status);

console.log();

window.addEventListener("keypress", function (e) {
    const guess = e.key;
    game1.makeGuess(guess);
    puzzle_element.textContent = game1.getPuzzle();
    guesses_element.textContent = `You have ${game1.remainingGuesses} guess(es) remaining.`;
    game1.calculateStatus();
    console.log(game1.status);
})