let time = 0;
let timerID = null;

const timeDiv = document.querySelector("#t");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

function startTimer() {
  if (timerID) return;
  timerID = setInterval(() => {
    time++;
    display();
  }, 1000);
}

function stopTimer() {
  clearInterval(timerID);
  timerID = null;
  display();
}

function resetTimer() {
  stopTimer();
  time = 0;
  display();
}

function display() {
  timeDiv.innerHTML = format(time);
}

function format(sec) {
  let minutes = Math.trunc(sec / 60) + "";
  let seconds = (sec % 60) + "";
  if (minutes.length == 1) minutes = "0" + minutes;
  if (seconds.length == 1) seconds = "0" + seconds;
  return minutes + ":" + seconds;
}

