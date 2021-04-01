'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// const is immutable
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayWidth = function (Width) {
  document.querySelector('.number').style.width = Width;
};

const displaysecretNum = function (secretNum) {
  document.querySelector('.number').textContent = secretNum;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct number!');
    // document.querySelector('.number').textContent = secretNumber;
    displaysecretNum(secretNumber);
    // document.querySelector('body').style.backgroundColor = '#60b347';
    displayColor('#60b347');

    // document.querySelector('.number').style.width = '30rem';
    displayWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }

  //   //When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing!');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  displayColor('#222');
  // document.querySelector('.number').textContent = '?';
  displaysecretNum('?');
  document.querySelector('.guess').value = ' ';
  // document.querySelector('.number').style.width = '15rem';
  displayWidth('15rem');
});
