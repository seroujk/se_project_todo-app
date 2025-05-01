class Popup {
  constructor({ popupSelector }) {
    // no need to save popupSelector in the "this" object because we only need it to find the popupElement
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscapeClose = (event) => {
      if (event.key === "Escape") {
        this.close();
      }
    };
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    this._popupElement.addEventListener("mousedown", (event) => {
      if (event.target === this._popupElement) {
        this.close();
      }
    });
  }
}

export default Popup;
