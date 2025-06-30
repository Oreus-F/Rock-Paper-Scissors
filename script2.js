const choices = ['rock', 'paper', 'scissors'];


const getRandomValue = function(max){
    return Math.floor(Math.random()*max)
};


const getComputerChoice = function(){
    return choices[getRandomValue(3)];
}


const playRound = function(player){
    const computer = getComputerChoice();

    return checkCondition(player, computer)
};


const checkCondition = function(player, computer){

    const control = ControlDisplay();

    if(player == computer) {
        control.isDraw(player, computer);
        result = 'draw'
        return result;
    }

    const check = {
        rock: {
            paper: false,
            scissors: true,
        },
        paper: {
            scissors: false,
            rock: true,
        },
        scissors: {
            rock: false,
            paper: true,
        },
    };

    result = check[player][computer]
    
    control.displayResult(result, player, computer);

    return result
};


const Score = function(){
    let humanScore = 0;
    let computerScore = 0;


    const getHumanScore = function(){
        return humanScore;
    };


    const getComputerScore = function(){
        return computerScore
    }


    const updateScore = function(result){
        const playerDisplay = document.querySelector("#playerScore");
        const computerDisplay = document.querySelector("#computerScore");

        if (result === 'draw'){
            return
        } else {
        result ? humanScore++ : computerScore++;

            playerDisplay.textContent = humanScore;
            computerDisplay.textContent = computerScore;
        
        }

    }

    return {updateScore, getHumanScore, getComputerScore};
};


const ControlDisplay = function(){
    const display = document.querySelector('#display');


    const displayChoices = function(player, computer){
        const p = document.createElement("p");
        p.textContent = `You choose ${player} vs ${computer} !`;
        return p
    }

    const isDraw = function(player, computer){
        display.replaceChildren();
        display.appendChild(displayChoices(player, computer))
        const p = document.createElement("p");
        p.textContent = "It's a draw. Try again !";
        display.appendChild(p);
    }   


    const displayResult = function(result, player, computer){
        result ? isWin(player, computer) : isLoose(player, computer);
    };


    const isWin = function(player, computer){
        display.replaceChildren();

        display.appendChild(displayChoices(player, computer));

        const p = document.createElement("p");
        p.textContent = `${player} beat ${computer}`;
        const p2 = document.createElement("p");
        p2.textContent = "You win !";
        
        display.appendChild(p);
        display.appendChild(p2);

    }


    const isLoose = function(player, computer){
        display.replaceChildren();

        display.appendChild(displayChoices(player, computer));

        const p = document.createElement("p");
        p.textContent = `${computer} beat ${player}`;
        const p2 = document.createElement("p");
        p2.textContent = "You loose !";
        
        display.appendChild(p);
        display.appendChild(p2);
    }


    return {isDraw, displayResult}

}


const PlayGame = function(){
    const score = Score();

    
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.id;
            const player = choices[target];

            score.updateScore(playRound(player));
            checkGame();
        });
    });
    
    
    const checkGame = function(){
        const human = score.getHumanScore();
        const computer = score.getComputerScore();

        if (human === 5 || computer === 5){
            endGame(human);
        }
    };


    const endGame = function(human){
        if (human === 5){
            console.log("Congratulation you won !");
        } else {
            console.log("Sorry you loose !");
        }
        buttons.forEach(button => {button.setAttribute("disabled", "true")})
    }
    
};

PlayGame();

console.log("ok")