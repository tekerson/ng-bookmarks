import { Either } from '../../../../lib/tek/either';

class Id {
  constructor(id) {
    this.id = id;
    return Object.freeze(this);
  }

  toJSON() {
    return this.id;
  }

  toString() {
    return this.id.toString();
  }
}

export function fromString(value) {
  let id = parseInt(value, 10);
  if (isNaN(id)) {
    return Either.left('notNumber');
  }
  return Either.right(new Id(id));
}

export function assertType(obj) {
  if (!(obj instanceof Id)) {
    return Either.left('Type Error: Expected Id');
  }
  return Either.right(obj);
}
