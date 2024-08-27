function getRandomInt(max) {
    return Math.floor(Math.random()* max)
}

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

function getHumanChoice() {
    let rpsHumanChoice = "";

    while (!(rpsHumanChoice === "rock" || rpsHumanChoice === "paper" || rpsHumanChoice === "scissors")) {
        rpsHumanPrompt = prompt("Rock, Paper, Scissors ?", "");
        rpsHumanChoice = rpsHumanPrompt.toLowerCase();
    }

    return rpsHumanChoice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(choiceHuman, choiceComputer) {

    
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
 
}


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
