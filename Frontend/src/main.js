const INITIAL_LIFES = 7
const WORDS = [
    { word: "apple", clue: "fruit", difficulty: "easy" },
    { word: "intel", clue: "company", difficulty: "easy" },
    { word: "pizza", clue: "food", difficulty: "easy" },
    { word: "elephant", clue: "animal", difficulty: "medium" },
    { word: "parliament", clue: "government", difficulty: "medium" },
    { word: "microscope", clue: "scientific instrument", difficulty: "hard" },
    { word: "archaeology", clue: "study of human history", difficulty: "hard" },
    { word: "galaxy", clue: "star system", difficulty: "medium" },
    { word: "chemistry", clue: "branch of science", difficulty: "hard" },
    { word: "basketball", clue: "sport", difficulty: "easy" },
    { word: "concentration", clue: "mental focus", difficulty: "medium" },
    { word: "metamorphosis", clue: "biological process", difficulty: "hard" },
    { word: "hippopotamus", clue: "large mammal", difficulty: "hard" },
    { word: "python", clue: "programming language", difficulty: "easy" },
    { word: "quantum", clue: "branch of physics", difficulty: "hard" },
    { word: "saxophone", clue: "musical instrument", difficulty: "medium" },
    { word: "diplomat", clue: "government official", difficulty: "medium" },
    { word: "zoology", clue: "study of animals", difficulty: "medium" },
    { word: "mountain", clue: "large landform", difficulty: "easy" },
    { word: "volcano", clue: "eruption", difficulty: "medium" },
    { word: "philosophy", clue: "study of fundamental questions", difficulty: "hard" },
    { word: "democracy", clue: "form of government", difficulty: "medium" },
    { word: "bicycle", clue: "two-wheeled vehicle", difficulty: "easy" },
    { word: "chocolate", clue: "sweet treat", difficulty: "easy" },
    { word: "telescope", clue: "astronomical tool", difficulty: "medium" },
    { word: "kangaroo", clue: "Australian marsupial", difficulty: "medium" },
    { word: "encyclopedia", clue: "reference book", difficulty: "hard" },
    { word: "ecosystem", clue: "biological community", difficulty: "medium" },
    { word: "algorithm", clue: "set of rules", difficulty: "hard" },
    { word: "giraffe", clue: "tall animal", difficulty: "easy" },
    { word: "university", clue: "institution of higher learning", difficulty: "medium" },
    { word: "microbiology", clue: "study of microorganisms", difficulty: "hard" },
    { word: "architecture", clue: "building design", difficulty: "medium" },
    { word: "hydrogen", clue: "chemical element", difficulty: "medium" },
    { word: "literature", clue: "written works", difficulty: "medium" },
    { word: "biotechnology", clue: "technological application", difficulty: "hard" },
    { word: "symphony", clue: "musical composition", difficulty: "medium" },
    { word: "entrepreneur", clue: "business founder", difficulty: "hard" },
    { word: "astronomy", clue: "study of stars", difficulty: "medium" },
    { word: "robotics", clue: "technology of robots", difficulty: "medium" },
    { word: "waterfall", clue: "flowing water", difficulty: "easy" },
    { word: "mathematics", clue: "study of numbers", difficulty: "medium" },
    { word: "plagiarism", clue: "academic dishonesty", difficulty: "hard" },
    { word: "revolution", clue: "political upheaval", difficulty: "medium" },
    { word: "paleontology", clue: "study of fossils", difficulty: "hard" },
    { word: "psychology", clue: "study of mind", difficulty: "medium" },
    { word: "thunderstorm", clue: "weather event", difficulty: "medium" },
    { word: "bacteriology", clue: "study of bacteria", difficulty: "hard" },
    { word: "cardiology", clue: "study of the heart", difficulty: "medium" }
]
const ALPHABET = "qwertyuiopasdfghjklzxcvbnm"
const INCREMENT_SCORE = 100
const INITIAL_TIME = 31
const INCREMENT_TIME = 15

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

function verifyGame(currentGame) {

    if (currentGame.lifes === 0) {
        showInfo(`Game Over!, total score: ${currentGame.score}`)
        currentGame = {}
        updateStart(currentGame)
        clearDisplay()
    } else if (currentGame.wordInfo["word"] === currentGame.hiddenWord.join("").toLowerCase()) {
        currentGame.score += INCREMENT_SCORE
        currentGame.timeLeft += INCREMENT_TIME
        nextGame(currentGame)
    } else {
        updateStats(currentGame)
        updateLetters(currentGame)
    }

}

function guessLetter(currentGame, guess) {

    if (!currentGame.attemptsLetters.includes(guess) && currentGame.wordInfo["word"].includes(guess)) {
        for (let i in currentGame.wordInfo["word"]) {
            if (currentGame.wordInfo["word"][i] === guess) currentGame.hiddenWord[i] = guess
        }
        currentGame.attemptsLetters += guess
        showInfo("Good one!")
    } else if (!currentGame.attemptsLetters.includes(guess) && !currentGame.wordInfo["word"].includes(guess)) {
        currentGame.lifes -= 1
        currentGame.attemptsLetters += guess
        showInfo("Wrong!")
    } else {
        showInfo("That letter was chosen already!")
    }
    verifyGame(currentGame)

}

function updateLetters(currentGame) {

    const lettersDiv = document.getElementById("letters")
    lettersDiv.innerHTML = ""
    for (const letter of ALPHABET) {
        const letterButton = document.createElement("button")
        letterButton.innerHTML = letter
        if (currentGame.attemptsLetters.includes(letter)) {
            letterButton.disabled = true
        }
        letterButton.onclick = (e) => guessLetter(currentGame, e.currentTarget.textContent)
        lettersDiv.appendChild(letterButton)
    }

}

function revealLetter(currentGame) {

    const word =  currentGame.wordInfo.word
    let selectedLetter = word[Math.floor(Math.random()*word.length)]
    while(currentGame.attemptsLetters.includes(selectedLetter)) {
        selectedLetter = word[Math.floor(Math.random()*word.length)]
    }
    for (let i in currentGame.wordInfo["word"]) {
        if (currentGame.wordInfo["word"][i] === selectedLetter) currentGame.hiddenWord[i] = selectedLetter
    }
    currentGame.attemptsLetters += selectedLetter    
    verifyGame(currentGame)

}

function nextGame(currentGame) {
    const lastScore = currentGame.score || 0
    const lastTime = currentGame.timeLeft || INITIAL_TIME
    newWord(currentGame)
    currentGame.score = lastScore
    currentGame.timeLeft = lastTime
    updateStats(currentGame)
    updateLetters(currentGame)
}

function newWord(currentGame) {
    let initialWordInfo = WORDS[Math.floor(Math.random()*WORDS.length)]
    currentGame.lifes = INITIAL_LIFES,
    currentGame.wordInfo = initialWordInfo,
    currentGame.attemptsLetters = "",
    currentGame.hiddenWord = initialWordInfo["word"].split("").map(e => "_")
    currentGame.score = 0
    currentGame.time = INITIAL_TIME
}

function updateStart(currentGame) {
    const startButton = document.getElementById("start")
    if (Object.keys(currentGame).length === 0) {
        startButton.textContent = "start"
    } else {
        startButton.textContent = "finish"
    }
}

// show the remain seconds in real time
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

function main() {

    let currentGame = {}
    const startButton = document.getElementById("start")
    const revealButton = document.getElementById("reveal")
    const nextButton = document.getElementById("next")
    let time = null;

    startButton.onclick = () => {
        if (Object.keys(currentGame).length === 0) {
            showInfo("New game started!")
            nextGame(currentGame)
            updateTime(currentGame)
            time = setInterval(() => {
                updateTime(currentGame, time)
            }, 1000)
        } else {
            currentGame = {}
            clearDisplay()
            clearInterval(time)
        }
        updateStart(currentGame)
    }

    revealButton.onclick = () => revealLetter(currentGame)
    
    // score persintence (!= restart)
    nextButton.onclick = () => nextGame(currentGame)

}

main()

// let lifes = INITIAL_LIFES
// let wordInfo = WORDS[Math.floor(Math.random()*WORDS.length)]
// let attemptsLetters = ""
// let hiddenWord = wordInfo["word"].split("").map(e => "_")

// while (lifes > 0 && hiddenWord.join() !== wordInfo["word"]) {
//     const message = `lifes: ${lifes}\nclue:${wordInfo.clue}\nword: ${hiddenWord}`
//     alert(message)
//     const alphaRegex = /[a-z]/g
//     let guess = String(prompt("type a letter: ")).toLowerCase()
//     while (guess.length !== 1 || !guess.includes(alphaRegex)) {
//         alert("Type a valid letter!")
//         guess = String(prompt("type a letter: ")).toLowerCase()
//     }
//     if (!attemptsLetters.includes(guess) && wordInfo["word"].includes(guess)) {
//         for (let i in wordInfo["word"]) {
//             if (wordInfo["word"][i] == guess) hiddenWord[i] = guess
//         }
//         attemptsLetters += guess
//     } else if (!attemptsLetters.includes(guess) && !wordInfo["word"].includes(guess)) {
//         lifes -= 1
//         attemptsLetters += guess
//         alert("Wrong!")
//     } else {
//         alert("That letter was chosen already!")
//     }
// }
// alert(`The hidden word was ${wordInfo["word"]}`)