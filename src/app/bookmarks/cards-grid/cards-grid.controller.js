export default function CardsGridCtrl(bookmarks, selector) {
  this.isReversed = false;

  this.reverse = () => {
    this.isReversed = !this.isReversed;
  };

  this.refresh = () => {
    bookmarks.list();
  };

  this.remove = (id) => {
    bookmarks.remove(id);
  };

  this.select = (bookmark) => {
    selector.select(bookmark);
  };
}
