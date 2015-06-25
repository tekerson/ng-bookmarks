import _ from 'lodash';

import { Either } from '../../../../lib/tek/either';

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
    return Either.left('notString');
  }
  return Either.right(new Description(value));
}

export function assertType(obj) {
  if (!(obj instanceof Description)) {
    return Either.left('Type Error: Expected Description');
  }
  return Either.right(obj);
}
