var game = {
    wins: 0,
    wordUarray: [],
    newWord: [],
    guessesLeft: 10,
    guessesSoFar: [],    
    letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    words: ["smelly", "monica", "joey", "rachel"],
    questions: ["What kind of cat does Phoebe sing about?", 
                 "What friend is a neat freek?",
                 "Who of the group is an actor?",
                 "In the first episode who is wearing a wedding dress?"],
                 
    newWordandQuestion: function() {       
        var ranNum = [Math.floor(Math.random() * game.words.length)];
        game.newWord = game.words[ranNum];       

                for (i = 0; i < game.newWord.length; i++) {
        game.wordUarray[i] = "       _       ";
        document.getElementById("word").innerHTML = game.wordUarray.join(",");  
        };7

        game.guessesLeft = 10;
        game.guessesSoFar = [];
        document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
        document.getElementById("guesses").innerHTML = game.guessesSoFar;
        var newQuestion = game.questions[ranNum];
        document.getElementById("question").innerHTML = newQuestion;
},
};
game.newWordandQuestion();
document.getElementById("win").innerHTML = game.wins;



document.onkeydown = function(event) {
       var userLetter = String.fromCharCode(event.which).toLowerCase();
   
       
            if (game.letters.includes(userLetter) === false) {
                alert("Enter a letter.");
            } else {
                game.guessesLeft--;
                game.guessesSoFar.push(userLetter);
                document.getElementById("guesses").innerHTML = game.guessesSoFar.join(",");
                document.getElementById("guessesLeft").innerHTML = game.guessesLeft;
            };
               for (j = 0; j < game.newWord.length; j++) {
                   if (game.newWord[j] === userLetter) {
                        game.wordUarray[j] = userLetter;
                        document.getElementById("word").innerHTML = game.wordUarray;                
                    } else if (game.wordUarray.join("") === game.newWord) {                                                
                        game.wins++;
                        document.getElementById("win").innerHTML = game.wins;
                        game.newWordandQuestion();
                    } else if (game.guessesLeft === 0) {
                        alert("Aw, you've ran out of guesses!");
                        game.newWordandQuestion();
                    };      
        };                        
    };
        