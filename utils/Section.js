import { todoConfig } from "./constants.js";

class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      //use the renderer to render the inital section
      //use the public addItem method to add the initial items to the DOM
      this.addItem(this._renderer(item, todoConfig));
    });
  }

  addItem(element) {
    this._containerSelector.append(element);
  }
}

export default Section;
