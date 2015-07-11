import CardsGridCtrl from './cards-grid.controller';

import * as Id from '../bookmark/id';
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

  it('is not reversed by default', () => {
    expect(ctrl.isReversed).toBe(false);
  });

  it('changes to reversed when `reverse` is called', () => {
    ctrl.reverse();

    expect(ctrl.isReversed).toBe(true);
  });

  it('alternates back to not reversed', () => {
    ctrl.reverse();
    ctrl.reverse();

    expect(ctrl.isReversed).toBe(false);
  });

  it('refreshes the bookmarks', () => {
    ctrl.refresh();

    expect(bookmarks.list).toHaveBeenCalled();
  });

  it('removes bookmarks by ID', () => {
    let id = Id.fromString('123');
    ctrl.remove(id);

    expect(bookmarks.remove).toHaveBeenCalledWith(id);
  });

  it('selects bookmarks', () => {
    let bookmark = Bookmark.fromJSON({
      "id": 123,
      "url": "http://bar.com/",
      "title": "Foo",
      "description": "This is a description"
    });
    ctrl.select(bookmark);

    expect(selector.select).toHaveBeenCalledWith(bookmark);
  });

});
