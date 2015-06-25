import _ from 'lodash';
import { Either } from '../../../../lib/tek/either';

import * as Id from './id';
export { Id };

import * as Fields from './fields';

class Bookmark {
  constructor(id, fields) {
    this.id = Id.assertType(id)
      .mapLeft(err => { throw new Error(err); })
      .or(undefined);
    this.fields = Fields.assertType(fields)
      .mapLeft(err => { throw new Error(err); })
      .or(undefined);
    return Object.freeze(this);
  }
}

var mkBookmark = _.curry((...args) =>
    new Bookmark(...args), Bookmark.length);

export var fromJSON = obj =>
  Either.pure(mkBookmark)
    .apply(Id.fromString(obj.id))
    .apply(Fields.fromJSON(obj));

export var fromObject = obj =>
  new Bookmark(obj.id, obj.fields);
