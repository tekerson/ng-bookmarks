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
    // throw new Error('notNumber');
    return null;
  }
  return new Id(id);
}

export function assertType(obj) {
  return obj instanceof Id;
}