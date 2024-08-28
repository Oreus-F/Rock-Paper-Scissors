// function to got a random number

function getRandomInt(max) {
    return Math.floor(Math.random()* max)
}


// function to interprete the number given with getRandomInt(max) as a string
// could use switch statement too

function getComputerChoice() {
    let rpsComputerNumb = getRandomInt(3);
    
    let rpsComputerResult = "";

    if (rpsComputerNumb === 0) {
        rpsComputerResult = "rock";
    } else if (rpsComputerNumb === 1) {
        rpsComputerResult = "paper";
    } else {
        rpsComputerResult = "scissors";
    }

    return rpsComputerResult
}


// function to get HumanChoice // while loop that quit only with the right answer
// it's case sensitive with the .toLowerCase() method
// miss an alert to warn the player if it's an invalid input

function getHumanChoice() {
    let rpsHumanChoice = "";

    while (!(rpsHumanChoice === "rock" || rpsHumanChoice === "paper" || rpsHumanChoice === "scissors")) {
        rpsHumanPrompt = prompt("Rock, Paper, Scissors ?", "");
        rpsHumanChoice = rpsHumanPrompt.toLowerCase();
    }

    return rpsHumanChoice;
}


// score set up at 0

let humanScore = 0;
let computerScore = 0;


// function for one round

function playRound(choiceHuman, choiceComputer) {

    
    // first condition : Draw. Alert the player and launch the PlayRound again without 
    // skipping a round because the function is called in it's own scope

    if (choiceHuman === choiceComputer) {
        alert("Draw ! Try again !");
        console.log("Draw ! Try again !");
        playRound(getHumanChoice(), getComputerChoice());
    } else if (choiceHuman === "rock") {
        if (choiceComputer === "paper") {
            console.log("You loose ! Paper beat Rock !");
            ++computerScore;
        } else {
            console.log("You win ! Rock beat Scissors !");
            ++humanScore;
        }
        } else if (choiceHuman === "paper") {
            if (choiceComputer === "rock") {
                console.log("You win ! Paper beat Rock !");
                ++humanScore;
            } else {
                console.log("You loose ! Scissors beat Paper !");
                ++computerScore;
            }
        } else {
            if (choiceComputer === "rock") {
                console.log("You loose ! Rock beat Scissors !");
                ++computerScore;
            } else {
                console.log("You win ! Scissors beat Paper !")
                ++humanScore;
            }
        }
 // because the draw is the first condition. We only need 2 conditions for each human choice
 // also the Else statement inside the else if, need no condition cause it can only be the possible choice
}


// function for an all game
// while loop used with a variable "round"
// round start at one in order to display it 


function playFiveRound() {
    let round = 1;

    while (round !== 6) {
        console.log(`Round : ${round} !
            Actual score :
        Player 1 : ${humanScore}
        Computer : ${computerScore}
         `)
        playRound(getHumanChoice(), getComputerChoice());
        ++round;
    }

    if (humanScore > computerScore) {
        console.log(`You've won the game. Congrat !`)
    } else {
        console.log("you've lost the game. Too bad !")
    }
}

playFiveRound()
