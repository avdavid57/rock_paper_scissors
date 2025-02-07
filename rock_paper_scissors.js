let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice () {
    return prompt("Rock, Paper, or Scissors?");

}

let humanChoice;
let computerChoice;

function playGame () {
    for (let i = 0; i < 5; i++)  {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound (humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors");
            humanScore++;
        }
    }

    // determine winner
    if (humanScore > computerScore) {
        console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}. You win the game!`);
    } else if (humanScore < computerScore) {
        console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}. You lose the game!`);
    } else {
        console.log(`Computer Score: ${computerScore}, Human Score: ${humanScore}. It\'s a tie!`);
    }
}

playGame();
