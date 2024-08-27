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

const humanScore = 0;
const computerScore = 0;


