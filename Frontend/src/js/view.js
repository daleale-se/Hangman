import utils from "./utils.js"

function updateStats(currentGame) {

    const statsDiv = document.getElementById("stats")
    statsDiv.innerHTML = ""
    const lifesP = document.createElement("p")
    lifesP.textContent = currentGame.lifes
    const clueP = document.createElement("p")
    clueP.textContent = currentGame.wordInfo.clue
    const hiddenWordP = document.createElement("p")
    hiddenWordP.textContent = currentGame.hiddenWord.join(" ").toUpperCase()
    const scoreP = document.createElement("p")
    scoreP.textContent = currentGame.score
    statsDiv.appendChild(scoreP)
    statsDiv.appendChild(lifesP)
    statsDiv.appendChild(clueP)
    statsDiv.appendChild(hiddenWordP)

}

function showInfo(message) {
    
    const infoDiv = document.getElementById("info")
    infoDiv.textContent = ""
    const messageP = document.createElement("p")
    messageP.textContent = message
    infoDiv.appendChild(messageP)
    setTimeout(() => {
        messageP.innerHTML = "Click a letter!"
    }, 2000)

}

function clearDisplay() {
    
    const statsDiv = document.getElementById("stats")
    statsDiv.innerHTML = ""
    const lettersDiv = document.getElementById("letters")
    lettersDiv.innerHTML = ""
    setTimeout(() => {
        const infoDiv = document.getElementById("info")
        infoDiv.innerHTML = ""
    }, 2000)

}

function createCharacters(currentGame) {

    const lettersButtons = utils.buildButtons()
    const letterDiv = document.getElementById("letters")
    for (const button of lettersButtons) {
        button.onclick = currentGame.handleGuess
        letterDiv.appendChild(button)
    }
    
}

function updateStart(currentGame) {

    const startButton = document.getElementById("start")
    if (Object.keys(currentGame).length === 0) {
        startButton.textContent = "start"
    } else {
        startButton.textContent = "finish"
    }
    
}

function updateTime(gameState, time) {

    const timeDiv = document.getElementById("time")
    timeDiv.innerHTML = ""
    const { timeLeft } = gameState
    if (timeLeft > 0) {
        const timeLeftP = document.createElement("p")
        timeLeftP.textContent = timeLeft
        timeDiv.appendChild(timeLeftP)
    } else {
        clearInterval(time)
    }

}

export { updateStats, showInfo, clearDisplay, updateStart, updateTime, createCharacters }