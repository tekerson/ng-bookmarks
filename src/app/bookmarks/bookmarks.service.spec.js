import Bookmarks from './bookmarks.service';

import Q from 'q';

import { default as MockApi, mkBookmark, mkFields } from './bookmarks.api.mock';

describe('The Bookmarks service', () => {
  let bookmarks, api;

  beforeEach(() => {
    api = new MockApi([]);
    bookmarks = new Bookmarks(api);
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

        bookmarks.create(fields).then(done);
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
        bookmarks.remove(bookmark.id).done(done);
      });

      it('removes it from the bookmarks', () => {
        expect(bookmarks.bookmarks).not.toContain(bookmark);
      });
    });

    describe('updating a bookmark', () => {
      let fields;
      beforeEach((done) => {
        fields = mkFields();
        bookmarks.update(bookmark.id, fields).done(done);
      });
      it('updates the fields of the bookmark in the bookmarks', () => {
        expect(bookmarks.bookmarks[0].fields).toBe(fields);
      });
    });
  });
});
