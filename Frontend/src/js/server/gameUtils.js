import { INCREMENT_SCORE, INCREMENT_TIME, DECREMENT_LIFE } from "./constants.js"

function addGuessToAttempts(attemptsLetters, letter) {
    return attemptsLetters + letter
}

function decrementLife(currentLifes) {
    return currentLifes - DECREMENT_LIFE
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

export {
    addGuessToAttempts,
    decrementLife,
    replaceGuesses,
    getValidLetter,
    incrementScore,
    incrementTime
}