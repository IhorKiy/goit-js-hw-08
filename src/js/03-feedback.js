import throttle from 'lodash.throttle';
import storage from './storage';

const input = document.querySelector('.feedback-form');
const emailValue = document.querySelector('input');
const STORAGE_KEY = 'feedback-form-state';

const arrayData = storage.load(STORAGE_KEY) || {};

console.log(arrayData);

input.addEventListener('input', throttle(addLocalStor, 500));
input.addEventListener('submit', throttle(handleSubmit,500));
emailValue.addEventListener('input', throttle(updateOutput,500));


updateOutput()

function updateOutput() {
  const savedData = storage.load(STORAGE_KEY);
  if (savedData && savedData.email) {
    emailValue.value = savedData.email;
  }
  if (savedData && savedData.message) {
    input.elements.message.value = savedData.message;
  }
}

function addLocalStor(e) {
  e.preventDefault();
   arrayData[e.target.name] = e.target.value;
  storage.save(STORAGE_KEY, arrayData);
}

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  console.log(`Email: ${email.value}, Message: ${message.value}`);
  e.currentTarget.reset();
  storage.remove(STORAGE_KEY); // clear saved data from localStorage
}



