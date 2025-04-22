import {initialTodos, validationConfig, todoConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector(".popup__form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todoTemplate = document.querySelector("#todo-template");
const todosList = document.querySelector(".todos__list");

const formValidator = new FormValidator(validationConfig,addTodoForm);

const openModal = (modal) => {
  modal.classList.add("popup_visible");
  formValidator.enableValidation();
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
  
};

// The logic in this function is now handled in the Todo class.
const generateTodo = (data,todoConfig) => {
     const todo = new Todo(data, "#todo-template",todoConfig);
     const todoElement = todo.getView();
     return todoElement;
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const values = { name, date };
  const todo = generateTodo(values,todoConfig);
  todosList.append(todo);
  closeModal(addTodoPopup);
  formValidator.resetValidation();
});

initialTodos.forEach((item) => {
  const todo = generateTodo(item,todoConfig);
  todosList.append(todo);
});
