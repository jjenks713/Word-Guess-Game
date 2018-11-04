window.onload = function () {


    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
        "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    //pick a random word
    var monsters = ["Dracula", "Frankenstein", "Wolfman", "Mummy", "Godzilla"];



    // keep track of score
    var wins = 0;





    //keep track of guesses left
    var guessLeft = 10;



    //display guessed letters


    var wins = document.getElementById("wins-text").innerHTML = "0";
    var wordLines = document.getElementById("word-lines").innerHTML = "_ _ _ _ _ _ _";
    var guessLeft = document.getElementById("num-guesses").innerHTML = "10";
    var lettersGuessed = document.getElementById("letters-guessed");



    // function grabsWord(word) {


    document.onkeyup = function (event) {

        var userGuess = event.key;

        var wordChoise = monsters[Math.floor(math.random() * monsters.length)];

        while (monsters[0]) {

            if ((userGuess === "d") || (userGuess === "r") || (userGuess === "a") || (userGuess === "c")
                || (userGuess === "u") || (userGuess === "l")) {
                wordLines.textContent = userGuess;
            }
            else if ((userGuess === "d") && (userGuess === "r") && (userGuess === "a") && (userGuess === "c")
                && (userGuess === "u") && (userGuess === "l")) {
                wins++;
            } else {
                guessLeft--;
            }
        }
        while (monsters[1]) {

            if ((userGuess === "d") || (userGuess === "r") || (userGuess === "a") || (userGuess === "c")
                || (userGuess === "u") || (userGuess === "l")) {
                wordLines.textContent = userGuess;
            }
            else if ((userGuess === "d") && (userGuess === "r") && (userGuess === "a") && (userGuess === "c")
                && (userGuess === "u") && (userGuess === "l")) {
                wins++;
            } else {
                guessLeft--;
            }
        }
        while (monsters[2]) {

            if ((userGuess === "d") || (userGuess === "r") || (userGuess === "a") || (userGuess === "c")
                || (userGuess === "u") || (userGuess === "l")) {
                wordLines.textContent = userGuess;
            }
            else if ((userGuess === "d") && (userGuess === "r") && (userGuess === "a") && (userGuess === "c")
                && (userGuess === "u") && (userGuess === "l")) {
                wins++;
            } else {
                guessLeft--;
            }
        }
        while (monsters[3]) {

            if ((userGuess === "d") || (userGuess === "r") || (userGuess === "a") || (userGuess === "c")
                || (userGuess === "u") || (userGuess === "l")) {
                wordLines.textContent = userGuess;
            }
            else if ((userGuess === "d") && (userGuess === "r") && (userGuess === "a") && (userGuess === "c")
                && (userGuess === "u") && (userGuess === "l")) {
                wins++;
            } else {
                guessLeft--;
            }
        }






        // display changing content
        wins.textContent = "Your wins: " + wins;
        wordLines.textContent = userGuess + wordLines + wordChoise;
        guessLeft.textContent = guessLeft;
        lettersGuessed.textContent = lettersGuessed;
    };
}

                // grabsWord()

