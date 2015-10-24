import _ from 'lodash';

export default function CardsGridCtrl(bookmarks, selector) {
  let reversed = false;

  this.onReverseClick = () => {
    reversed = !reversed;
  };

  this.bookmarks = () => {
    let bms = _(bookmarks.list())
      .sortBy((bm) => bm.fields.title);
    return (reversed ? bms.reverse() : bms).value();
  };

  this.onRefreshClick = bookmarks.list;

  this.deleteBookmark = (bookmark) =>
    bookmarks.remove(bookmark.id);

  this.selectBookmark = selector.select;
}
