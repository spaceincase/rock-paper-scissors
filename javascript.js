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

  e.target.classList.add('animated')
  var playerSelection = e.toElement.id
  var computerSelection = computerPlay();
  if (playerSelection == computerSelection) {
    setMessage("Draw")
  } else if (playerSelection == "rock" && computerSelection == "paper" ||
            playerSelection == "paper" && computerSelection == "scissors" ||
            playerSelection == "scissors" && computerSelection == "rock") {
    setMessage("Lose")
    computerScore += 1
    setScore()
  } else {
    setMessage("Win")
    playerScore += 1
    setScore()
  }
}

function setScore() {
  score.innerHTML = "Score: " + playerScore + " to " + computerScore
}

function setMessage(message) {
  query = document.querySelector('.message h3')
  query.innerHTML = message
}

function removeTransition(e) {
    
    e.target.classList.remove('animated');
  }


const btns = Array.from(document.querySelectorAll('.btn'))
btns.forEach(btn => btn.addEventListener('click', playRound))
btns.forEach(btn => btn.addEventListener('transitionend', removeTransition))

var computerScore = 0
var playerScore = 0
const score = document.querySelector('.score h3')
setScore()
