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

function getHumanPrompt() {
    let rpsHumanPrompt = prompt("Rock, Paper, Scissors ?", "");
    return rpsHumanPrompt.toLowerCase();
}


console.log(getHumanPrompt()); 