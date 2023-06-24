var timerElement = document.querySelector('.timer');
var startButton = document.querySelector('#start');
var pauseButton = document.querySelector('#pause');
var resetButton = document.querySelector('#reset');

var intervalId;
var timeLeft = 1500; // 25 minutes

function startTimer() {
  startButton.disabled = true;
  pauseButton.disabled = false;
  intervalId = setInterval(decreaseTimer, 1000);
}

function decreaseTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimer();
  } else {
    clearInterval(intervalId);
    timerElement.classList.add('pulse-animation');
    startButton.disabled = false;
    pauseButton.disabled = true;
  }
}

function updateTimer() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  timerElement.textContent = formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}

function pauseTimer() {
  clearInterval(intervalId);
  startButton.disabled = false;
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(intervalId);
  timeLeft = 1500; // Reset to 25 minutes
  updateTimer();
  startButton.disabled = false;
  pauseButton.disabled = true;
  timerElement.classList.remove('pulse-animation');
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

updateTimer();
