import { INITIAL_LIFES, INITIAL_TIME, WORDS, INCREMENT_SCORE, INCREMENT_TIME, ALPHABET } from "./constants.js"

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

function newGame() {
    let initialWordInfo = WORDS[Math.floor(Math.random()*WORDS.length)]
    return {
        lifes: INITIAL_LIFES,
        wordInfo: initialWordInfo,
        attemptsLetters: "",
        hiddenWord: initialWordInfo["word"].split("").map(e => "_"),
        score: 0,
        timeLeft: INITIAL_TIME
    }
}

// function playerLose(currentGame) {
//     return currentGame.lifes === 0 || currentGame.timeLeft === 0
// }

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

export { 
    addGuessToAttempts, 
    decrementLife, 
    replaceGuesses, 
    getValidLetter,
    newGame,
    incrementScore,
    incrementTime,
    decrementTime,
    buildButtons
}