import _ from 'lodash';

export default function BookmarksService(api) {
  let bookmarks = [];

  this.bookmarks = () => bookmarks;

  this.list = () =>
    api.list().then(bms => {
      bookmarks = bms;
    });

  this.remove = (id) =>
    api.remove(id).then(() => {
      _.remove(bookmarks, {id: id});
    });

  this.create = fields =>
    api.create(fields).then(result => {
      _.remove(bookmarks, {id: result.id});
      bookmarks.push(result);
    });

  this.update = (id, fields) =>
    api.update(id, fields).then(result => {
      _.remove(bookmarks, {id: result.id});
      bookmarks.push(result);
    });

}
