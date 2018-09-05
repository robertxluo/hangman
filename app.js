const puzzle_element = document.querySelector("#puzzle");
const guesses_element = document.querySelector("#guesses");
const game1 = new Hangman('Cat', 2);

puzzle_element.textContent = game1.puzzle;
guesses_element.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
    const guess = e.key;
    game1.makeGuess(guess);
    puzzle_element.textContent = game1.puzzle;
    guesses_element.textContent = game1.statusMessage;
});

getPuzzle("1").then((puzzle) => {
    console.log(puzzle);
}).catch((error) => {
    console.log(`Error: ${error}`);
});

getLocation().then((location) => {
    return getCountry(location.country);
}).then((country) => {
    console.log(country);
}).catch((error) => {
    console.log(`Error: ${error}`);
});