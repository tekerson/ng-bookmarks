import _ from 'lodash';

import * as Url from './url';
import * as Title from './title';
import * as Description from './description';
import validators from './validators';
import { errors } from '../../../../lib/tek/validate';
export { Url, Title, Description, validators };

class BookmarkFields {
  constructor(url, title, description) {
    this.url = url;
    this.title = title;
    this.description = description;
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

function mkBookmarkFields(url, title, description) {
  if (!Url.assertType(url) || !_.isEmpty(errors(validators.url, url))) {
    return new TypeError('Expected:Url');
  }

  if (!Title.assertType(title) || !_.isEmpty(errors(validators.title, title))) {
    return new TypeError('Expected:Title');
  }

  if (!Description.assertType(description) || !_.isEmpty(errors(validators.description, description))) {
    return new TypeError('Expected:Description');
  }

  return new BookmarkFields(url, title, description);
}

export var fromObject = obj =>
  mkBookmarkFields(obj.url, obj.title, obj.description);

export var fromJSON = obj =>
  mkBookmarkFields(
    Url.fromString(obj.url),
    Title.fromString(obj.title),
    Description.fromString(obj.description));

export function assertType(obj) {
  return obj instanceof BookmarkFields;
}
