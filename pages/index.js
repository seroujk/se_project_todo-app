import {
  initialTodos,
  validationConfig,
  todoConfig,
} from "../utils/constants.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopupEl.querySelector(".popup__form");

//Creating an instance of the Class TodoCounter
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const handleCheck = (completed) => {
  todoCounter.updateCompleted(completed);
};

const handleDelete = (deleted) => {
  todoCounter.updateTotal(deleted);
};

const generateTodo = (data, todoConfig) => {
  const todo = new Todo(
    data,
    todoConfig.todoTemplateSelector,
    todoConfig,
    handleCheck,
    handleDelete
  );
  const todoElement = todo.getView();
  return todoElement;
};

const renderTodos = (item, todoConfig) => {
  const todo = generateTodo(item, todoConfig);
  return todo;
};

//Creating an instance of the Class Section
const initalSection = new Section({
  items: initialTodos,
  renderer: renderTodos,
  containerSelector: todoConfig.todoContainer,
});

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();

//Creating an instance of the Class PopupWithForm
const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;
    const id = uuidv4();
    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const values = { name, date, id };
    initalSection.addItem(renderTodos(values, todoConfig));
    //Increment total number of Todos
    todoCounter.updateTotal(true);
    addTodoPopup.close();
    formValidator.resetValidation();
  },
});

document.addEventListener("DOMContentLoaded", () => {
  initalSection.renderItems();
});

addTodoPopup.setEventListeners();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});
