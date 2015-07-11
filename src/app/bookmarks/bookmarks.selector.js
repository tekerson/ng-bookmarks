export default function BookmarksSelector() {
  this.selected = undefined;

  this.select = (bookmark) => {
    this.selected = bookmark;
  };

  this.deselect = () => {
    this.selected = undefined;
  };

  this.isSelected = (bookmark) => {
    return this.selected === bookmark;
  };
}
