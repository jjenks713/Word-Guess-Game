//pick a random word
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
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
};
getRandomMonsters();
function calculateLettersInWord() {
    numberOfBlanks = selectedWord.length;
    console.log(numberOfBlanks);
};
calculateLettersInWord();
function getLettersInWOrd() {
    lettersInWord = selectedWord.split('');
    for (var i = 0; i < lettersInWord.length; i++) {

        var textnode = document.createTextNode(" _ ");
        wordLines.appendChild(textnode);
        }
           
    console.log(lettersInWord);
};
getLettersInWOrd();

function seeIfLettersAreInWords() {
    for (var i = 0; i < lettersInWord.length; i++) {
        i = selectedWord.split('');
        var textnode1 = document.createTextNode(" _ ");
        wordLines.appendChild(textnode1);
        var textnode = document.getElementById("word-lines").innerHTML = i;
        wordLines.textContent = textnode1 + i;
    }
}
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase(); 
        seeIfLettersAreInWords()
     
        if (userGuess === lettersInWord) {
            wordLines.textContent = lettersInWord;
        } else {
            guessLeft--;
        }  
        
        if (guessLeft === 0) {
            numGuesses.textContent = "Game Over!";  
        } 
        if (userGuess === selectedWord.lenth) {
            wins++;
        }
        var textnode = document.createTextNode(" " + userGuess + " ");
        lettersGuessed.appendChild(textnode);
         
        console.log(userGuess)
           
        
        // alert("youclicked");
        
    


winsText.textContent = wins;

};
// function leftOver() {

    
// };

// leftOver()








































