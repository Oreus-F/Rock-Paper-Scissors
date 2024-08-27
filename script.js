function getRandomInt(max) {
    return Math.floor(Math.random()* max)
}

function getComputerChoice() {
    let rpsComputerNumb = getRandomInt(3);
    
    let rpsComputerResult = "";

    if (rpsComputerNumb === 0) {
        rpsComputerResult = "Rock";
    } else if (rpsComputerNumb === 1) {
        rpsComputerResult = "Paper";
    } else {
        rpsComputerResult = "Scissors";
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

console.log(getHumanChoice())
