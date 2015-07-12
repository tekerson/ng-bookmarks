import Bookmarks from './bookmarks.service';

import * as Bookmark from './bookmark/bookmark.entity';
import * as Fields from './bookmark/fields';
import * as Id from './bookmark/id';

import Q from 'q';

describe('The Bookmarks service', () => {
  let bookmarks, api;

  beforeEach(() => {
    api = jasmine.createSpyObj('Api',
        ['list', 'create', 'remove', 'update']);
    bookmarks = new Bookmarks(api);

    api.list.and.returnValue(Q([]));
    api.create.and.callFake((fields) => Q(mkBookmark(undefined, fields)));
    api.update.and.callFake((id, fields) => Q(mkBookmark(id, fields)));
    api.remove.and.returnValue(Q());
  });

  describe('when the API has no bookmarks', () => {
    beforeEach(() => {
      bookmarks.list();
    });

    it('there are no bookmarks', () => {
      expect(bookmarks.bookmarks).toEqual([]);
    });

    describe('creating a bookmark', () => {
      let fields;
      beforeEach((done) => {
        fields = mkFields();

        bookmarks.create(fields)
          .then(done);
      });

      it('adds the bookmark to the bookmarks', () => {
        expect(bookmarks.bookmarks[0].fields).toBe(fields);
      });
    });
  });

  describe('when the API has bookmarks', () => {
    let bookmark;
    beforeEach((done) => {
      bookmark = mkBookmark();
      api.list.and.returnValue(Q([bookmark]));
      bookmarks.list()
        .done(done);
    });

    it('there are bookmarks', () => {
      expect(bookmarks.bookmarks).toContain(bookmark);
    });

    describe('removing a bookmark', () => {
      beforeEach((done) => {
        bookmarks.remove(bookmark.id)
          .done(done);
      });

      it('removes it from the bookmarks', () => {
        expect(bookmarks.bookmarks).not.toContain(bookmark);
      });
    });

    describe('updating a bookmark', () => {
      let fields;
      beforeEach((done) => {
        fields = mkFields();
        bookmarks.update(bookmark.id, fields)
          .done(done);
      });
      it('updates the fields of the bookmark in the bookmarks', () => {
        expect(bookmarks.bookmarks[0].fields).toBe(fields);
      });
    });
  });
});

function mkBookmark(id = undefined, fields = undefined) {
  mkBookmark.lastId += 1;
  return Bookmark.fromObject({
    id: id || Id.fromString(mkBookmark.lastId.toString()),
    fields: fields || mkFields()
  });
}
mkBookmark.lastId = 0;

function mkFields() {
  return Fields.fromJSON({
    title: 'Title-' + Math.random(),
    url: 'http://example.com/' + Math.random(),
    description: 'Description: ' + Math.random()
  });
}
