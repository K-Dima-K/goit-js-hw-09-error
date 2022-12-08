import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  input: document.querySelector('input#datetime-picker'),
  startEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

refs.startEl.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0] <= Date.now()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    refs.startEl.removeAttribute('disabled');
  },
};

const flatpickrResult = flatpickr(refs.input, options);

function onStartClick() {
  let isActive = false;

  if (isActive) {
    return;
  }

  isActive = true;

  intervalId = setInterval(() => {
    const deltaTime = flatpickrResult.selectedDates[0] - Date.now();
    const time = convertMs(deltaTime);
    updateInterface(time);

    // console.log(`${days}:${hours}:${minutes}:${seconds}`);
    if (deltaTime < 1000) {
      return stop();
    }
  }, 1000);
}

function stop() {
  clearInterval(this.intervalId);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updateInterface({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = `${days}`;
  refs.hoursEl.textContent = `${hours}`;
  refs.minutesEl.textContent = `${minutes}`;
  refs.secondsEl.textContent = `${seconds}`;
}

refs.startEl.addEventListener('click', onStartClick);
