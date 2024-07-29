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
const INITIAL_TIME = 31
const INCREMENT_TIME = 25
const INCREMENT_SCORE = 100
const DECREMENT_LIFE = 1
export { INITIAL_LIFES, INITIAL_TIME, WORDS, INCREMENT_SCORE, INCREMENT_TIME, DECREMENT_LIFE}