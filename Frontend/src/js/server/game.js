import { INITIAL_LIFES, INITIAL_TIME, WORDS } from "./constants.js"
import { addGuessToAttempts, decrementLife, getValidLetter, incrementScore, incrementTime, replaceGuesses } from "./gameUtils.js"

function guessChar(currentGame, guess) {

    let { word } = currentGame.wordInfo;
    let { hiddenWord, attemptsLetters, lifes } = currentGame;

    if (!attemptsLetters.includes(guess)) {
        attemptsLetters = addGuessToAttempts(attemptsLetters, guess)
        if (word.includes(guess)) {
            hiddenWord = replaceGuesses(word, hiddenWord, guess)
        } else {
            lifes = decrementLife(lifes)
        }
    }

    return {
        ...currentGame,
        hiddenWord,
        attemptsLetters,
        lifes,
    }

}

function revealChar(currentGame) {

    let { word } = currentGame.wordInfo
    let { attemptsLetters, hiddenWord } = currentGame

    let letter = getValidLetter(word, attemptsLetters)    
    attemptsLetters = addGuessToAttempts(attemptsLetters, letter)
    hiddenWord = replaceGuesses(word, hiddenWord, letter)

    return {
        ...currentGame,
        attemptsLetters,
        hiddenWord
    }

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

function nextGame(currentGame) {

    const { timeLeft, score } = currentGame
    
    return {
        ...newGame(),
        timeLeft,
        score
    }

}

function discoveredWord(currentGame) {

    let { timeLeft, score } = currentGame
    timeLeft = incrementTime(timeLeft)
    score = incrementScore(score)
    
    return {
        ...currentGame,
        timeLeft,
        score
    }

}

export default { 
    guessChar, 
    revealChar, 
    nextGame,
    discoveredWord,
    newGame
}