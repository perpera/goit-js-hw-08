import throttle from 'lodash.throttle';

const fbForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';
const emailInput = document.querySelector('input');
const messageInput = document.querySelector('textarea');

const saveInputData = throttle(() => {
  const inputData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(storageKey, JSON.stringify(inputData));
}, 500);

window.addEventListener('load', () => {
  const savedData = localStorage.getItem(storageKey);
  if (savedData) {
    const inputData = JSON.parse(savedData);
    emailInput.value = inputData.email;
    messageInput.value = inputData.message;
  }
});

emailInput.addEventListener('input', saveInputData);
messageInput.addEventListener('input', saveInputData);

document.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(storageKey);

  const inputData = {
    email: emailInput.value,
    message: messageInput.value,
  };

  console.log(inputData);

  emailInput.value = '';
  messageInput.value = '';
});
