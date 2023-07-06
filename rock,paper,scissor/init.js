const humanScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const humanImg = document.querySelector(".humanImg");
const computerImg = document.querySelector(".computerImg");
const btns = document.querySelectorAll("button");
let humanScore = 0;
let computerScore = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let playerResult;
    const id = e.currentTarget.dataset.id;
    switch (id) {
      case "rock":
        humanImg.src = "img/rock.svg";
        playerResult = "rock";
        break;
      case "paper":
        humanImg.src = "img/paper.svg";
        playerResult = "paper";
        break;
      case "scissors":
        humanImg.src = "img/scissors.svg";
        playerResult = "scissors";
        break;
    }
   
    let computeResult = getComputerResult();
    resolve(playerResult,computeResult);
  });
});

function getComputerResult(){
    let computerResult;

    let n = Math.floor(Math.random() * 3);
    switch (n){
        case 0:
            computerResult = "rock";
            computerImg.src = "img/rock.svg";
            break;
        case 1:
            computerResult = "paper";
            computerImg.src = "img/paper.svg";
            break;
        case 2:
            computerResult = "scissors"   
            computerImg.src = "img/scissors.svg";
            break; 
    }
    return computerResult;
}
function resolve(player, computer){
    if (player == "rock"){
        if(computer == "paper"){
            computerScore++;
        }else if(computer == "scissors"){
            humanScore++;
        }
    }else if(player == "paper"){
        if(computer == "rock"){
            humanScore++;
        }else if(computer == "scissors"){
            computerScore++;
        }
    }
    // if player clicks on scissors
    else{
        if(computer=="rock"){
            computerScore++;
        }else if(computer=="paper"){
            humanScore++;
        }
    }
    computerScoreDisplay.innerHTML = computerScore;
    humanScoreDisplay.innerHTML = humanScore;
}
