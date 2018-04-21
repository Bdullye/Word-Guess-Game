
  //make background LOTR picture.


  //"press any key to get started!"
  window.onload = function() {

      var wordBank = ["frodo", "gandalf", "gimli", "troll", "hobbit"];
      var status = false;
        var wordGuess = "";
        var wins = 0;
        var losses = 0;
        var userGuess = '';
        var progress="";
        var progressLetter = "";

        
      document.onkeypress = function(event) {

        // Determines which key was pressed.
        userGuess = event.key;
        if (!status){
            status = true;
            progress="";
            wordGuess = wordBank[Math.floor(Math.random()*[wordBank.length])]; //use math.random to get a random option
            for (var i = 0; i < wordGuess.length; i++){
                progress += "_ ";
            }
            
        } else {
            letterCheck(userGuess, wordGuess, progress);
        }

        var html = 
        "<p>You chose: " + userGuess + "</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" ;

       document.querySelector(".guessMe").innerHTML = html;
        // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        //   // Set the inner HTML contents of the #game div to our html string
        //   document.querySelector("#game").innerHTML = html;
        };
  };

  function letterCheck(userGuess, wordGuess, progress) {
    progressLetter = progress.split();
    if (wordGuess.includes(userGuess)) {
        // letter was found in word
        alert("word contains letter");
        var pos = wordGuess.indexOf(userGuess);
        
        progress[pos] = userGuess;
        while (pos !== -1) {
          progress[pos] = userGuess;
          pos = wordGuess.indexOf(userGuess, pos + 1);
          progress = progress.join;
        }
        document.querySelector(".guessMe").innerHTML = progress;        
    } else {
        // letter not in word
        alert('No dice!');
    }
    //progress = progress.join("");
  };
  //As the user guesses the correct letters, reveal them: m a d o _ _ a.
  //code # of guesses remaining for the user.
  //show letters already guessed.
  //After the user wins/loses the game should automatically choose another word and make the user play it.
  