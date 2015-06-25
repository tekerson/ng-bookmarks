import { Either } from '../../../lib/tek/either';
import * as Bookmark from './bookmark/bookmark.entity';

export default function BookmarksApiService(Restangular, $q) {
  let api = Restangular.all('bookmarks');

  this.list = () =>
    api.getList()
      .then(rows => Either.rights(rows.map(Bookmark.fromJSON)));

  this.remove = (id) =>
    api.one(id).remove();

  this.create = (fields) => $q((resolve, reject) =>
    api.post(fields.toJSON())
      .then(row => Bookmark.fromJSON(row).either(reject, resolve)));

  this.update = (id, fields) => $q((resolve, reject) =>
    api.one(id).customPUT(fields.toJSON())
      .then(row => Bookmark.fromJSON(row).either(reject, resolve)));

}
