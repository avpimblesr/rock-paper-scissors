function computerPlay() {
  //  randomly return either 'Rock', 'Paper' or 'Scisors'
  const theSelection = Math.floor((Math.random() * 3) + 1)

  if(theSelection === 1) {
    return "Rock";
  } else if (theSelection === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

function playerPlay() {
  //  randomly return either 'Rock', 'Paper' or 'Scisors'
  //  replace the ramdom selection with live player interaction
  //  once the program is near completion
  const theSelection = Math.floor((Math.random() * 3) + 1)

  if(theSelection === 1) {
    return "Rock";
  } else if (theSelection === 2) {
    return "Paper";
  } else {
    return "Scissors";
  }
}


playerSelection = playerPlay()
computerSelection = computerPlay()

playRockPaperScissors(playerSelection, computerSelection)

function playRockPaperScissors(playerSelection, computerSelection) {
}