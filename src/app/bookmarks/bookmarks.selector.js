export default class BookmarksSelector {
  constructor() {
    this.selected = undefined;
  }

  select(bookmark) {
    this.selected = bookmark;
  }

  deselect() {
    this.selected = undefined;
  }

  isSelected(bookmark) {
    return this.selected === bookmark;
  }

}
