export default function CardsGridCtrl(bookmarks, selector) {
  this.isReversed = false;

  this.reverse = () => {
    this.isReversed = !this.isReversed;
  };

  this.refresh = bookmarks.list;
  this.remove = bookmarks.remove;

  this.select = selector.select;
  this.isSelected = selector.isSelected;
}
