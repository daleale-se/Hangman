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
        fetch('http://localhost:3000/hangman/char/guess', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currentGame: gameState,
                guess: e.target.textContent
            }),
        })
        .then(res => res.json())
        .then(data => {
            gameState = data
            // gameState = game.guessChar(gameState, e.target.textContent)
            if (playerGuessHiddenWord(gameState)) {
                fetch('http://localhost:3000/hangman/word/discovered', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        currentGame: gameState,
                    }),
                })
                .then(res => res.json())
                .then(data => {
                    gameState = data
                })
            }
            if (!playerHasLifes(gameState)) {
                gameState = {}
                clearDisplay()
            } else {
                updateStats(gameState)
            }
        })
    }

    function nextGame() {
        fetch('http://localhost:3000/hangman/word/next', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currentGame: gameState,
            }),
        })
        .then(res => res.json())
        .then(data => {
            gameState = data
        })
    }

    function revealChar() {
        fetch('http://localhost:3000/hangman/char/reveal', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currentGame: gameState,
            }),
        })
        .then(res => res.json())
        .then(data => {
            gameState = data
        })
    }

    async function newGame() {
        const res = await fetch('http://localhost:3000/hangman/word/new');
        const data = await res.json();
        gameState = data;
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