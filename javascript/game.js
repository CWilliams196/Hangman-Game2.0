var words = ["central perk", "monica", "joey", "rachel"];
var questions = ["What is the name of the coffee shop where they always hang out?", 
                 "What friend is a neat freek?",
                 "Who of the group is an actor?",
                 "In the first episode who is wearing a wedding dress?" ];
var letterBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var currentWord = words[Math.floor(Math.random() * words.length)];
var question = words.indexOf(currentWord);
var currentQuestion = "";
var wordArray = [];
var wordUarray = [];
var currentLetter = "";
var guessesSoFar = [];
var guessesLeft = 10;



function newWord() {
    for (i = 0; i < currentWord.length; i++) {
        currentLetter = currentWord.charAt(i);
        wordArray[i] = currentLetter;
        wordUarray[i] = "  __  ";  
        };
        currentQuestion = questions.splice(question, 1);
        document.querySelector("#word").innerHTML = wordUarray;
        document.querySelector("#question").innerHTML = currentQuestion;
        document.querySelector("#guessesLeft").innerHTML = guessesLeft;
     };

newWord();

// document.addEventListener("keypress", userGuess); 

document.onkeyup = function userGuess(event) {   
          
    //    var userLetter = (event.key.toLowerCase());
       var userLetter = String.fromCharCode(event.which).toLowerCase();
       
            if (letterBank.includes(userLetter) === false) {
                alert("Enter a letter.");
            } else if (currentWord.includes(user))
   
        //   if (letterBank.includes(userLetter) === true && currentWord.includes(userLetter) === true) {
        //     guessesSoFar.push(userLetter);
        //     document.querySelector("#guesses").innerHTML = guessesSoFar.join(" ");
        //     guessesLeft--;
        //     document.querySelector("#guessesLeft").innerHTML = guessesLeft;

        // } else if (letterBank.includes(userLetter) === true && currentWord.includes(userLetter) === false) {
        //     guessesSoFar.push(userLetter);
        //     document.querySelector("#guesses").innerHTML = guessesSoFar.join(" ");
        //     guessesLeft--;
        //     document.querySelector("#guessesLeft").innerHTML = guessesLeft;
        // } else {
        //     alert("Enter a letter.")                        
        // };
        
        for (j = 0; j < currentWord.length; j++) {
            if (currentWord[j] === userLetter) {
                wordUarray[j] = userLetter;                
            } else if (wordUarray.join("") === currentWord) {
                newWord();
            };
            // console.log(wordUarray.join(""));
            document.querySelector("#word").innerHTML = wordUarray;
        };
    };

    

//         // guessesLeft--;
    
// //      var html =
// //      "<h1>Friends Hangman!</h1>" +
// //      "<p>Wins: " +  + "</p>" +
// //      "<p>Your Guesses So Far: " + guessesSoFar.join("") + "</p>" +
// //      "<p>Your Guesses Left: " + guessesLeft + "</p>" +
// //      "<p> Current Word: " + wordUarray + "</p>";

// //    document.querySelector("#game").innerHTML = html;
















// document.onkeyup = function(event) {

//     var letter = String.fromCharCode(event.which).toLowerCase();



// };
