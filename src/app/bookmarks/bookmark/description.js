import _ from 'lodash';

class Description {
  constructor(description) {
    if (!_.isString(description)) {
      throw new TypeError('Expected:String');
    }
    if (description.length < 10) {
      return new TooShortError(description.length);
    }

    this.description = description;
    return Object.freeze(this);
  }

  toJSON() {
    return this.description;
  }

  toString() {
    return this.description;
  }
}

export class DescriptionError extends Error {}

export class ConstructError extends DescriptionError {}
export class TooShortError extends ConstructError {}

export function fromString(value) {
  if (!_.isString(value)) {
    throw new TypeError('Expected:String');
  }
  return new Description(value);
}

export var fromJSON = fromString;

export function isInstance(obj) {
  return obj instanceof Description;
}
