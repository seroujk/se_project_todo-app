const initialTodos = [
  {
    id: "7cec7373-681b-49d9-b065-021d61a69d03",
    name: "Read the sprint's theory",
    completed: true,
    date: new Date(),
  },
  {
    id: "a7bfd5ef-37cc-4fa6-89f2-cac098a8aeba",
    name: "Read project instructions",
    completed: false,
    date: new Date(),
  },
  {
    id: "aa486839-63ab-437f-b8a2-29ab217dff4f",
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
  todoContainer: ".todos__list",
  todoTemplateSelector:"#todo-template",
  todoClass: ".todo",
  todoNameElement: ".todo__name",
  todoCheckboxEl: ".todo__completed",
  todoLabel: ".todo__label",
  todoDate: ".todo__date",
  todoDeleteBtn: ".todo__delete-btn",
};

export { initialTodos, validationConfig, todoConfig };
