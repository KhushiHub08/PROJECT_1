let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;

const guessInput = document.getElementById('guessInput');
const checkBtn = document.getElementById('checkBtn');
const message = document.getElementById('message');
const scoreDisplay = document.getElementById('score');
const resetBtn = document.getElementById('resetBtn');

checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = '⛔ Enter a valid number between 1 and 100!';
    return;
  }

  if (guess === secretNumber) {
    message.textContent = `🎉 Correct! The number was ${secretNumber}`;
    document.body.style.backgroundColor = '#a0f0a0';
    checkBtn.disabled = true;
  } else {
    score--;
    if (score > 0) {
      message.textContent = guess > secretNumber ? '📉 Too high!' : '📈 Too low!';
      scoreDisplay.textContent = score;
    } else {
      message.textContent = `💥 Game over! The number was ${secretNumber}`;
      scoreDisplay.textContent = 0;
      checkBtn.disabled = true;
    }
  }
});

resetBtn.addEventListener('click', () => {
  score = 10;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  message.textContent = '';
  scoreDisplay.textContent = score;
  guessInput.value = '';
  document.body.style.backgroundColor = '#f7f7f7';
  checkBtn.disabled = false;
});
