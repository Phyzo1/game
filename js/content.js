const redball = document.querySelector('.js-redball');
const blueball = document.querySelector('.js-blueball');
const yellowball = document.querySelector('.js-yellowball');

 redball.addEventListener('click', () => {
  playGame('redball');

});

 blueball.addEventListener('click', () => {
  playGame('blueball')
});

 yellowball.addEventListener('click', () => {
  playGame('yellowball')
})

const scores = {
  win: 0,
  loss: 0,
  tie: 0,
}

console.log(scores.Ties);

function playGame(playerMove) {
  const computerColour = pickComputerMove();

  let result = '';

  if (playerMove === 'redball') {
    if (computerColour === 'blueball') {
      result = 'You lose';
    }else if (computerColour === 'greenball') {
      result = 'You lose';
    }else if (computerColour === 'yellowball') {
      result = 'You lose';
    }else if (computerColour === 'redball') {
      result = 'Tie';
    }else if (computerColour === 'orangeball') {
      result = 'You win';
    } 
  }else if (playerMove === 'blueball') {
    if (computerColour === 'blueball') {
      result = 'Tie';
    }else if (computerColour === 'greenball') {
      result = 'You win';
    }else if (computerColour === 'yellowball') {
      result = 'You lose';
    }else if (computerColour === 'redball') {
      result = 'You lose';
    }else if (computerColour === 'orangeball') {
      result = 'You lose';
    }
  }else if (playerMove === 'yellowball') {
    if (computerColour === 'blueball') {
      result = 'You lose';
    }else if (computerColour === 'greenball') {
      result = 'You win';
    }else if (computerColour === 'yellowball') {
      result = 'Tie';
    }else if (computerColour === 'redball') {
      result = 'You lose';
    }else if (computerColour === 'orangeball') {
      result = 'You win';
    }
  }

  if (result === 'You win') {
    scores.win ++;
  }else if(result === 'You lose') {
    scores.loss ++;
  }else if(result === 'Tie') {
    scores.tie ++;
  }

  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-moves').innerHTML = `You <img src="logos/${playerMove}.png" alt=""> <img src="logos/${computerColour}.png" alt=""> Computer`
  document.querySelector('.js-scores').innerHTML = `Wins: ${scores.win} Losses: ${scores.loss} Ties: ${scores.tie}`
  
console.log(result);
}


function pickComputerMove() {
  const randomNumber = (Math.random() * 10);

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 2) {
    computerMove = 'blueball';
  }else if(randomNumber >= 2 && randomNumber < 4) {
    computerMove = 'greenball';
  }else if (randomNumber >=4 && randomNumber < 6) {
    computerMove ='yellowball';
  }else if (randomNumber >=6 && randomNumber < 8) {
    computerMove ='redball';
  }else if (randomNumber >=6 && randomNumber < 10) {
    computerMove = 'orangeball';
  }
  
  return computerMove;
}
