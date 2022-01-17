const buttons = document.querySelectorAll('button');  // the game buttons
const result = document.getElementById('result');   // the result of each game
const computer = document.getElementById('computer');   // the computer player
const player = document.getElementById('player');   // the human player

let playersChoice = '',
  computersChoice = '',
  winningText = '',
  winner = '',
  score = 0;

//  add a 'click' event listener for each button
buttons.forEach(btn => {
  btn.addEventListener('click', playRound);
});

//  randomly return either 'Rock', 'Paper' or 'Scisors'
function computerPlay() {
  let theSelection = '';
  const compPick = Math.floor((Math.random() * 3) + 1);
  switch (compPick) {
    case 1:
      theSelection = 'rock';
      break;
    case 2:
      theSelection = 'paper';
      break;
    case 3:
      theSelection = 'scissors';
      break;
  }
  return theSelection;
}

function playRound(e) {
  winningText = '';
  computersChoice = computerPlay();
  playersChoice = e.target.id;

  if (playersChoice == computersChoice) {
    winningText = "Tied! Try again.";
    result.textContent = winningText;
    return;
  }

  switch (computersChoice) {
    case 'rock':
      if (playersChoice == 'scissors') {
        winningText = "Computer wins! Rock smashes scissors.";
      } else {
        winningText = "Player wins! Paper covers rock.";
      }
      break;
    case 'paper':
      if (playersChoice == 'rock') {
        winningText = "Computer wins! Paper covers rock.";
      } else {
        winningText = "Player wins! Scissors cut paper.";
      }
      break;
    case 'scissors':
      if (playersChoice == 'rock') {
        winningText = "Player wins! Rock smashes scissors.";
      } else {
        winningText = "Computer wins! Scissors cuts paper.";
      }
      break;
  }

  result.textContent = winningText;

  //  increment the score of the winner
  updateTheScoreboard(winningText);
}

function updateTheScoreboard(winner) {
  //  check winningText for the winner
  let theWinner = winner.split(" ");
  if (winningText.startsWith('Computer')) {
    giveTheComputerAPoint();
  }
  else if (winningText.startsWith('Player')) {
    giveThePlayerAPoint();
  }
  if (score === 5) {
    endGame();
  }
}

//  update the scoreboard

function giveThePlayerAPoint() {
  score = parseInt(player.textContent) + 1;
  player.textContent = score;
};

function giveTheComputerAPoint() {
  score = parseInt(computer.textContent) + 1;
  computer.textContent = score;
};

function endGame() {
  score = 0;
  alert("Game over!");
  player.textContent = score;
  computer.textContent = score;
}