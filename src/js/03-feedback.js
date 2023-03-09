import throttle from 'lodash.throttle';
import storage from './storage';

const input = document.querySelector('.feedback-form');
const emailValue = document.querySelector('input');
const textlValue = document.querySelector('textarea');
const STORAGE_KEY = 'feedback-form-state';

const arrayData = storage.load(STORAGE_KEY);
const data = {};

if (arrayData) {
  emailValue.value = arrayData.email;
  textlValue.value = arrayData.message;
}

input.addEventListener('input', throttle(addLocalStor, 500));
input.addEventListener('submit', handleSubmit);

function addLocalStor(e) {
  e.preventDefault();
  data[e.target.name] = e.target.value;
  storage.save(STORAGE_KEY, data);
}

function handleSubmit(e) {
  e.preventDefault();
  console.log(storage.load(STORAGE_KEY));
  e.currentTarget.reset();
  storage.remove(STORAGE_KEY);
}
