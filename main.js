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
console.clear();
console.log(computerPlay());
console.log();