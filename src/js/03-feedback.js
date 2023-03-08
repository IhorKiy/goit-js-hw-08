import throttle from 'lodash.throttle';
import storage from './storage';

const input = document.querySelector('.feedback-form');
const emailValue = document.querySelector('input');
const textlValue = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

// const arrayData = storage.load(STORAGE_KEY) || {};
const arrayData = storage.load(STORAGE_KEY);


if (arrayData) {
  emailValue.value = arrayData.email;
  textlValue.value = arrayData.message;
}

input.addEventListener('input', throttle(addLocalStor, 500));
input.addEventListener('submit', throttle(handleSubmit, 500));

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
  console.log(arrayData);
  // console.log(`Email: ${email.value}, Message: ${message.value}`);
  e.currentTarget.reset();
  storage.remove(STORAGE_KEY); 
}
