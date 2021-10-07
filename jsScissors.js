//Global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;


//Get the players name
let playerName = prompt("What's your name?");

//Display the name where ever needed, but player if null
if (playerName == undefined || playerName == null || playerName == "") {
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
  computerPlay();
  const computerSelection = computerPlay();
  playerSelection = "rock";
  showRock();
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
computerPlay(); 
  const computerSelection = computerPlay();
  playerSelection = "scissors";
  showScissors ();
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
  computerPlay(); 
  const computerSelection = computerPlay();
  playerSelection = "paper";
  showPaper ();
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
    showCompPaper();
  } else if (computerSelection == "rock") {
    showCompRock();
    document.getElementById("result").innerHTML = "You win!";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "scissors") {
    showCompScissors ();
    document.getElementById("result").innerHTML = "You lose!";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
}

let myArray = ["rock", "paper", "scissors"];
function computerPlay() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}





//keep score updated
document.getElementById("computerscore").textContent = computerScore;
document.getElementById("playerscore").textContent = playerScore;


//updating the player choice image
function clearDiv () {
  document.getElementById("player-move").innerHTML = "";
}

function showRock() {
  clearDiv();
  let img = new Image ();
  img.src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png"
  document.getElementById("player-move").appendChild(img);
}

function showScissors() {
  clearDiv();
  let img = new Image ();
  img.src="https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png"
  document.getElementById("player-move").appendChild(img);
}

function showPaper() {
  clearDiv();
  let img = new Image ();
  img.src="https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png"
  document.getElementById("player-move").appendChild(img);
}

function showCompRock() {
  clearDiv();
  let img = new Image ();
  img.src="https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png"
  document.getElementById("computer-move").appendChild(img);
}

function showCompScissors() {
  clearDiv();
  let img = new Image ();
  img.src="https://www.seekpng.com/png/detail/111-1114370_rock-paper-scissors-rock-paper-scissors-clipart.png"
  document.getElementById("computer-move").appendChild(img);
}

function showCompPaper() {
  clearDiv();
  let img = new Image ();
  img.src="https://www.pngitem.com/pimgs/m/266-2667252_transparent-rock-paper-scissors-clipart-rock-paper-scissors.png"
  document.getElementById("computer-move").appendChild(img);
}