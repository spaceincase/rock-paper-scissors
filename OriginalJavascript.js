var selectionArray = ["rock", "paper", "scissors"];

function computerPlay() {
  // Generates a random number 0-2 and uses it to select rock, paper,
  // or scissors from the selectionArray variable and return that value.
  return selectionArray[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, Paper, or Scissors?", "Choose Wisely!").toLowerCase();
  computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    return "It's a Draw!";
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
          playerSelection == "paper" && computerSelection == "scissors" ||
          playerSelection == "scissors" && computerSelection == "rock") {

    return "You Lose!";
  } else {
    return "You Win!";
  }
}

function game() {
  var playerScore = 0;
  var compScore = 0;
  var i = 0;

  for (i = 0; i < 5; i++) {
    var winner = playRound();

    if (winner == "You Lose!") {
      compScore += 1;
    } else {
      playerScore += 1;
    }
  }

  if (playerScore > compScore) {
    return "You win! Score: " + playerScore + " to " + compScore;
  } else {
    return "You lose! Score: " + playerScore + " to " + compScore;
  }
}
