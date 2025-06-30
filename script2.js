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
    let humanScore;
    let computerScore;


    const reset = function(){
        humanScore = 0;
        computerScore = 0;

        displayScore();
    }


    const getHumanScore = function(){
        return humanScore;
    };


    const getComputerScore = function(){
        return computerScore
    }


    const updateScore = function(result){        
        if (result === 'draw'){
            return
        } else {
            result ? humanScore++ : computerScore++;
            
            displayScore();
        }
        
    }
    
    
    const displayScore = function(){
        const playerDisplay = document.querySelector("#playerScore");
        const computerDisplay = document.querySelector("#computerScore");

        playerDisplay.textContent = humanScore;
        computerDisplay.textContent = computerScore;
        
    }

    return {updateScore, getHumanScore, getComputerScore, reset};
};


const ControlDisplay = function(){
    const display = document.querySelector('#display');


    const displayChoices = function(player, computer){
        const p = document.createElement("p");
        p.textContent = `${player} vs ${computer} !`;
        return p
    }


    const resetDisplay = function(){
        display.replaceChildren();
    };


    const isDraw = function(player, computer){
        resetDisplay();

        display.appendChild(displayChoices(player, computer))
        const p = document.createElement("p");
        p.textContent = "It's a draw. Try again !";
        display.appendChild(p);
    }   


    const displayResult = function(result, player, computer){
        result ? isWin(player, computer) : isLoose(player, computer);
    };


    const isWin = function(player, computer){
        resetDisplay();

        display.appendChild(displayChoices(player, computer));

        const p = document.createElement("p");
        p.textContent = "You win !";
        
        display.appendChild(p);

    }


    const isLoose = function(player, computer){
        resetDisplay();

        display.appendChild(displayChoices(player, computer));

        const p = document.createElement("p");
        p.textContent = "You loose !";
        
        display.appendChild(p);
    }


    const newButtons = function(){
        const container = document.querySelector('.choices');
        container.replaceChildren();
        
        for (let x=0; x<3; x++){
            const button = document.createElement('button');
            button.setAttribute("id", x);
            button.textContent = choices[x];
            container.appendChild(button);
        }


        return getButtons();
    }


    const getButtons = function(){
        const container = document.querySelector('.choices');

        return buttons = container.querySelectorAll('button');   
    };


    const createNewGameButton = function(){
        const container = document.querySelector('.choices');
        container.replaceChildren();
        
        const button = document.createElement('button');
        button.setAttribute('id', 'tryAgain');
        button.textContent = 'New Game';
        
        container.appendChild(button);
        return button
    }


    const endDisplay = function(result){
        resetDisplay();

        const p = document.createElement("p");
        p.textContent = result ? "You won this game !" : "You loose this game, try again ?";

        display.appendChild(p);
    }


    return {isDraw, displayResult, newButtons, createNewGameButton, endDisplay, resetDisplay}

}

const PlayGame = function(){
    const score = Score();
    const control = ControlDisplay();
    
    
    const newGame = function(){
        const newGameButton = control.createNewGameButton();

        newGameButton.addEventListener('click', () => {
            score.reset();
            control.resetDisplay();
            startGame();
        })
    }

    
    const startGame = function(){
        const buttons = control.newButtons();
        
        buttons.forEach(button => {
            
            button.addEventListener('click', (e) => {
                const target = e.target.id;
                const player = choices[target];
            
                score.updateScore(playRound(player));
                checkGame();
            });
        })

    }
   
    
    const checkGame = function(){
        const human = score.getHumanScore();
        const computer = score.getComputerScore();

        if (human === 5 || computer === 5){
            endGame(human);
        }
    };


    const endGame = function(human){
        if (human === 5){
            control.endDisplay(true)
        } else {
            control.endDisplay(false);
        }

        newGame();

    }
    

    return {newGame}
};


PlayGame().newGame();

