import { addGuessToAttempts, decrementLife, replaceGuesses, getValidLetter, newGame, incrementTime } from "./utils.js"

function guessLetter(currentGame, guess) {

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

function revealLetter(currentGame) {

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

export { 
    guessLetter, 
    revealLetter, 
    nextGame,
    discoveredWord
}