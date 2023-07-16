const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorButton = document.getElementById('scissors');
const resultsDiv = document.getElementById('results');
const userScoreDiv = document.querySelector('.user-score');
const computerScoreDiv = document.querySelector('.computer-score');
const roundDiv = document.querySelector('.round')
const winDiv = document.querySelector('.win-statement')
const loseDiv = document.querySelector('.lose-statement')
const tieDiv = document.querySelector('.tie-statement')

function getComputerChoice() {
    // Generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
  
    // Map the random number to 'Rock', 'Paper', or 'Scissors'
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }

}

let playerScore = 0;
let computerScore = 0;
let round= 0;

function game() {

  rockButton.addEventListener('click', function() {
    playRound('rock', getComputerChoice());
  });
      
  paperButton.addEventListener('click', function() {
    playRound('paper', getComputerChoice());
  });
      
  scissorButton.addEventListener('click', function() {
    playRound('scissors', getComputerChoice());
  });


function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Convert playerSelection to lowercase
  round++;
  roundDiv.textContent = `Round: ${round}` ;
    if (playerSelection === computerSelection) {
      console.log( "It's a tie!");
      tieDiv.textContent = "Its a tie!";

    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      console.log( `You Win! ${playerSelection} beats ${computerSelection}`);
      winDiv.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      
      playerScore++;
      userScoreDiv.textContent = `User Score: ${playerScore}`;

    } else {
        console.log( `You Lose! ${computerSelection} beats ${playerSelection}`);
        loseDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;

        computerScore++;
        computerScoreDiv.textContent = `computer score: ${computerScore}` ;
      }
      
    }



  if (round <=5) {
      // End the game
    console.log("Game Over!");
  if (playerScore > computerScore) {
    console.log("Congratulations! You win!");
  } else if (playerScore < computerScore) {
    console.log("Oops! You lose!");
  } else {
    console.log("It's a tie!");
    }
  }
}
  
game();



