//Get the computer choice

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

//Play a round

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        alert("We have a draw");
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        return false;
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        return true;
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return true;
    } else if (playerSelection == "paper" && computerSelection == "scissor") {
        return false;
    } else if (playerSelection == "scissor" && computerSelection == "paper") {
        return true;
    } else if (playerSelection == "scissor" && computerSelection == "rock") {
        return false;
    }
}

//Display the score and the winner

const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
let playerScore = 0;
let computerScore = 0;
let result;

btnRock.addEventListener("click", () => {

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert("Game Over");
            alert("Player win!");
        } else {
            alert("Game Over");
            alert("Computer win!");
        }
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    } else {
        result = playRound("rock", getComputerChoice());
        if (result == true) {
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("decision").innerHTML = "You win!";
            document.getElementById("decision").style.color = "green";
        } else if (result == false) {
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
            document.getElementById("decision").innerHTML = "You lose!";
            document.getElementById("decision").style.color = "red";
        }
    }
})


btnPaper.addEventListener("click", () => {

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert("Game Over");
            alert("Player win!");
        } else {
            alert("Game Over");
            alert("Computer win!");
        }
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    } else {
        result = playRound("paper", getComputerChoice());
        if (result == true) {
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("decision").innerHTML = "You win!";
            document.getElementById("decision").style.color = "green";
        } else if (result == false) {
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
            document.getElementById("decision").innerHTML = "You lose!";
            document.getElementById("decision").style.color = "red";
        }
    }
})

btnScissors.addEventListener("click", () => {

    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            alert("Game Over");
            alert("Player win!");
        } else {
            alert("Game Over");
            alert("Computer win!");
        }
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
    } else {
        result = playRound("scissor", getComputerChoice());
        if (result == true) {
            playerScore++;
            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("decision").innerHTML = "You win!";
            document.getElementById("decision").style.color = "green";
        } else if (result == false) {
            computerScore++;
            document.getElementById("computerScore").innerHTML = computerScore;
            document.getElementById("decision").innerHTML = "You lose!";
            document.getElementById("decision").style.color = "red";
        }
    }
})