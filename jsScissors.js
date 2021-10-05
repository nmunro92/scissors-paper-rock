
//Rock Paper, Scissors

//Global variables
let playerScore = 0;
let computerScore = 0;

//Get the players name
let playerName = prompt("What's your name?");
let nameArr = document.getElementsByClassName("name");
for(let i=0; i<nameArr.length; i++) {
nameArr[i].innerText = playerName 
}

//Create Function for the computer to randomly return Scissors, Paper, or Rock
let myArray = ["rock", "paper", "scissors"];
function computerPlay() {
     return myArray[Math.floor(Math.random() * myArray.length)];
}

// create a game best of 5, reporting the winner at the end.
  while ((playerScore < 3 && computerScore < 3)) {

// Create a function for the player to select rock paper scissor, playerSelection. make it so the input can be case insensitive
    let playerSelection = prompt("Rock, Paper or Scissors? Best of 5 wins!");
playerSelection = playerSelection.toLowerCase();

//Create a function that plays rock paper scissors with the computer and declares a winner. 
function playRound(playerSelection) {

  if (playerSelection === computerSelection ) {
       return `Tie game! ${playerName}: ${playerScore}. Computer: ${computerScore}.`
  } else if (
  (playerSelection === "scissors" && computerSelection === "paper") ||
  (playerSelection === "rock" && computerSelection === "scissors") ||
  (playerSelection === "paper" && computerSelection === "rock")
  ) {
      ++playerScore;
      return `You win! ${playerName}: ${playerScore}. Computer: ${computerScore}`;
  } else if (
      (playerSelection === "scissors" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors")
  ) {
      ++computerScore;
      return `You lose! ${playerName}: ${playerScore}. Computer: ${computerScore}`;
  }
  else {
     return "Sorry, that's not an option!"
  }
}
const computerSelection = computerPlay();

alert(playRound(playerSelection, computerSelection));

}
//after best of 5, declare winner and end game.
if (playerScore >= 3) {
  alert("Game over, you win! Refresh page to play again");
} else if (computerScore >= 3); {
  alert("Game over, computer wins! Refresh page to play again");
} 



 
