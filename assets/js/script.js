let userScore = 0
let computerScore = 0
const paper = "paper"
const rock = "rock"
const scissors = "scissors";
const lizard = "lizard"
const spock = "spock"
const user = "user"
const computer = "computer"
addGameEventClick()

/**
 * Funtion that scans the HTML buttons and wait for the user to click
 */
function addGameEventClick() {
    const choice = document.getElementsByClassName("button");
    for (let i = 0; i < choice.length; i++) {
        choice[i].addEventListener("click", game);
    }
}

function uptadeScore() {

}

function uptadeImageChoice() {

}

function showWinMessage() {
    
}

function game() {
    
}

function getComputerChoice() {

}