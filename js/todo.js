'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

function deleteToDo(event) {
  const clickedToDo = event.target.parentNode;
  clickedToDo.remove();
}

function createToDo(newToDo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const button = document.createElement('button');
  span.innerHTML = newToDo;
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  createToDo(newToDo);
}

toDoForm.addEventListener('submit', handleToDoSubmit);
