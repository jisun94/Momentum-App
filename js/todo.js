'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

function createToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = newToDo;
  li.appendChild(span);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  createToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
