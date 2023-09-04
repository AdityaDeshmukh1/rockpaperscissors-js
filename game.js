function getComputerChoice() {
   const computerChoice = ['rock', 'paper', 'scissors']
   return computerChoice[Math.floor(Math.random()*3)]
}   

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        result.appendChild(itsATie);
    }
    else if(playerSelection == "rock" && computerSelection == "paper"){
        result.append(computerWins)
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"){
        result.append(playerWins)
    }
    else if(playerSelection == "paper" && computerSelection == "rock"){
        result.append(playerWins)
    }
    else if(playerSelection == "paper" && computerSelection == "scissors"){
        result.append(computerWins)
    }
    else if(playerSelection == "scissors" && computerSelection == "paper"){
        result.append(playerWins)
    }
    else if(playerSelection == "scissors" && computerSelection == "rock"){
        result.append(computerWins)
    }
}
//console.log("The Computer chose:", computerSelection);
//console.log("The Player chose:", playerSelection);


//playRound(playerSelection, computerSelection);

const button1 = document.querySelector('#rock');
button1.addEventListener('click', function() {playRound("rock", computerSelection)});

const button2 = document.querySelector('#paper');
button2.addEventListener('click', function () {playRound("paper", computerSelection)});

const button3 = document.querySelector('#scissors');
button3.addEventListener('click', function() {playRound("scissors", computerSelection)});

const result = document.querySelector('.result');
const h2 = document.createElement('h2');



const playerWins = document.createElement('h3');
const computerWins = document.createElement('h3');
const itsATie = document.createElement('h3');

playerWins.textContent = "Player wins";
computerWins.textContent = "Computer wins";
itsATie.textContent = "It's a Tie";

h2.textContent = "The winner is: ";
result.appendChild(h2);
//console.log(playerSelection);
