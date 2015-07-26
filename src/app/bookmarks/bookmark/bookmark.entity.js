import * as Id from './id';
import * as Fields from './fields';

class Bookmark {
  constructor(id, fields) {
    if (!Id.isInstance(id)) {
      return new TypeError('Expected:Id');
    }

    if (!Fields.isInstance(fields)) {
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

export function isInstance(obj) {
  return obj instanceof Bookmark;
}
