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
getComputerChoice();


function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Enter rock,paper or scissors :");
  playerSelection = playerSelection.toLowerCase();

  computerSelection = getComputerChoice();
   

  }
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


 


  