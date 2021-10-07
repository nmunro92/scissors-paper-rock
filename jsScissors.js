//Global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;

//Get the players name
let playerName = prompt("What's your name?");

//Display the name where ever needed, but player if null
if (playerName == undefined) {
  playerName = "Player";
}
let nameArr = document.getElementsByClassName("name");
for (let i = 0; i < nameArr.length; i++) {
  nameArr[i].innerText = playerName;
}

//Add listener to Rock
const rockDiv = document.getElementById("rock");
rockDiv.addEventListener("click", playRock);
function playRock() {
  let myArray = ["rock", "paper", "scissors"];
  function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  const computerSelection = computerPlay();
  playerSelection = "rock";
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerSelection == "scissors") {
    document.getElementById("result").innerHTML = "You win!";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "paper") {
    document.getElementById("result").innerHTML = "You lose!";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
}
//Add listener to scissors
const scissorDiv = document.getElementById("scissors");
scissorDiv.addEventListener("click", playScissors);
function playScissors() {
  let myArray = ["rock", "paper", "scissors"];
  function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  const computerSelection = computerPlay();
  playerSelection = "scissors";
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerSelection == "paper") {
    document.getElementById("result").innerHTML = "You win!";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "rock") {
    document.getElementById("result").innerHTML = "You lose!";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
}
//add listener to Paper
const paperDiv = document.getElementById("paper");
paperDiv.addEventListener("click", playPaper);

function playPaper() {
  let myArray = ["rock", "paper", "scissors"];
  function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }
  const computerSelection = computerPlay();
  playerSelection = "paper";
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
  } else if (computerSelection == "rock") {
    document.getElementById("result").innerHTML = "You win!";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "scissors") {
    document.getElementById("result").innerHTML = "You lose!";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
}

document.getElementById("computerscore").textContent = computerScore;
document.getElementById("playerscore").textContent = playerScore;
