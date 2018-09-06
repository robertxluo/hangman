import Hangman from './hangman.js';
import getPuzzle from './requests.js';

const puzzle_element = document.querySelector("#puzzle");
const guesses_element = document.querySelector("#guesses");
let game1;

window.addEventListener("keypress", (e) => {
    const guess = e.key;
    game1.makeGuess(guess);
    render();
});

const render = () => {
    puzzle_element.innerHTML = '';
    guesses_element.textContent = game1.statusMessage;
    game1.puzzle.split('').forEach(letter => {
        puzzle_element.innerHTML += `<span>${letter}</span>`;
    });
}
const startGame = async () => {
    const puzzle = await getPuzzle("1");
    game1 = new Hangman(puzzle, 5);
    render();
}

document.querySelector("#reset").addEventListener("click", startGame);

startGame();