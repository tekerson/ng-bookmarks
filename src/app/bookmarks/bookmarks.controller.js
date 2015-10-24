export default class BookmarksController {
  constructor(bookmarkService, selectorService) {
    bookmarkService.list();
    this.bookmarks = bookmarkService;
    this.selector = selectorService;

    this.deleteBookmark = (bookmark) => {
      bookmarkService.remove(bookmark.id);
    };

    this.selectBookmark = (bookmark) => {
      selectorService.select(bookmark);
    };
  }
}
