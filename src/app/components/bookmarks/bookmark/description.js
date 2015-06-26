import _ from 'lodash';

class Description {
  constructor(description) {
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

export function fromString(value) {
  if (!_.isString(value)) {
    return null;
  }
  return new Description(value);
}

export function assertType(obj) {
  return obj instanceof Description;
}
