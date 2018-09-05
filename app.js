const puzzle_element = document.querySelector("#puzzle");
const guesses_element = document.querySelector("#guesses");
let game1;

// puzzle_element.textContent = game1.puzzle;
// guesses_element.textContent = game1.statusMessage;

// window.addEventListener("keypress", (e) => {
//     const guess = e.key;
//     game1.makeGuess(guess);
//     puzzle_element.textContent = game1.puzzle;
//     guesses_element.textContent = game1.statusMessage;
// });

const render = () => {
    puzzle_element.textContent = game1.puzzle;
    guesses_element.textContent = game1.statusMessage;
}

const startGame = async () => {
    const puzzle = await getPuzzle("1");
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector("#reset").addEventListener("click", startGame);

startGame();

// getPuzzle("1").then((puzzle) => {
//     console.log(puzzle);
// }).catch((error) => {
//     console.log(`Error: ${error}`);
// });

// getCurrentCountry().then((country) => {
//     console.log(country);
// }).catch((error) => {
//     console.log(error);
// });