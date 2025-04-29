class Section {
  constructor(items, renderer, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  addItem(){
    
  }

  renderItems(){
    items.forEach((item) =>{
        item.renderer();
    });
  }
} 

export default Section;
