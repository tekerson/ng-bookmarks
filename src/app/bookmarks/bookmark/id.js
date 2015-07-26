class Id {
  constructor(id) {
    if (!Number.isInteger(id)) {
      throw new Error('Expected:Integer');
    }
    this.id = id;
    return Object.freeze(this);
  }

  toJSON() {
    return this.id;
  }

  toString() {
    return this.id.toString();
  }

  equals(other) {
    return this.id === other.id;
  }
}

export function fromNumber(value) {
  if (!Number.isInteger(value)) {
    return new Error('Invalid:NonInteger');
  }
  return new Id(value);
}

export function fromString(value) {
  let id = parseFloat(value);
  if (isNaN(id)) {
    return new Error('Invalid:NonNumeric');
  }
  return fromNumber(id);
}

export var fromJSON = fromNumber;

export function assertType(obj) {
  return obj instanceof Id;
}
