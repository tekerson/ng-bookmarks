export default class CountCtrl {
  constructor (BookmarksService) {
    this.bookmarks = BookmarksService.bookmarks;
  }
}
