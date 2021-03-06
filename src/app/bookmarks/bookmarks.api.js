import * as Bookmark from './bookmark/bookmark.entity';

export default function BookmarksApiService(Restangular, $q) {
  let api = Restangular.all('bookmarks');

  this.list = () =>
    api.getList()
      .then(rows => rows.map(Bookmark.fromJSON).filter(Bookmark.isInstance));

  this.remove = (id) =>
    api.one(id).remove();

  this.create = (fields) => $q((resolve, reject) =>
    api.post(fields.toJSON())
      .then(Bookmark.fromJSON)
      .then(bookmark => (bookmark instanceof Error ? reject : resolve)(bookmark)));

  this.update = (id, fields) => $q((resolve, reject) =>
    api.one(id).customPUT(fields.toJSON())
      .then(Bookmark.fromJSON)
      .then(bookmark => (bookmark instanceof Error ? reject : resolve)(bookmark)));

}
