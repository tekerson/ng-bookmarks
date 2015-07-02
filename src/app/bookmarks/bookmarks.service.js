import _ from 'lodash';

export default function BookmarksService(api) {
  this.bookmarks = [];

  this.list = () =>
    api.list().then(bms => {
      this.bookmarks = bms;
    });

  this.remove = (id) =>
    api.remove(id).then(() => {
      _.remove(this.bookmarks, {id: id});
    });

  this.create = fields =>
    api.create(fields).then(result => {
      _.remove(this.bookmarks, {id: result.id});
      this.bookmarks.push(result);
    });

  this.update = (id, fields) =>
    api.update(id, fields).then(result => {
      _.remove(this.bookmarks, {id: result.id});
      this.bookmarks.push(result);
    });

}
