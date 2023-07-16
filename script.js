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
const gameoverDiv = document.querySelector('.game-over')
const gamewinnerDiv = document.querySelector('.game-winner')
const gameloserDiv = document.querySelector('.game-loser')

let playerScore = 0;
let computerScore = 0;
let round= 0;

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

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Convert playerSelection to lowercase
  round++;
  roundDiv.textContent = `Round: ${round}` ;

  winDiv.textContent = '';
  loseDiv.textContent = '';
  tieDiv.textContent = '';

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


function checkScore() {
  if (playerScore === 5 || computerScore === 5) {
    endGame();
  }
}
    
function endGame() {
      // Display final result based on the scores
  gameoverDiv.textContent='Game over!';
  if (playerScore > computerScore) {
    gamewinnerDiv.textContent= 'WOW you have won the game!'
  } else if (playerScore < computerScore) {
      gameloserDiv.textContent = 'oops you have lost the game :('
    } 
    
      // Remove the event listeners to stop the game
      rockButton.removeEventListener('click', game);
      paperButton.removeEventListener('click', game);
      scissorButton.removeEventListener('click', game);
    }

function game() {

  rockButton.addEventListener('click', function() {
    if (playerScore < 5 && computerScore < 5) {
      playRound('rock', getComputerChoice());
      checkScore();
    }
  });

  paperButton.addEventListener('click', function() {
    if (playerScore < 5 && computerScore < 5) {
      playRound('paper', getComputerChoice());
      checkScore();
    }
  });

  scissorButton.addEventListener('click', function() {
    if (playerScore < 5 && computerScore < 5) {
      playRound('scissors', getComputerChoice());
      checkScore();
    }
  });
}


game();