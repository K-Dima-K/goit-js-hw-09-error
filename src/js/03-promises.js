import Notiflix from 'notiflix';

const refs = {
  firstDelayEl: document.querySelector('[name = "delay"]'),
  delayStepEl: document.querySelector('[name = "step"]'),
  amountEl: document.querySelector('[name = "amount"]'),
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', onFormSubmit);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onFormSubmit(e) {
  e.preventDefault();

  let firstDelay = Number(refs.firstDelayEl.value);
  let delayStep = Number(refs.delayStepEl.value);
  let amount = Number(refs.amountEl.value);

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, i * delayStep + firstDelay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
  }
}
