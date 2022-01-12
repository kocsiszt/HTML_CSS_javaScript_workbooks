'use strict';


const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}

let displayScore = function (score) {
  document.querySelector('.score').textContent = score;
}

let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
}

let displayBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
}

let displayNumberWidth = function (NumberWidth) {
  document.querySelector('.number').style.width = NumberWidth;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);



  // When there is no input
  if (!guess) {
    displayMessage('No number!')

    // When the number is correct
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');

    //document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);
    //document.querySelector('body').style.backgroundColor = '#60b347';
    displayBody('#60b347')
    //document.querySelector('.number').style.width = '30rem';
    displayNumberWidth('30rem')

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When quess is too wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low!');
      score--;
      //document.querySelector('.score').textContent = score;
      displayScore(score)
    } else {
      displayMessage('You lost the game!');
      //document.querySelector('.score').textContent = 0;
      displayScore(0)
    }
  }





  /*    // When tne number is too hih
   } else if (guess > secretNumber) {
     if (score > 1) {
       message.textContent = 'Too high';
       score--;
       document.querySelector('.score').textContent = score;
     } else {
       message.textContent = 'You lost the game!';
       document.querySelector('.score').textContent = 0;
     }
 
     // When number is too low
   } else if (guess < secretNumber) {
 
     if (score > 1) {
       message.textContent = 'Too low';
       score--;
       document.querySelector('.score').textContent = score;
     } else {
       message.textContent = 'You lost the game!';
       document.querySelector('.score').textContent = 0;
     }
   } */
});

document.querySelector('.again').addEventListener('click', function () {
  //document.querySelector('.number').textContent = secretNumber;
  displayNumber(secretNumber);
  score = 20;
  //document.querySelector('.score').textContent = score;
  displayScore(score)

  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  //document.querySelector('.number').textContent = '?';
  displayNumber('?');

  //document.querySelector('body').style.backgroundColor = '#222';
  displayBody('#222')
  //document.querySelector('.number').style.width = '15rem'
  displayNumberWidth('15rem')
});
