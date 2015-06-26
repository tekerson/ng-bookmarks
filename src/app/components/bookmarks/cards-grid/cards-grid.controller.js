export default class CardsGridCtrl {
  constructor(BookmarksService, SelectService) {
    this.bookmarkService = BookmarksService;
    this.selected = SelectService;

    this.isReversed = false;
  }

  reverse() {
    this.isReversed = !this.isReversed;
  }

  refresh() {
    this.bookmarkService.list();
  }

  remove(id) {
    this.bookmarkService.remove(id);
  }

  select(bookmark) {
    this.selected.select(bookmark);
  }
}
