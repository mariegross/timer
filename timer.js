const timerNumber = document.querySelector(".timer__displaybox__number");
const timeSelector = document.querySelector("#selector");
let time = timeSelector;
let intervalId;

const countdown = () => {
  timerNumber.innerText = time; // Stellt sicher, dass time, also "20" unser Startwert ist
  if (time === 0) {
    clearInterval(intervalId);
    return;
  }
  time--;
};

const countdownStart = () => {
  time = timeSelector.value;
  intervalId = setInterval(countdown, 1000);
};
