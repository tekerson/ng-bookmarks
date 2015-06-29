import _ from 'lodash';

class Title {
  constructor(title) {
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

export function fromString(value) {
  if (!_.isString(value)) {
    return new TypeError('Expected:String');
  }
  return new Title(value);
}

export function assertType(obj) {
  return obj instanceof Title;
}
