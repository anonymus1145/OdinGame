function getComputerChoice() {

    let number = Math.floor((Math.random() * 2) + 1);
    let computerChoice;
    if (number == 0) {
        computerChoice = "Rock";
    } else if (number == 1) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissor";
    }
    return computerChoice;
}