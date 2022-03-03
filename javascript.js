function computerSelect(){
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber === 1){
        return 'Rock';
    }
    else if(randomNumber === 2){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}

function playerSelect(target){
    if(target.classList.contains('rock')){
        return 'Rock';
    }
    else if(target.classList.contains('paper')){
        return 'Paper';
    }
    else if(target.classList.contains('scissors')){
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection){
    roundNo++;
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

function updatePlayerChoice(playerSelection){
    if(playerSelection === 'Rock'){
        document.querySelector('.playerPicked').src = 'images/rock.jpg';
    }
    else if(playerSelection === 'Paper'){
        document.querySelector('.playerPicked').src = 'images/paper.jpg';
    }
    else{
        document.querySelector('.playerPicked').src = 'images/scissors.jpg';
    }
}

function updateComputerChoice(computerSelection){
    if(computerSelection === 'Rock'){
        document.querySelector('.computerPicked').src = 'images/rock.jpg';
    }
    else if(computerSelection === 'Paper'){
        document.querySelector('.computerPicked').src = 'images/paper.jpg';
    }
    else{
        document.querySelector('.computerPicked').src = 'images/scissors.jpg';
    }
}

function resetGame(){
    roundNo = 1;
    playerScore = 0;
    computerScore = 0;
    gameRoundNo.textContent = `Round ${roundNo}`;
    playerScoreText.textContent = `Your Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    result.textContent = '';
    document.querySelector('.playerPicked').src = 'images/questionMark.png';
    document.querySelector('.computerPicked').src = 'images/questionMark.png';
}

function playAgain(){
    document.querySelector('.gameContainer').style.display = 'none';
    document.querySelector('.playAgain').style.display = 'flex';
    if(playerScore === 5){
        document.querySelector('.winner').textContent = 'You Won The Game';
    }
    else if(computerScore === 5){
        document.querySelector('.winner').textContent = 'Computer Won The Game';
    }
    resetGame();
    playAgainbtn.addEventListener('click',Start);
}

function game(e){
    if(playerScore != 5 && computerScore != 5){
        const playerSelection = playerSelect(e.target);
        const computerSelection = computerSelect();
        updatePlayerChoice(playerSelection);
        updateComputerChoice(computerSelection);
        gameRoundNo.textContent = `Round ${roundNo}`;
        result.textContent = `${playRound(playerSelection,computerSelection)}`;
        playerScoreText.textContent = `Your Score: ${playerScore}`;
        computerScoreText.textContent = `Computer Score: ${computerScore}`;
    }
    if(playerScore === 5 || computerScore === 5){
        setTimeout(playAgain,1000);
    }
}

function Start(){
    document.querySelector('.startContainer').style.display = 'none';
    document.querySelector('.gameContainer').style.display = 'flex';
    document.querySelector('.playAgain').style.display = 'none';
    rock.addEventListener('click',game);
    paper.addEventListener('click',game);
    scissors.addEventListener('click',game);
}

let roundNo = 1;
let playerScore = 0;
let computerScore = 0;

const gameRoundNo = document.querySelector('.roundNo');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const playAgainbtn = document.querySelector('.playAgainbtn');

const startBtn = document.querySelector('#startBtn');
startBtn.addEventListener('click',Start);