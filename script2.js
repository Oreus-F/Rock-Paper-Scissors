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
        control.isDraw();
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
        if (result === 'draw'){
            return
        } else {
        result ? humanScore++ : computerScore++;

        console.log(`Player = ${humanScore}`);
        console.log(`Computer = ${computerScore}`)
        }

    }

    return {updateScore, getHumanScore, getComputerScore};
};


const ControlDisplay = function(){

    const isDraw = function(){
    console.log(`It's a Draw, try again !`)
    }   


    const displayResult = function(result, player, computer){
        result ? isWin(player, computer) : isLoose(player, computer);
    };


    const isWin = function(player, computer){
        console.log(`${player} wins vs ${computer} !`)

    }


    const isLoose = function(player, computer){
        console.log(`${player} loose vs ${computer} !`)
    }


    return {isDraw, displayResult}

}


const playGame = function(){
    const score = Score();

    
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.id;
            const player = choices[target];

            console.log(e.target)
            // score.updateScore(playRound(player));
            // checkGame();
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

playGame();

