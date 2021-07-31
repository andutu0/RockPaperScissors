function computerPlay() {

    const possible=["Rock" , "Paper" , "Scissors"];
    return possible[Math.floor(Math.random()*possible.length)];

}
let computerSelection
let playerSelection

function playRound(playerSelection, computerSelection) {
if(playerSelection === computerSelection){

    return "It's a tie!";
}
else if(playerSelection === "rock"){

    if(computerSelection === "Paper"){
     return "You lost!";
    }
    else return "You win!";
}
else if(playerSelection === "paper"){

    if(computerSelection === "Rock"){
    return "You win!";
    }
    else return "You lost!";
}
else if(playerSelection === "scissors"){

    if(computerSelection === "Rock"){
    return "You lost!";
    }
    else return "You win!";
}

}

function game(){
    let myScore = 0;
    let computerScore = 0;
    for(let i=0; i<=4; i++)
    {
    computerSelection = computerPlay();
    playerSelection = prompt("Do you choose rock, paper or scissors?");
    result = playRound(playerSelection, computerSelection);
    if(result === "You win!")
    {
        myScore++;
        console.log("You win!");
    }
    else if(result === "You lost!")
    {
        computerScore++;
        console.log("You lose!");
    }
    else console.log("Tie!");
    }
    if(myScore > computerScore)
    {
        console.log("You won the game!");
    }
    else if(myScore < computerScore)
    {
        console.log("You lost the game!");
    }
    else console.log("The game is a tie!");
}
game();
