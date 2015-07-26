import * as Id from './id';
import * as Fields from './fields';

class Bookmark {
  constructor(id, fields) {
    if (!Id.assertType(id)) {
      return new TypeError('Expected:Id');
    }

    if (!Fields.assertType(fields)) {
      return new TypeError('Expected:Fields');
    }

    this.id = id;
    this.fields = fields;
    return Object.freeze(this);
  }
}

export function fromJSON(obj) {
  return new Bookmark(
    Id.fromString(obj.id),
    Fields.fromJSON(obj));
}

export function fromObject(obj) {
  return new Bookmark(obj.id, obj.fields);
}

export function assertType(obj) {
  return obj instanceof Bookmark;
}
