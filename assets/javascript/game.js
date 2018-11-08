//pick a random word
var monsterWords = ["Dracula", "Frankenstein", "Wolfman", "Mummy", "Godzilla"];
var lettersInWord = [];
var numberOfBlanks = 0;
var selectedWord = "";

// keep track of score
var wins = 0;

//keep track of guesses left
var guessLeft = 10;

// grab id's from HTML

var winsText = document.getElementById("wins-text");
var wordLines = document.getElementById("word-lines");
var numGuesses = document.getElementById("num-guesses");
var lettersGuessed = document.getElementById("letters-guessed");


winsText.textContent = wins;
numGuesses.textContent = guessLeft;

function getRandomMonsters() {
    selectedWord = monsterWords[Math.floor(Math.random() * monsterWords.length)];
    console.log(selectedWord);
}

function calculateLettersInWord() {
    numberOfBlanks = selectedWord.length;
    console.log(numberOfBlanks);
}
function getLettersInWOrd() {
    lettersInWord = selectedWord.split('');
    for (var i = 0; i < selectedWord.split('').length; i++) {
        i = "_";
        wordLines.textContent = selectedWord.split('')[i];
        }

    console.log(lettersInWord);
}
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase(); 
        
        if (userGuess === lettersInWord) {
            wordLines.textContent = selectedWord.split('');
            
        } else {
            guessLeft--;
            lettersGuessed.textContent = userGuess;
        }   
        
        // alert("youclicked");
        
    


winsText.textContent = wins;
numGuesses.textContent = guessLeft;
};
function leftOver() {
    if (guessLeft <= 1) {
        numGuesses.textContent = "Game Over!";  
    } 
    
};

leftOver()
getRandomMonsters();
calculateLettersInWord();
getLettersInWOrd();



































