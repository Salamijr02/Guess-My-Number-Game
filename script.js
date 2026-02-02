'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const secretEl = document.querySelector('.secret');
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const guessInput = document.querySelector('.guess');
const checkBtn = document.querySelector('.check-btn');
const againBtn = document.querySelector('.again');

const displayMessage = msg => {
  messageEl.textContent = msg;
};

checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  // INVALID
  if (!guess || guess < 1 || guess > 20) {
    displayMessage('Kini? 😂😂😂');
    return;
  }

  // WIN
  if (guess === secretNumber) {
    displayMessage(' Correct Number');
    secretEl.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }

  } else {
    // HIGH or LOW
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? ' Too High' : ' Too Low'
      );
      score--;
      scoreEl.textContent = score;
    } else {
      // LOSE
      displayMessage(' You lost');
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  scoreEl.textContent = score;
  secretEl.textContent = '18';
  guessInput.value = '';
});