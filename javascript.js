function computerSelect(){
    let randomnumber = Math.floor(Math.random() * 3) + 1;
    if(randomnumber === 1){
        return 'Rock';
    }
    else if(randomnumber === 2){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    if((playerSelection === 'rock' || playerSelection === 'Rock' || playerSelection === 'ROCK') &&
     computerSelection === 'Paper'){
        computerScore++;
        return 'You Lose! Paper Beats Rock';
    }
    else if((playerSelection === 'Paper' || playerSelection === 'paper' || playerSelection === 'PAPER') &&
     computerSelection === 'Scissor'){
        computerScore++;
        return 'You Lose! Scissor Beats Paper';
    }
    else if((playerSelection === 'Scissor' || playerSelection === 'scissor' || playerSelection === 'SCISSOR') &&
     computerSelection === 'Rock'){
        computerScore++;
        return 'You Lose! Rock Beats Scissor';
    }
    else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') &&
     computerSelection === 'Rock'){
        playerScore++;
        return 'You Win! Paper Beats Rock';
    }
    else if((playerSelection === 'Rock' || playerSelection === 'rock' || playerSelection === 'ROCK') &&
     computerSelection === 'Scissor'){
        playerScore++;
        return 'You Win! Rock Beats Scissor';
    }
    else if((playerSelection === 'Scissor' || playerSelection === 'scissor' || playerSelection === 'SCISSOR') &&
     computerSelection === 'Paper'){
        playerScore++;
        return 'You Win! Scissor Beats Paper';
    }
    else if((playerSelection === 'rock' || playerSelection === 'Rock' || playerSelection === 'ROCK') &&
     computerSelection === 'Rock'){
        return 'Draw!';
    }
    else if((playerSelection === 'paper' || playerSelection === 'Paper' || playerSelection === 'PAPER') &&
     computerSelection === 'Paper'){
        return 'Draw!';
    }
    else if((playerSelection === 'Scissor' || playerSelection === 'scissor' || playerSelection === 'SCISSOR') &&
     computerSelection === 'Scissor'){
        return 'Draw!';
    }
}

function game(){
    const numberOfGames = prompt('How many rounds you want to play?');
    for (let i = 0; i < numberOfGames; i++) {
        let playerSelection = prompt('Enter Rock, Paper or Scissor: ');
        let computerSelection = computerSelect();
        alert('Player Chose: ' + playerSelection + '\n' + 'Computer Chose: ' + computerSelection + '\n'
        + playRound(playerSelection, computerSelection) + '\n\n' + 'Your Score: ' + playerScore + '    Computer Score: ' + computerScore);
    }
}

game();