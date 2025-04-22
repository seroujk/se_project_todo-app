import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

class Todo {
  constructor(data, selector,todoConfig) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._todoConfig = todoConfig;
  }

  _setEventListeners(todoDeleteBtn, todoElement){
    // Add an event listener to the delete button of each todo item
    todoDeleteBtn.addEventListener("click", () =>{
        todoElement.remove();
          });
    // Nothing added for the checkbox button as the browser handles that automatically      
  }

 

  getView() {
    const todoElement = this._templateElement.content
      .querySelector(this._todoConfig.todoClass)
      .cloneNode(true);
    const todoNameEl = todoElement.querySelector(this._todoConfig.todoNameElement);
    const todoCheckboxEl = todoElement.querySelector(this._todoConfig.todoCheckboxEl);
    const todoLabel = todoElement.querySelector(this._todoConfig.todoLabel);
    const todoDate = todoElement.querySelector(this._todoConfig.todoDate);
    const todoDeleteBtn = todoElement.querySelector(this._todoConfig.todoDeleteBtn);
    todoNameEl.textContent = this._data.name;
    todoCheckboxEl.checked = this._data.completed;
    todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${uuidv4()}`);
     
    const dueDate = new Date(this._data.date);
  if (!isNaN(dueDate)) {
    todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`;
  }
     this._setEventListeners(todoDeleteBtn,todoElement);
    return todoElement;
  }


}

export default Todo;
