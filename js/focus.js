'use strict';

const focusForm = document.querySelector('#focus');
const focusInput = document.querySelector('#focus-input');
const todayFocus = document.querySelector('.today-focus');
const focusWrap = document.querySelector('.focus-wrap');

function deleteFocus() {
  todayFocus.classList.toggle('visually-hidden');
  focusForm.classList.toggle('visually-hidden');
  localStorage.removeItem('focus');
  const text = document.querySelector('.focus-wrap p');
  const button = document.querySelector('.focus-wrap button');
  text.remove();
  button.remove();
  focusInput.value = '';
  focusInput.focus();
}

function createFocus(input) {
  focusForm.classList.toggle('visually-hidden');
  todayFocus.classList.toggle('visually-hidden');
  const focus = document.createElement('p');
  focus.innerText = input;
  focusWrap.appendChild(focus);
  const remove = document.createElement('button');
  remove.innerText = '✖';
  focusWrap.appendChild(remove);
  remove.addEventListener('click', deleteFocus);
}

function handleFocus(event) {
  event.preventDefault();
  const input = focusInput.value;
  localStorage.setItem('focus', input);
  createFocus(input);
}

const savedFocus = localStorage.getItem('focus');

if (savedFocus) {
  createFocus(savedFocus);
} else {
  focusForm.addEventListener('submit', handleFocus);
}
