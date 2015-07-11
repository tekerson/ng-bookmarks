import Bookmarks from './bookmarks.service';

import * as Bookmark from './bookmark/bookmark.entity';
import * as Fields from './bookmark/fields';
import * as Id from './bookmark/id';

describe('The Bookmarks service', () => {
  let bookmarks, api;

  let $q, $rootScope;
  beforeEach(angular.mock.module('bookmarks'));
  beforeEach(inject((_$q_, _$rootScope_) => {
    $q = _$q_;
    $rootScope = _$rootScope_;
  }));

  beforeEach(() => {
    api = jasmine.createSpyObj('Api',
        ['list', 'create', 'remove', 'update']);
    bookmarks = new Bookmarks(api);

    api.list.and.returnValue($q.resolve([]));
    api.create.and.callFake((fields) => $q.resolve(mkBookmark(undefined, fields)));
    api.update.and.callFake((id, fields) => $q.resolve(mkBookmark(id, fields)));
    api.remove.and.returnValue($q.resolve());
  });

  describe('when the API has no bookmarks', () => {
    beforeEach(() => {
      bookmarks.list();
      $rootScope.$digest();
    });

    it('there are no bookmarks', () => {
      expect(bookmarks.bookmarks).toEqual([]);
    });

    describe('creating a bookmark', () => {
      let fields;
      beforeEach(() => {
        fields = mkFields();

        bookmarks.create(fields);
        $rootScope.$digest();
      });

      it('adds the bookmark to the bookmarks', () => {
        expect(bookmarks.bookmarks[0].fields).toBe(fields);
      });
    });
  });

  describe('when the API has bookmarks', () => {
    let bookmark;
    beforeEach(() => {
      bookmark = mkBookmark();
      api.list.and.returnValue($q.resolve([bookmark]));
      bookmarks.list();
      $rootScope.$digest();
    });

    it('there are bookmarks', () => {
      expect(bookmarks.bookmarks).toContain(bookmark);
    });

    describe('removing a bookmark', () => {
      beforeEach(() => {
        bookmarks.remove(bookmark.id);
        $rootScope.$digest();
      });

      it('removes it from the bookmarks', () => {
        expect(bookmarks.bookmarks).not.toContain(bookmark);
      });
    });

    describe('updating a bookmark', () => {
      let fields;
      beforeEach(() => {
        fields = mkFields();
        bookmarks.update(bookmark.id, fields);
        $rootScope.$digest();
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
