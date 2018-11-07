 //pick a random word
    var monsterWords = ["Dracula", "Frankenstein", "Wolfman", "Mummy", "Godzilla"];
    var lettersInWord = [];
    var numberOfBlanks = 0;
    var selectedWord = "";
    // keep track of score
    var wins = 0;
    //keep track of guesses left
    var guessLeft = 10;
    // while (numGuess = 0) {
    //     numGuesses.textContent = "Game Over!"
    // }

    function getRandomMonsters() {
        selectedWord = monsterWords[Math.floor(Math.random() = monsters.length)];
        console.log(selectedWord);
    }

    function calculateLettersInWord() {
        numbersOfBlanks = monsterWords.length;
        console.log(numbersOfBlanks);
    }
    function getLettersInWOrd() {
        lettersInWord = selectedWord.split('')
    }




    //display guessed letters


    var winsText = document.getElementById("wins-text");
    var wordLines = document.getElementById("word-lines");
    var numGuesses = document.getElementById("num-guesses");
    var lettersGuessed = document.getElementById("letters-guessed");



    // function grabsWord(word) {



    // userGuess function:
    document.onkeyup = function (event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        
            
        
            if (userGuess === monsterWords[0].charAt[1]) {
                wordLines.textContent = userGuess;
            }
            if (userGuess === "r") /*monsters[0].charAt[1])*/ {
                wordLines.textContent = userGuess;
            } 
            if (userGuess === "a") /*monsters[0].charAt[2])*/ {
                wordLines.textContent = userGuess;
            }
            if (userGuess === "c") /*monsters[0].charAt[3])*/ {
                wordLines.textContent = userGuess;
            }
            if (userGuess === "u") /*monsters[0].charAt[4])*/ {
                wordLines.textContent = userGuess;
            }
            if (userGuess === "l") /*monsters[0].charAt[5])*/ {
                wordLines.textContent = userGuess;
            }
            else if (userGuess === monsters[0]) {
                    wins++;
                
            } else {
                lettersGuessed.textContent = userGuess;
                guessLeft--;
            }



        winsText.textContent = wins;
        // wordLines.textContent = ;
        numGuesses.textContent = guessLeft;


    };




