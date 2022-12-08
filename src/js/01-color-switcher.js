const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.stop.setAttribute('disabled', true);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.body.style.backgroundColor = getRandomHexColor();
}

function onStartClick() {
  intervalId = setInterval(changeColor, 1000);
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled');
}

function onStopClick() {
  clearInterval(intervalId);
  refs.stop.setAttribute('disabled', true);
  refs.start.removeAttribute('disabled');
}

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);
