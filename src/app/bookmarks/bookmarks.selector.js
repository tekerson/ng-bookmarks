export default class BookmarksSelector {
  constructor() {
    this._selected = undefined;

    this._selectedNotifier = new Notifier();
    this._deselectedNotifier = new Notifier();
  }

  onSelect(cb) {
    return this._selectedNotifier.subscribe(cb);
  }

  onDeselect(cb) {
    return this._deselectedNotifier.subscribe(cb);
  }

  select(bookmark) {
    this._selected = bookmark;
    this._selectedNotifier.notify(this._selected);
  }

  deselect() {
    this._selected = undefined;
    this._deselectedNotifier.notify(this._selected);
  }

  isSelected(bookmark) {
    return this._selected === bookmark;
  }

}

class Notifier {
  constructor() {
    this._listeners = [];
  }

  subscribe(callback) {
    this._listeners.push(callback);
    return () => {
      this._listeners = this._listeners.filter(listener => listener !== callback);
    };
  }

  notify(msg) {
    this._listeners.forEach(listener => listener(msg));
  }
}
