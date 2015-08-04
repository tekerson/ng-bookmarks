export default class BookmarksController {
  constructor(bookmarkService, selectorService) {
    bookmarkService.list();
    this.bookmarks = bookmarkService;
    this.selector = selectorService;
  }
}
