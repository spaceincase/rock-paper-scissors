function computerPlay() {
  var selectionArray = ["rock", "paper", "scissors"];
  var selection = selectionArray[Math.floor(Math.random() * 3)];

  var extension = ''
  if(selection == 'paper') {
    extension = '.jfif'
  } else if (selection == 'rock') {
    extension = '.jpg'
  } else {
    extension = '.png'
  }

  const compImg = document.querySelector('#compSelecImg')
  compImg.src = `imgs/${selection}${extension}`
  return selection;
}

function playRound(e) {
  var playerSelection = e.toElement.id
  var computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    console.log("Draw")
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "rock") {
    console.log("Lose")
  } else {
    console.log("Win")
  }
}

const btns = Array.from(document.querySelectorAll('.btn'))
btns.forEach(btn => btn.addEventListener('click', playRound))

