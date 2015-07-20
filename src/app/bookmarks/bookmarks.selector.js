export default function BookmarksSelector() {
  let selected;

  this.selected = () => selected;

  this.select = (bookmark) => {
    selected = bookmark;
  };

  this.deselect = () => {
    selected = undefined;
  };

  this.isSelected = (bookmark) => {
    return selected === bookmark;
  };

  this.withSelected = (whenSelected, whenEmpty) => {
    if (selected === undefined) {
      return whenEmpty();
    }
    return whenSelected(selected);
  };

}
