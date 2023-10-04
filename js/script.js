function getComputerChoice() {

    let number = Math.floor(Math.random() * 3);
    let computerChoice;
    if (number == 0) {
        computerChoice = "rock";
    } else if (number == 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissor";
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {

    let playerScore = 0;
    let computerScore = 0;

    if (playerSelection == computerSelection) {
        alert("We have a draw");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Computer wins!");
        computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        alert("Player wins!");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("Player wins!");
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        alert("Computer wins!");
        computerScore++;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        alert("Player wins!");
        playerScore++
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        alert("Computer wins!");
        computerScore++;
    } else {
        alert("Please enter a valid choice: rock, paper, or scissors.");
    }
}

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
})

btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
})

btnScissors.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
})