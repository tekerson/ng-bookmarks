import _ from 'lodash';

import { Either } from '../../../../lib/tek/either';

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
    return Either.left('notString');
  }
  return Either.right(new Title(value));
}

export function assertType(obj) {
  if (!(obj instanceof Title)) {
    return Either.left('Type Error: Expected Title');
  }
  return Either.right(obj);
}
