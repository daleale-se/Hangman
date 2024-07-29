import { INCREMENT_SCORE, INCREMENT_TIME, ALPHABET } from "./server/constants.js"

function addGuessToAttempts(attemptsLetters, letter) {
    return attemptsLetters + letter
}

function decrementLife(currentLifes) {
    return currentLifes - 1
}

function replaceGuesses(word, hiddenWord, guess) {
    return word.split("").map((letter, i) => letter === guess? guess : hiddenWord[i])
}

function getValidLetter(word, attemptsLetters) {
    let letter = word[Math.floor(Math.random()*word.length)]
    while(attemptsLetters.includes(letter)) {
        letter = word[Math.floor(Math.random()*word.length)]
    }
    return letter
}

function incrementScore(currentScore) {
    return currentScore + INCREMENT_SCORE
}

function incrementTime(timeLeft) {
    return timeLeft + INCREMENT_TIME
}

function decrementTime(timeLeft) {
    return timeLeft - 1
}

function buildButtons() {
    return ALPHABET.split("").map(letter => {
        let button = document.createElement("button")
        button.innerHTML = letter
        return button
    })
}

function playerHasLifes(currentGame) {
    return currentGame.lifes > 0
}

function playerGuessHiddenWord(currentGame) {
    return !currentGame.hiddenWord.includes("_")
}

function playerGuessAChar(currentGame, lastHiddenWord) {
    return currentGame.hiddenWord.join("") !== lastHiddenWord
}

export default {
    addGuessToAttempts,
    decrementLife,
    replaceGuesses,
    getValidLetter,
    incrementScore,
    incrementTime,
    decrementTime,
    buildButtons,
    playerHasLifes,
    playerGuessHiddenWord,
    playerGuessAChar
}