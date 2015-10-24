import CardsGridCtrl from './cards-grid.controller';

import * as Bookmark from '../bookmark/bookmark.entity';

describe('The `CardsGrid` controller', () => {
  let ctrl, bookmarks, selector;
  beforeEach(() => {
    bookmarks = jasmine.createSpyObj('bookmarks',
        ['list', 'remove', 'create', 'update']);
    selector = jasmine.createSpyObj('selector',
        ['select', 'deselect', 'isSelected']);

    ctrl = new CardsGridCtrl(bookmarks, selector);
  });

  describe('displays a grid of bookmarks', () => {
    beforeEach(() => {
      bookmarks.list.and.returnValue([
        Bookmark.fromJSON({
          "id": 1,
          "url": "http://b.example.com/",
          "title": "B - Second",
          "description": "This is a description"
        }),
        Bookmark.fromJSON({
          "id": 2,
          "url": "http://a.example.com/",
          "title": "A - First",
          "description": "This is a description"
        })
      ]);
    });

    let isReversed = (bookmarks) => {
      return bookmarks[0].fields.title.title > bookmarks[1].fields.title.title;
    };

    it('is not reversed by default', () => {
      expect(isReversed(ctrl.bookmarks())).toBe(false);
    });

    it('changes to reversed when `reverse` is called', () => {
      ctrl.onReverseClick();

      expect(isReversed(ctrl.bookmarks())).toBe(true);
    });

    it('alternates back to not reversed', () => {
      ctrl.onReverseClick();
      ctrl.onReverseClick();

      expect(isReversed(ctrl.bookmarks())).toBe(false);
    });
  });

  it('refreshes the bookmarks', () => {
    ctrl.onRefreshClick();

    expect(bookmarks.list).toHaveBeenCalled();
  });

  it('removes bookmarks by ID', () => {
    let bookmark = Bookmark.fromJSON({
      "id": 123,
      "url": "http://bar.com/",
      "title": "Foo",
      "description": "This is a description"
    });
    ctrl.deleteBookmark(bookmark);

    expect(bookmarks.remove).toHaveBeenCalledWith(bookmark.id);
  });

  it('selects bookmarks', () => {
    let bookmark = Bookmark.fromJSON({
      "id": 123,
      "url": "http://bar.com/",
      "title": "Foo",
      "description": "This is a description"
    });
    ctrl.selectBookmark(bookmark);

    expect(selector.select).toHaveBeenCalledWith(bookmark);
  });

});
