'use strict';

const toDoForm = document.querySelector('#todos form');
const toDoInput = document.querySelector('#todos form input');
const todoList = document.querySelector('#todos .todo-list');
const todoButton = document.querySelector('#todos button');

let toDos = [];

const TODO_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODO_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDos();
}

function createTodo(newTodo) {
  if (newTodo.text === '') {
    toDoInput.focus();
    return;
  } else {
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    const button = document.createElement('button');
    span.innerText = newTodo.text;
    button.innerText = '✖';

    button.addEventListener('click', deleteTodo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
    li.scrollIntoView({ block: 'center' });
  }
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };

  toDoInput.value = '';
  createTodo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}

function showTodo() {
  const wrapper = document.querySelector('.todos-wrapper');
  wrapper.classList.toggle('showTodo');
}

const savedToDos = localStorage.getItem(TODO_KEY, toDos);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(createTodo);
}

toDoForm.addEventListener('submit', handleTodoSubmit);

todoButton.addEventListener('click', showTodo);
