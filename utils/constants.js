const initialTodos = [
  {
    name: "Read the sprint's theory",
    completed: true,
    date: new Date(),
  },
  {
    name: "Read project instructions",
    completed: false,
    date: new Date(),
  },
  {
    name: "Complete project",
    completed: false,
    date: new Date(),
  },
];

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  errorClass: "popup__error_visible",
  inputErrorClass: "popup__input_type_error",
  inactiveButtonClass: "button_disabled",
};

// A more scalable approach to the todo element instead of hardcoding the class names
const todoConfig = {
  todoClass: ".todo",
  todoNameElement: ".todo__name",
  todoCheckboxEl: ".todo__completed",
  todoLabel: ".todo__label",
  todoDate: ".todo__date",
  todoDeleteBtn: ".todo__delete-btn",
};

export { initialTodos, validationConfig, todoConfig };
