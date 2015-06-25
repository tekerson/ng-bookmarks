import _ from 'lodash';
import { Either } from '../../../../lib/tek/either';

import * as Url from './url';
import * as Title from './title';
import * as Description from './description';
import validators from './validators';
import { validate } from '../../../../lib/tek/validate';
export { Url, Title, Description, validators };

class BookmarkFields {
  constructor(url, title, description) {
    this.url = Url.assertType(url)
      .bind(validate(validators.url))
      .mapLeft(err => { throw new Error(err); })
      .or(undefined);
    this.title = Title.assertType(title)
      .bind(validate(validators.title))
      .mapLeft(err => { throw new Error(err); })
      .or(undefined);
    this.description = Description.assertType(description)
      .bind(validate(validators.description))
      .mapLeft(err => { throw new Error(err); })
      .or(undefined);
    return Object.freeze(this);
  }

  toObject() {
    return {
      url: this.url,
      title: this.title,
      description: this.description
    };
  }

  toJSON() {
    return this.toObject();
  }

}

var mkBookmarkFields = _.curry((...args) =>
    new BookmarkFields(...args), BookmarkFields.length);

export var fromObject = obj =>
  new BookmarkFields(obj.url, obj.title, obj.description);

export var fromJSON = obj =>
  Either.right(mkBookmarkFields)
      .apply(Url.fromString(obj.url))
      .apply(Title.fromString(obj.title))
      .apply(Description.fromString(obj.description));

export function assertType(obj) {
  if (!(obj instanceof BookmarkFields)) {
    return Either.left('Type Error: Expected Bookmark');
  }
  return Either.right(obj);
}
