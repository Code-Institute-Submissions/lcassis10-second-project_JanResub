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
 * Function that scans the HTML buttons and wait for the user to click
 */
function addGameEventClick() {
    const choice = document.getElementsByClassName("button");
    for (let i = 0; i < choice.length; i++) {
        choice[i].addEventListener("click", game);
    }
}

/**
 * Function that change the scores
 */
function uptadeScore(who) {
    //console.log(`Who called the function: ${who == user ? 'User' : 'Computer'}`)
    const userSpan = document.getElementById('user-score');
    const computerSpan = document.getElementById('computer-score');

    //User
    if (userSpan && who == user) {
        userScore += 1
        userSpan.textContent = userScore
        //console.log(`User Score: ${userScore}`)
    } else if (computerSpan && who == computer) { //Computer
        computerScore += 1
        computerSpan.textContent = computerScore
        //console.log(`User Score: ${computerScore}`)
    }
    showWinMessage(who);
}

/**
 *  Function that will change the image when the user click on the selected button
 */
function uptadeImageChoice(who, choice) {
    //console.log(`Uptade image: ${choice}`)
    const paperSrc = './assets/image/paper.png'
    const rockSrc = './assets/image/rock.png'
    const scissorsSrc = './assets/image/scissors.png'
    const lizardSrc = './assets/image/lizard.png'
    const spockSrc = './assets/image/spock.png'
    let choiceSelected = ''

    switch (choice) {
        case paper:
            choiceSelected = paperSrc
            break;
        case rock:
            choiceSelected = rockSrc
            break;
        case scissors:
            choiceSelected = scissorsSrc
            break;
        case lizard:
            choiceSelected = lizardSrc
            break;
        case spock:
            choiceSelected = spockSrc
            break;
    }

}

function showWinMessage() {
    
}

function game() {
    
}

function getComputerChoice() {

}