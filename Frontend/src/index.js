import { updateStats, createCharacters } from "./js/view.js";
import setGame from "./js/gameState.js";

function main() {

    let game = setGame()

    const startButton = document.getElementById("start")
    const revealButton = document.getElementById("reveal")
    const nextButton = document.getElementById("next")

    startButton.onclick = () => {
        game.newGame()
        game.startTimer()
        updateStats(game.getState())
        createCharacters(game)
    }

    revealButton.onclick = () => {
        game.revealChar()
        updateStats(game.getState())
    }
    
    nextButton.onclick = () => {
        game.nextGame()
        updateStats(game.getState())
    }

}

main()