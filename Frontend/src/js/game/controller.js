import game from "../server/game.js"
import { clearDisplay, updateStats, updateTime } from "./view.js";

function playerHasLifes(currentGame) {
    return currentGame.lifes > 0
}

function playerGuessHiddenWord(currentGame) {
    return !currentGame.hiddenWord.includes("_")
}

export default function setGame() {
    
    let gameState = {}
    let time = null;

    function startTimer() {
        time = setInterval(() => {
            gameState.timeLeft--
            updateTime(gameState, time)
        }, 1000)
    }

    function handleGuess(e) {
        gameState = game.guessChar(gameState, e.target.textContent)
        if (playerGuessHiddenWord(gameState)) {
            gameState = game.nextGame(game.discoveredWord(gameState))
        }
        if (!playerHasLifes(gameState)) {
            gameState = {}
            clearDisplay()
        } else {
            updateStats(gameState)
        }
    }

    function nextGame() {
        gameState = game.nextGame(gameState)
    }

    function revealChar() {
        gameState = game.revealChar(gameState)
    }

    function newGame() {
        gameState = game.newGame()
    }

    function getState() {
        return gameState
    }

    return {
        handleGuess,
        nextGame,
        revealChar,
        newGame,
        getState,
        startTimer
    }

}