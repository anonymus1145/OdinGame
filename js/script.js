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

function game() {

    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Insert your choice!").toLocaleLowerCase();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore) {
        alert("Player won the game!");
    } else if (playerScore < computerScore) {
        alert("Computer won the game!");
    } else {
        alert("Final result id draw!");
    }
}

//Add elements to the container with DOM methods
const container = document.querySelector('#container');

const content = document.createElement("p");
content.style.color = "red";
content.textContent = "Hey I’m red!";

const contentH3 = document.createElement("h3");
contentH3.style.color = "blue";
contentH3.textContent = 'Hey I’m blue!';

//container.appendChild(content);
//container.appendChild(contentH3);

const contentDiv = document.createElement("div");
contentDiv.setAttribute('style', 'background: pink; border: black 1px solid');
//Add elements to the div
const divH1 = document.createElement("h1");
divH1.textContent = "I am a div";
const divP = document.createElement("p");
divP.textContent = "Me too!";
contentDiv.appendChild(divH1);
contentDiv.appendChild(divP);

//container.appendChild(contentDiv);


//Add elements to the ul with DOM methods
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listText.appendChild(listBtn);
    listBtn.textContent = 'Delete';

    list.appendChild(listItem);

    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    input.focus();
});