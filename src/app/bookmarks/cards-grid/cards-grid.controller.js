export default function CardsGridCtrl(bookmarks, selector) {
  let reversed = false;

  this.isReversed = () => reversed;

  this.reverse = () => {
    reversed = !reversed;
  };

  this.refresh = bookmarks.list;
  this.remove = bookmarks.remove;

  this.select = selector.select;
  this.isSelected = selector.isSelected;
}
