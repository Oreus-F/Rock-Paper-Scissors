function getRandomInt(max) {
    return Math.floor(Math.random()* max)
}

function getComputerChoice() {
    let rpsComputerResult = getRandomInt(3);
    console.log(rpsComputerResult);
}

getComputerChoice()