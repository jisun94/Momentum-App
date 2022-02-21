'use strict';

const beforeLogin = document.querySelector('.before-login');
const afterLogin = document.querySelector('.after-login');
const loginForm = document.querySelector('.before-login form');
const loginInput = document.querySelector('.before-login #username');
const greeting = document.querySelector('h3#greeting');

function paintGreeting(userName) {
  beforeLogin.classList.add('visually-hidden');
  afterLogin.classList.remove('visually-hidden');
  greeting.innerHTML = `Hello, ${userName}.`;
}

function handleUserName(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem('username', userName);
  paintGreeting(userName);
}

const savedUsername = localStorage.getItem('username');

if (savedUsername === null) {
  loginForm.addEventListener('submit', handleUserName);
} else {
  paintGreeting(savedUsername);
}
