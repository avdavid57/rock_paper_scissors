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

let humanChoice;
let computerChoice;

function updateScore () {
    const resultsBar = document.querySelector("#results-bar");
    resultsBar.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore} `;
}

function resetScore () {
    humanScore = 0;
    computerScore = 0;

    // clear the results pages
    const resultsList = document.querySelector("results-list");
    resultsList.innerHTML = "";
 
    const scoreSection = document.querySelector("score-section");
    scoreSection.innerHTML = "";

}

function playRound (humanChoice, computerChoice) {

    // add to results page
    const resultsPageLink = document.querySelector("#results-list")
    const roundResults = document.createElement("li");  

    // get computer choice
    computerChoice = getComputerChoice();
    
    if (humanChoice == computerChoice) {
        roundResults.textContent = ("It's a tie!");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        roundResults.textContent = ("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        roundResults.textContent = ("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        roundResults.textContent = ("You lose! Paper beats Rock");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        roundResults.textContent = ("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        roundResults.textContent = ("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        roundResults.textContent = ("You lose! Rock beats Scissors");
        humanScore++;
    }

    // determine winner
    if (humanScore + computerScore >= 5) {
        if (humanScore > computerScore) {
            roundResults.textContent = (`Computer Score: ${computerScore}, Human Score: ${humanScore}. You win the game!`);
        } else if (humanScore < computerScore) {
            roundResults.textContent = (`Computer Score: ${computerScore}, Human Score: ${humanScore}. You lose the game!`);
        } else {
            roundResults.textContent = (`Computer Score: ${computerScore}, Human Score: ${humanScore}. It\'s a tie!`);
        }
    }

    updateScore();

    resultsPageLink.appendChild(roundResults);
};

function playGame () {

    // link to html body
    const rpsLink = document.querySelector("body");
    
    // create buttons
    const rockBtnCreate = document.createElement("button");
    rockBtnCreate.textContent = "Rock";
    rockBtnCreate.id = "rock";
    rpsLink.appendChild(rockBtnCreate);

    const paperBtnCreate = document.createElement("button");
    paperBtnCreate.textContent = "Paper";
    paperBtnCreate.id = "paper";
    rpsLink.appendChild(paperBtnCreate);

    const scissorsBtnCreate = document.createElement("button");
    scissorsBtnCreate.textContent = "Scissors";
    scissorsBtnCreate.id = "scissors";
    rpsLink.appendChild(scissorsBtnCreate);

    const resultsBar = document.createElement("div");
    resultsBar.textContent = `Computer Score: ${computerScore} | Human Score: ${humanScore}`;
    resultsBar.id = "results-bar";
    resultsBar.style.color = "white";
    resultsBar.style.backgroundColor = "gray";
    resultsBar.style.padding = "10px";
    resultsBar.style.margin = "10px 0px 10px 0px";
    rpsLink.appendChild(resultsBar);

    const resultsSection = document.createElement("div");
    resultsSection.id = "score-section";
    resultsSection.style.color = "white";
    resultsSection.style.backgroundColor = "black";
    resultsSection.style.padding = "10px";
    rpsLink.appendChild(resultsSection);
    
    // select the buttons
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    // event handlers
    rockBtn.addEventListener("click", ()=> {
        playRound("rock");
    });

    paperBtn.addEventListener("click", ()=> {
        playRound("paper");
    });

    scissorsBtn.addEventListener("click", ()=> {
        playRound("scissors");
    });

    // add ul to results div
    const resultsList = document.createElement("ul");
    resultsList.id = "results-list";
    resultsSection.appendChild(resultsList);

}

playGame();
