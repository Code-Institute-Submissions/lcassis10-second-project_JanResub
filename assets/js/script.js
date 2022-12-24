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

    //User
    if (who == user) {
        const userImg = document.getElementById('user-image');
        userImg.src = choiceSelected
    } else if (who == computer) { //Computer
        const compImg = document.getElementById('computer-image');
        compImg.src = choiceSelected
    }
}

/**
 * Function that chages the winners message
 */
function showWinMessage(who) {
    const div = document.getElementById('messages');
    if (who == user) {
        div.innerHTML = 'User WON!'
    } else if (who == computer) {
        div.innerHTML = 'Computer WON!'
    }   
}

/**
 *  Function that will compare the choices of the User and the Computer
 */
function game(userInput) {
    const userChoice = userInput.target.innerHTML != "" ? userInput.target.innerHTML.toLowerCase() : ""
    uptadeImageChoice(user, userChoice)
    const computerChoice = getComputerChoice()
    uptadeImageChoice (computer, computerChoice)

    //console.log(`User ${userChoice} x ${computerChoice} Computer`)

    if (userChoice === computerChoice) {
        const div = document.getElementById('messages')
        div.innerHTML = 'Tie!'
    } else if (userChoice === paper) {
        if (computerChoice === rock) {
            //console.log('user won')
            uptadeScore(user)
        } else if (computerChoice === spock) {
            //console.log('user won')
            uptadeScore(user)
        } else {
            //console.log('computer won')
            uptadeScore(computer)
        }
    } else if (userChoice === rock) {
        if (computerChoice === lizard) {
            //console.log('user won')
            uptadeScore(user)
        } else if (computerChoice === scissors) {
            //console.log('user won')
            uptadeScore(user)
        } else {
            //console.log('computer won')
            uptadeScore(computer)
        }
    } else if (userChoice === scissors) {
        if (computerChoice === lizard) {
            //console.log('user won')
            uptadeScore(user)
        } else if (computerChoice === paper) {
            //console.log('user won')
            uptadeScore(user)
        } else {
            //console.log('computer won')
            uptadeScore(computer)
        }
    } else if (userChoice === lizard) {
        if (computerChoice === paper) {
             //console.log('user won')
             uptadeScore(user)
        } else if (computerChoice === spock) {
             //console.log('user won')
             uptadeScore(user)
        } else {
            //console.log('computer won')
            uptadeScore(computer)
        }
    } else if (userChoice === spock) {
        if (computerChoice === rock) {
            //console.log('user won')
            uptadeScore(user)
        } else if (computerChoice === scissors) {
            //console.log('user won')
            uptadeScore(user)
        } else {
            //console.log('computer won')
            uptadeScore(computer)
        }
    } else {
        console.log('Error')
    }
}

/**
 * Function that returns computer choice
 */
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 5);
    switch (randomNumber) {
        case 0:
            return rock;
        case 1:
            return paper;
        case 2:
            return scissors;
        case 3:
            return lizard;
        case 4:
            return spock; 
    }
}