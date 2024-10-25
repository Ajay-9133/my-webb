let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(time) {
  const hours = String(Math.floor(time / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function updateTime() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  display.textContent = formatTime(elapsedTime);
}

startButton.addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTime, 1000);
  }
});

stopButton.addEventListener('click', () => {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
});

resetButton.addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = '00:00:00';
});
