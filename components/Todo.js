import { v4 as uuidv4 } from "https://jspm.dev/uuid";

class Todo {
  constructor(data, selector, todoConfig) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._todoConfig = todoConfig;
  }

  _setEventListeners(todoDeleteBtn, todoElement) {
    // Add an event listener to the delete button of each todo item
    todoDeleteBtn.addEventListener("click", () => {
      todoElement.remove();
    });
    // Nothing added for the checkbox button as the browser handles that automatically
  }

  getView() {
    const todoElement = this._templateElement.content
      .querySelector(this._todoConfig.todoClass)
      .cloneNode(true);

    const todoNameEl = this._getNameEl(todoElement);
    const todoCheckboxEl = this._getCheckboxEl(todoElement);
    const todoLabelEl = this._getLabelEl(todoElement);
    const todoDateEl = this._getDateEl(todoElement);
    const todoDeleteBtnEl = this._getDeleteBtnEl(todoElement);

    todoNameEl.textContent = this._data.name;
    todoCheckboxEl.checked = this._data.completed;
    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabelEl.setAttribute("for", `todo-${uuidv4()}`);

    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
    this._setEventListeners(todoDeleteBtnEl, todoElement);
    return todoElement;
  }

  _getNameEl(todoElement) {
    return todoElement.querySelector(this._todoConfig.todoNameElement);
  }

  _getCheckboxEl(todoElement) {
    return todoElement.querySelector(this._todoConfig.todoCheckboxEl);
  }

  _getLabelEl(todoElement) {
    return todoElement.querySelector(this._todoConfig.todoLabel);
  }

  _getDateEl(todoElement) {
    return todoElement.querySelector(this._todoConfig.todoDate);
  }

  _getDeleteBtnEl(todoElement) {
    return todoElement.querySelector(this._todoConfig.todoDeleteBtn);
  }
}

export default Todo;
