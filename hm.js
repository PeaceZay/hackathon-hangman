const fruits = [
    "Oranges",
    "Apples",
    "Grapes",
    "Honeydew",
    "Grapefruit",
    "Watermelon",
    "Coconut"
];
const hangman = (userLetter) => {
if (findMe(letter)){
    
}
}
let userLetter = "";
// create places to hold answers, mistakes, guesses, and a limit to how many mistakes.
let answer = '';
let mistakes = 0;
let maxMistakes = 7;
let guesses = [];
// create a function that picks a random word from the fruits array
randomFruit = () => {
    answer = fruits[Math.floor(Math.random() * fruits.length)];
    let hiddenAnswer = '';
    for (let i = 0; i < answer.length; i++) {
        hiddenAnswer.push("_")
        
    }
    // how long is the word 'answer' and then create the string of underscores 
    // the same length.
}

randomFruit()
// create a function that loops though the answer fruit in the array
// and returns if the letter chose is false or true.
const findMe = (letter) => {
    if (answer.includes(letter)) {
        return true
    } else {
        return false
    }

}

