class Todo {
  constructor(data, selector, todoConfig, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._todoConfig = todoConfig;
    this._handleCheck = handleCheck;
    this._completed = data.completed;
    this._handleDelete = handleDelete;
  }

  _setEventListeners(todoDeleteBtnEl, todoCheckboxEl, todoElement) {
    todoDeleteBtnEl.addEventListener("click", () => {
      todoElement.remove();
      this._todoElement = null;
      this._handleDelete(false);
      if (this._completed) {
        this._handleCheck(false);
      }
    });
    todoCheckboxEl.addEventListener("change", (event) => {
      const isChecked = event.target.checked;
      this._completed = isChecked;
      this._handleCheck(isChecked);
    });
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
    todoLabelEl.setAttribute("for", `todo-${this._data.id}`);
    this._generateDateEl(todoDateEl);

    this._setEventListeners(todoDeleteBtnEl, todoCheckboxEl, todoElement);
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

  _generateDateEl(todoDateEl) {
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDateEl.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  _getDeleteBtnEl(todoElement) {
    return todoElement.querySelector(this._todoConfig.todoDeleteBtn);
  }
}

export default Todo;
