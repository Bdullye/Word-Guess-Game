
  //make background LOTR picture.


  //"press any key to get started!"
  window.onload = function() {

      var wordBank = ["froto", "gandalf", "gimli", "troll", "hobbit"];
      var status = false;
        var wordGuess = "";
        var wins = 0;
        var losses = 0;
        var userGuess = '';
        var progress="";

      document.onkeypress = function(event) {

        // Determines which key was pressed.
        userGuess = event.key;
        if (!status){
            status = true;
            progress="";
            wordGuess = wordBank[0]; //use math.random to get a random option
            for (var i = 0; i < wordGuess.length; i++){
                progress += "_ ";
            }
            document.querySelector(".guessMe").innerHTML = progress;
        } else {
            letterCheck(userGuess, wordGuess, progress);
        }
  
          // Creating a variable to hold our new HTML. Our HTML now keeps track of the user and computer guesses, and wins/losses/ties.
        //   var html =
        //     "<p>You chose: " + userGuess + "</p>" +
        //     "<p>wins: " + wins + "</p>" +
        //     "<p>losses: " + losses + "</p>" ;
  
        //   // Set the inner HTML contents of the #game div to our html string
        //   document.querySelector("#game").innerHTML = html;
        };
  };

  function letterCheck(userGuess, wordGuess, progress) {
    progress = progress.split();
    if (wordGuess.includes(userGuess)) {
        // letter was found in word
        alert("word contains letter");
        var pos = wordGuess.indexOf(userGuess);
        
        progress[pos] = userGuess;
        while (pos !== -1) {
          progress[pos] = userGuess;
          pos = wordGuess.indexOf(userGuess, pos + 1);
        }
        document.querySelector(".guessMe").innerHTML = progress;        
    } else {
        // letter not in word
        alert('not found');
    }
  }
  //code to show number of wins.
  //As the user guesses the correct letters, reveal them: m a d o _ _ a.
  //code # of guesses remaining for the user.
  //show letters already guessed.
  //After the user wins/loses the game should automatically choose another word and make the user play it.
  