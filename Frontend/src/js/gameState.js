import utils from "./utils.js";
import game from "./server/game.js"
import { clearDisplay, updateStats, updateTime } from "./view.js";

export default function setGame() {
    
    let gameState = {}
    let time = null;

    function startTimer() {
        time = setInterval(() => {
            gameState.timeLeft = utils.decrementTime(gameState.timeLeft)
            updateTime(gameState, time)
        }, 1000)
    }

    function handleGuess(e) {
        gameState = game.guessChar(gameState, e.target.textContent)
        if (utils.playerGuessHiddenWord(gameState)) {
            gameState = game.nextGame(game.discoveredWord(gameState))
        }
        if (!utils.playerHasLifes(gameState)) {
            gameState = {}
            clearDisplay()
        } else {
            updateStats(gameState)
        }
    }

    function nextGame() {
        gameState = game.nextGame(gameState)
    }

    function revealLetter() {
        gameState = game.revealLetter(gameState)
    }

    function newGame() {
        gameState = game.newGame()
    }

    function getGameState() {
        return gameState
    }

    return {
        handleGuess,
        nextGame,
        revealLetter,
        newGame,
        getGameState,
        startTimer
    }

}