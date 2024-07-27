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

// function updateLetters(currentGame) {

//     const lettersDiv = document.getElementById("letters")
//     lettersDiv.innerHTML = ""
//     for (const letter of ALPHABET) {
//         const letterButton = document.createElement("button")
//         letterButton.innerHTML = letter
//         if (currentGame.attemptsLetters.includes(letter)) {
//             letterButton.disabled = true
//         }
//         letterButton.onclick = (e) => guessLetter(currentGame, e.currentTarget.textContent)
//         lettersDiv.appendChild(letterButton)
//     }

// }

function updateStart(currentGame) {

    const startButton = document.getElementById("start")
    if (Object.keys(currentGame).length === 0) {
        startButton.textContent = "start"
    } else {
        startButton.textContent = "finish"
    }
    
}

function updateTime(currentGame, time) {

    const timeDiv = document.getElementById("time")
    timeDiv.innerHTML = ""
    currentGame.timeLeft -= 1
    const {timeLeft} = currentGame
    if (timeLeft === 0) {
        clearInterval(time)
        currentGame.lifes = 0
        verifyGame(currentGame)
    } else {
        const timeLeftP = document.createElement("p")
        timeLeftP.textContent = timeLeft
        timeDiv.appendChild(timeLeftP)
    }

}

export { updateStats, showInfo, clearDisplay, updateStart, updateTime }