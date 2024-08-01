import { discoveredWord, guessChar, newGame, nextGame, revealChar } from "./app/game.js"
import express from "express";
import cors from "cors"

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.get('/hangman/char/guess', (req, res) => {
    const { currentGame, guess } = req.body
    const updatedGame = guessChar(currentGame, guess)
    res.send(updatedGame).status(201)
})

app.get('/hangman/char/reveal', (req, res) => {
    const { currentGame } = req.body
    const updatedGame = revealChar(currentGame)
    res.send(updatedGame).status(201)
})

app.get('/hangman/word/new', (req, res) => {
    const updatedGame = newGame()
    res.send(updatedGame).status(201)
})

app.get('/hangman/word/next', (req, res) => {
    const { currentGame } = req.body
    const updatedGame = nextGame(currentGame)
    res.send(updatedGame).status(201)
})

app.get('/hangman/word/discovered', (req, res) => {
    const { currentGame } = req.body
    const updatedGame = discoveredWord(currentGame)
    res.send(updatedGame).status(201)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});