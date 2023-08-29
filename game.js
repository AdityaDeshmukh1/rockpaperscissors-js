function getComputerChoice() {
   let computerChoice = ['rock', 'paper', 'scissors']
   return computerChoice[Math.floor(Math.random()*3)]
}   

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log("The Computer chose:", computerSelection);
console.log("The Player chose:", playerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        console.log("It's a Tie!");
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        console.log("Computer Wins!")
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Player Wins!")
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Player Wins!")
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        console.log("Computer Wins!")
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Player Wins!")
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        console.log("Computer Wins!")
    }
}

playRound(playerSelection, computerSelection);



