import * as Url from './url';
import * as Title from './title';
import * as Description from './description';

export { Url, Title, Description };

class BookmarkFields {
  constructor(url, title, description) {
    this.url = url;
    this.title = title;
    this.description = description;
  }

  set url(url) {
    if (!Url.assertType(url)) {
      throw new TypeError('Expected:Url');
    }

    this._url = url;
  }

  get url() {
    return this._url;
  }

  set title(title) {
    if (!Title.assertType(title)) {
      throw new TypeError('Expected:Title');
    }

    this._title = title;
  }

  get title() {
    return this._title;
  }

  set description(description) {
    if (!(description === null || Description.assertType(description))) {
      throw new TypeError('Expected:Description');
    }

    this._description = description;
  }

  get description() {
    return this._description;
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

export var fromObject = obj =>
  new BookmarkFields(obj.url, obj.title, obj.description);

export var fromJSON = obj =>
  new BookmarkFields(
    Url.fromJSON(obj.url),
    Title.fromJSON(obj.title),
    obj.description === null ? null : Description.fromJSON(obj.description));

export function assertType(obj) {
  return obj instanceof BookmarkFields;
}
