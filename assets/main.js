

// =======================================================
// GLOBAL VARIABLES
// =======================================================

    //	Track player's correct guesses
    var winCounter = 0;

    //	Track player's incorrect guesses
    var lossCounter = 0;

    //	this stores the letters selected by player
    var playerGuess = [];

    //	tracks the number of chances by player
    var chance = 10;

    //  tracks if player guess matches previous player guess
    var guessMatch = false;

    //  tracks if player is using a-z letters only
    var keyCheck = false;


//-------------------------------------------------------
//----------------  **Get Variables**  ------------------
//-------------------------------------------------------

    // variable to grab the on screen display for number of guessed left (count-down)
    var remain = document.getElementById("remain");
    console.log(remain);

    // variable to grab the on screen display for player losses
    var losses = document.getElementById("losses");
    console.log(losses)

    // variable to grab the on screen display for player winss
    var wins = document.getElementById("wins");

    // variable to grab the on screen display for all letters selected
    var pastGuess = document.getElementById("pastGuess");
    console.log(pastGuess)

    // variable to grabon screen display for player game outcome: "winner" or "Game Over"
    var currentGuess = document.getElementById("currentGuess");

    // variable to grab the on screen display for player game outcome: "winner" or "Game Over"
    var gameOutCome = document.getElementById("gameOutCome")

    // variable to grab the on screen reset button
    var gameReset = document.getElementById("gameReset");

console.log(gameReset);
    // Psychic's array of letters to choose from
    // Computer randomly selects a letter from  A - Z for player to guess

    var alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


    //  Create a random number from 0-25 (for the location of letter in the array psychicLtr)

    var psychSelector = Math.floor(Math.random() * 26);
    var psychicRandomLetter = alpha[psychSelector]
    console.log("psychic number selection " + psychSelector);
    console.log("psychic letter selection " + psychicRandomLetter);



// =======================================================
// GLOBAL FUNCTIONS
// =======================================================


  //  gameReset.addEventListener("click", function(event)) {}


// event function that listens for player's letter choice and writes number of chances player has made and evaluates true or flase on player guess
    document.addEventListener("keyup", function(event) {
        var keyStroke = event.key;
        guessCheck(keyStroke, playerGuess);

        while ((guessMatch = true) && (keyCheck = false)) {
    console.log("guessMatch " + guessMatch);
    console.log("keyCheck " + keyCheck);

            chance--;
            remain.innerHTML = chance;
            currentGuess.innerHTML = keyStroke;

            if (chance === 0) {
                userLost();
            }

            if (chance !== 0) {
               guessTracker(keyStroke);
            }

            if (event.key === psychicRandomLetter) {
                gameOutCome.innerHTML = "WINNER!"
            }
            break;
        }


// function userLost counts and records total number of valid turns player makes max=10 turns

        function userLost(){
            chance = 10;
            remain.innerHTML = chance;
            lossCounter++;
            losses.innerHTML = lossCounter;
            gameOutCome.innerHTML = "GAME OVER!"
        }
    });

// function guessTracker holds and prints to screen all valid player guesses

        function guessTracker(keyStroke) {
            playerGuess.push(keyStroke);
            var keyTrack = playerGuess;
            keyTrack = keyTrack.toString()
            keyTrack = keyTrack.replace(/,/gi, ", ");
            pastGuess.innerHTML = keyTrack;
        }


   // function guessCheck validates player guess for alpha characters a-z and no duplicate guesses

        function guessCheck(key, Guess) {

console.log("alpha " + alpha)
        for (var i = 0; i < 26; i++) {
console.log("i " + i + "alpha " + alpha[i] + " event.key " + key);
            if (key === alpha[i]) {
                guessMatch = true;
console.log("WTF")
    console.log("guessMatch1 " + guessMatch);
    console.log("keyCheck1 " + keyCheck);
                return guessMatch;
             } 

             if (key === otherKeys)  {
                alert("All signs point to N-O-P-E ! Just select letters a though z");

            }
        }

        for (var i = 0; i < Guess.length; i++) {
            if (key === Guess[i]) {
                keyCheck = true;
                return keyCheck;
console.log("WTF2")
//             }   else  {
//                 alert("Nope, chose that already");
// console.log("running Loop player= inside if " + Guess[i]);
//                 }
            }
        }

    }


        //      if (playerGuess === keyStroke) {
        //      playerNow === true
        //      letter duplicate is t/f


        //      loop through playerGuess array to compair keystroke for match 
        //      match = true   no run
 /*               for (var i = 0; i <= Guess.length; i++) {
                    if (key === Guess[i]) {
                        var keyCheck = true;
                        alert("Nope, chose that already");
                    }
                
        //      loop through psychicLTR array compair to keyStroke for match a-z
        //      match = false no run
                for (var b = 0; b <= psychicLtr.length; b++ ) {
                    if (Guess[i] === psychicLtr[b])
                        guessMatch = true
                        alert("All signs point to N-O-P-E ! Just select a letter a though z");
                    }

               //     if (guessMatch = false && keyCheck = false) {}
                        //gameInit() // run program
                 
                }
            }
        //      if conditions to run: 
        //      run if a-z match = true and playerGuess match false run game 
                

        //     //alert "you have selected this key already!" --tbd

        //     gameOutCome.innerHTML = "Letter previously selected"
              

  


   // chance--;
   //      remain.innerHTML = chance;
   //              console.log("chances remaining: " + chance);
   //      currentGuess.innerHTML = keyStroke;
   //              console.log("players current key pressed " + keyStroke) // var keyStroke = (event.key); 
  




// game reset
/* function initNewGame(){
    // setup game vars and cards
}

function endGame(){
    // clean game vars and remove cards
}

function newOrReset(){
    endGame();
    initNewGame();
}   

*/




        //     guessedLetter = document.createElement('div');
        //     guessedLetter.setAttribute('class', 'guessedLtr');
