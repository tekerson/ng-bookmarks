import * as Id from './id';
import * as Fields from './fields';

class Bookmark {
  constructor(id, fields) {
    this.id = id;
    this.fields = fields;
    return Object.freeze(this);
  }
}

function mkBookmark(id, fields) {
  if (!Id.assertType(id)) {
    return null;
  }

  if (!Fields.assertType(fields)) {
    return null;
  }

  return new Bookmark(id, fields);
}

export var fromJSON = obj =>
  mkBookmark(
    Id.fromString(obj.id),
    Fields.fromJSON(obj));

export var fromObject = obj =>
  mkBookmark(obj.id, obj.fields);
