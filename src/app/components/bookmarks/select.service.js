export default class BookmarksSelectService {
  constructor(events) {
    this.events = events;

    this._selected = undefined;
    this._subject = `selected-${Math.random()}`;
  }

  get selectedSubject() {
    return this._subject;
  }

  select(bookmark) {
    this._selected = bookmark;
    this._notify();
  }

  deselect() {
    this._selected = undefined;
    this._notify();
  }

  isSelected(bookmark) {
    return angular.equals(this._selected, bookmark);
  }

  _notify() {
    this.events.$broadcast(this.selectedSubject, this._selected);
  }
}
