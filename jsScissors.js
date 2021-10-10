//Global variables
let playerScore = 0;
let computerScore = 0;
let playerSelection;


//Get the players name
let playerName = prompt("What's your name?");

//Display the name where ever needed, but player if nothing entered
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
  if (computerSelection == "rock") {
    showCompRock();
  } else if (computerSelection == "scissors") {
    showCompScissors();
  } else if (computerSelection == "paper") {
    showCompPaper();
  }
  playerSelection = "rock";
  showIMG();
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
    document.getElementById("result").style.color = "orange";
  } else if (computerSelection == "scissors") {
    document.getElementById("result").innerHTML = "You win!";
    document.getElementById("result").style.color = "green";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "paper") {
    document.getElementById("result").innerHTML = "You lose!";
    document.getElementById("result").style.color = "red";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
  winner ();
}

//Add listener to scissors
const scissorDiv = document.getElementById("scissors");
scissorDiv.addEventListener("click", playScissors);
function playScissors() {
  let myArray = ["rock", "paper", "scissors"];
  computerPlay();
  const computerSelection = computerPlay();
  if (computerSelection == "rock") {
    showCompRock();
  } else if (computerSelection == "scissors") {
    showCompScissors();
  } else if (computerSelection == "paper") {
    showCompPaper();
  }
  playerSelection = "scissors";
  //showScissors ();
  showIMG();
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
    document.getElementById("result").style.color = "orange";
  } else if (computerSelection == "paper") {
    document.getElementById("result").innerHTML = "You win!";
    document.getElementById("result").style.color = "green";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "rock") {
    document.getElementById("result").innerHTML = "You lose!";
    document.getElementById("result").style.color = "red";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
  winner ();
}

//add listener to Paper
const paperDiv = document.getElementById("paper");
paperDiv.addEventListener("click", playPaper);

function playPaper() {
  computerPlay();
  const computerSelection = computerPlay();
  if (computerSelection == "rock") {
    showCompRock();
  } else if (computerSelection == "scissors") {
    showCompScissors();
  } else if (computerSelection == "paper") {
    showCompPaper();
  }
  playerSelection = "paper";
  showIMG();
  if (playerSelection == computerSelection) {
    document.getElementById("result").innerHTML = "Tie!";
    document.getElementById("result").style.color = "orange";
    //showCompPaper();
  } else if (computerSelection == "rock") {
    //showCompRock();
    document.getElementById("result").innerHTML = "You win!";
    document.getElementById("result").style.color = "green";
    playerScore++;
    document.getElementById("playerscore").textContent = playerScore;
  } else if (computerSelection == "scissors") {
    //showCompScissors ();
    document.getElementById("result").innerHTML = "You lose!";
    document.getElementById("result").style.color = "red";
    computerScore++;
    document.getElementById("computerscore").textContent = computerScore;
  }
  winner ();
}

let myArray = ["rock", "paper", "scissors"];
function computerPlay() {
  return myArray[Math.floor(Math.random() * myArray.length)];
}

//keep score updated
document.getElementById("computerscore").textContent = computerScore;
document.getElementById("playerscore").textContent = playerScore;

//updating the player choice image
function clearDiv() {
  document.getElementById("player-move").innerHTML = "";
}

function clearCompDiv() {
  document.getElementById("computer-move").innerHTML = "";
}

function showIMG() {
  clearDiv();
  let img = new Image();
  if (playerSelection == "rock") {
    img.src = "rock.png";
  } else if (playerSelection == "scissors") {
    img.src = "scissors.png";
  } else if (playerSelection == "paper") {
    img.src = "paper.png";
  }
  document.getElementById("player-move").appendChild(img);
}

function showCompRock() {
  clearCompDiv();
  let img = new Image();
  img.src = "rock.png";
  document.getElementById("computer-move").appendChild(img);
}

function showCompScissors() {
  clearCompDiv();
  let img = new Image();
  img.src = "scissors.png";
  document.getElementById("computer-move").appendChild(img);
}

function showCompPaper() {
  clearCompDiv();
  let img = new Image();
  img.src = "paper.png";
  document.getElementById("computer-move").appendChild(img);
}

function winner () {
  if (playerScore >= 5)
  {
    alert(`${playerName} wins!`);
    location.reload();
  } else if (computerScore >= 5)
  {
    alert("Computer wins!");
    location.reload();
  }
}