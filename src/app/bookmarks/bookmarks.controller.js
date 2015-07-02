export default class BookmarksController {
  constructor(bookmarkService) {
    bookmarkService.list();
    this.bookmarks = bookmarkService;
  }
}
