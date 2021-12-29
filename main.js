function computerPlay() {
  //  randomly return either 'Rock', 'Paper' or 'Scisors'
  const theSelection = Math.floor((Math.random() * 3) + 1)

  if(theSelection === 1) {
    return "rock";
  } else if (theSelection === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerPlay() {
  //  randomly return either 'Rock', 'Paper' or 'Scisors'
  //  replace the ramdom selection with live player interaction
  //  once the program is near completion
  const theSelection = Math.floor((Math.random() * 3) + 1)

  if(theSelection === 1) {
    return "ROCK";
  } else if (theSelection === 2) {
    return "PAPER";
  } else {
    return "SCISSORS";
  }
}


playerSelection = playerPlay().toLowerCase()
computerSelection = computerPlay()

playRound(playerSelection, computerSelection)

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Tie -- Try again...");
  } else if(playerSelection === "rock") {
    console.log((computerSelection === "paper") 
    ? "You Lose! Paper beats Rock." 
    : "You Win! Rock beats scissors.")
  } else if (playerSelection === "paper") {
    console.log((playerSelection === "scissors") 
    ? "You Lose! Scissors beats paper."
    : "You Win! Paper beats rock."
    );
  } else {
    console.log((computerSelection === "rock")
    ? "You Loose! Rock beats scissors."
    : "You Win! Scissors beats paper."
    )
  }
}

