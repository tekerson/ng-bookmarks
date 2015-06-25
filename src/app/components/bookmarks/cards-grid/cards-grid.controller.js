export default class CardsGridCtrl {
  constructor(BookmarksService, SelectService) {
    this.bookmarks = BookmarksService;
    this.selected = SelectService;

    this.isReversed = false;
  }

  reverse() {
    this.isReversed = !this.isReversed;
  }
}
