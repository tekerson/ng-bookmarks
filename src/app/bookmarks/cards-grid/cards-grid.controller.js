export default class CardsGridCtrl {
  constructor(bookmarksService, selectorService) {
    this.bookmarkService = bookmarksService;
    this.selected = selectorService;

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
