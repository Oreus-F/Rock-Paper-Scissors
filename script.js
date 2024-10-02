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



let humanScore = 0;
let computerScore = 0;


// function for one round

function playRound() {

    choiceHuman = this.getAttribute("id");
    choiceComputer = getComputerChoice();

    if (choiceHuman === choiceComputer) {
        text.textContent = `Draw ! Try again !
        Actual score :
        Player 1 : ${humanScore}
        Computer : ${computerScore}`;
        return; 
    } else if (choiceHuman === "rock") {
        if (choiceComputer === "paper") {
            ++computerScore;
            text.textContent = `You loose ! Paper beat Rock ! 
            Actual score :
            Player 1 : ${humanScore}
            Computer : ${computerScore}`;
        } else {
            ++humanScore;
            text.textContent = `You win ! Rock beat Scissors !
            Actual score :
            Player 1 : ${humanScore}
            Computer : ${computerScore}`;
        }
        } else if (choiceHuman === "paper") {
            if (choiceComputer === "rock") {
                ++humanScore;
                text.textContent = `You win ! Paper beat Rock !
                Actual score :
                Player 1 : ${humanScore}
                Computer : ${computerScore}`;
            } else {
                ++computerScore;
                text.textContent = `You loose ! Scissors beat Paper !
                Actual score :
                Player 1 : ${humanScore}
                Computer : ${computerScore}`;
            }
        } else {
            if (choiceComputer === "rock") {
                ++computerScore;
                text.textContent = `You loose ! Rock beat Scissors !
                Actual score :
                Player 1 : ${humanScore}
                Computer : ${computerScore}`;  
            } else {
                ++humanScore;
                text.textContent = `You win ! Scissors beat Paper !  
                Actual score :
                Player 1 : ${humanScore}
                Computer : ${computerScore}`;    
            }
        };

    if (humanScore === 5 || computerScore === 5) {
        choiceSection.remove();
        all.appendChild(tryAgainSection);    
        if (humanScore === 5) {
            text.textContent = "Congrat ! Ready for the next round ?"
        } else {
            text.textContent = "Too bad ! Take your revenge !"
        };
    };
};

const all = document.querySelector("#all")
const choiceSection = document.querySelector(".choices");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const display = document.querySelector("#display");
const text = document.querySelector("#text");
const buttons = document.querySelectorAll("button");

const tryAgainSection = document.createElement("div")
const tryAgain = document.createElement("button");
tryAgain.setAttribute("id", "tryAgain");
tryAgain.textContent = "Try Again ?";
tryAgainSection.appendChild(tryAgain);

buttons.forEach((button) => {
    button.addEventListener("click", playRound);
});

tryAgain.addEventListener("click", () => {
    tryAgainSection.remove()
    all.appendChild(choiceSection);
    humanScore = 0;
    computerScore = 0;
    text.textContent = "";
});