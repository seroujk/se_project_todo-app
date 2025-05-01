import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._popupFormElement = this._popupElement.querySelector(".popup__form");
    this._popupInputList = this._popupFormElement.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const inputValues = {};
    this._popupInputList.forEach((input) => {
      console.log(input);
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupFormElement.addEventListener("submit", (event) => {
      event.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }
}

export default PopupWithForm;
