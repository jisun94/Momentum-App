'use strict';

const toDoForm = document.querySelector('#todo-form');
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector('#todo-list');

let toDos = [];

const TODO_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function createToDoList(newToDo) {
  const li = document.createElement('li');
  li.id = newToDo.id;
  const span = document.createElement('span');
  const button = document.createElement('button');

  span.innerText = newToDo.text;
  button.innerText = '❌';

  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoInput.value = '';
  createToDoList(newToDoObj);
  toDos.push(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener('submit', handleToDoSubmit);

const savedToDos = localStorage.getItem(TODO_KEY, toDos);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(createToDoList);
}
