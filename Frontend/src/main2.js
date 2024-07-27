import { clearDisplay, showInfo, updateStats } from "./js/display.js";
import { guessLetter, nextGame, revealLetter } from "./js/game.js";
import { buildButtons, newGame} from "./js/utils.js";

function main() {

    let currentGame = {}
    const startButton = document.getElementById("start")
    const revealButton = document.getElementById("reveal")
    const nextButton = document.getElementById("next")
    let time = null;

    function startGame() {
        const lettersButtons = buildButtons()
        const letterDiv = document.getElementById("letters")
        for (const button of lettersButtons) {
            button.onclick = () => {
                currentGame = guessLetter(currentGame, button.getAttribute("letter"))
                if (currentGame.lifes === 0) {
                    showInfo("GAME OVER")
                    currentGame = {}
                    clearDisplay()
                } else if (!currentGame.hiddenWord.includes("_")) {
                    currentGame = nextGame(discoveredWord(currentGame))
                    showInfo("GOOD ONE")
                }
                updateStats(currentGame)
            }
            letterDiv.appendChild(button)
        }
    }

    startButton.onclick = () => {
        currentGame = newGame()
        updateStats(currentGame)
        startGame()
        // time = setInterval(() => {

        // }, 1000)
    }

    revealButton.onclick = () => {
        currentGame = revealLetter(currentGame)
        updateStats(currentGame)
    }
    
    nextButton.onclick = () => {
        currentGame = nextGame(currentGame)
        updateStats(currentGame)
    }

}

main()