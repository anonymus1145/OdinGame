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

function playRound (playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        alert("We have a draw");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("Computer wins!");
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        alert("Computer wins!");
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("Player wins!");
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        alert("Computer wins!");
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        alert("Player wins!");
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        alert("Computer wins!");
    } else {
        alert("Wrong input!");
    }
}

const playerSelection = prompt("Insert your choice").toLocaleLowerCase();
const computerSelection = getComputerChoice();
prompt(playRound(playerSelection, computerSelection));