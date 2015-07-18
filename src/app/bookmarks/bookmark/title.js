import _ from 'lodash';

class Title {
  constructor(title) {
    if (!_.isString(title)) {
      throw new TypeError('Expected:String');
    }
    if (title.length < 3) {
      return new TooShortError(title.length);
    }
    if (title[0].toUpperCase() !== title[0]) {
      return new NoInitCapError(title[0]);
    }

    this.title = title;
    return Object.freeze(this);
  }

  toJSON() {
    return this.title;
  }

  toString() {
    return this.title;
  }
}

export class TitleError extends Error {}

export class ConstructError extends TitleError {}
export class TooShortError extends ConstructError {}
export class NoInitCapError extends ConstructError {}

export function fromString(value) {
  return new Title(value);
}

export var fromJSON = fromString;

export function assertType(obj) {
  return obj instanceof Title;
}
