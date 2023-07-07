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


function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);

      const playerSelection = prompt('enter rock,paper or scissors');
      const computerSelection = getComputerChoice();

      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);

      const result = playRound(playerSelection, computerSelection);
      console.log(result);

      if (result.includes("Win")) {
        playerScore++;
      } else if (result.includes("Lose")) {
        computerScore++;
      }

      console.log(`Player Score: ${playerScore}`);
      console.log(`Computer Score: ${computerScore}`);
      console.log('-----------------');
    }

    

  if (round === 6) console.log("Game Over!"); {
    if (playerScore > computerScore) {
      console.log("Congratulations! You win!");
    } else if (playerScore < computerScore) {
      console.log("Oops! You lose!");
    } else if (playerScore === computerScore) {
      console.log("It's a tie!");
    }
  }
  
  }
  

game()

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); // Convert playerSelection to lowercase
  
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }

  
}

 
playerSelection = 'rock'
const computerSelection = getComputerChoice();



