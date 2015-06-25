import _ from 'lodash';

import { Either } from '../../../../lib/tek/either';

class Url {
  constructor(protocol, domain, path) {
    this.protocol = protocol;
    this.domain = domain;
    this.path = path;
    return Object.freeze(this);
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return `${this.protocol}://${this.domain}/${this.path}`;
  }
}

export function fromString(value) {
  if (!_.isString(value)) {
    return Either.left('notString');
  }
  let [protocol, rest] = value.split('://', 2);
  if (_.isEmpty(rest)) {
    return Either.left('noDomain');
  }
  let [domain, path] = rest.split('/', 2);
  return Either.right(new Url(protocol, domain, path || ''));
}

export function assertType(obj) {
  if (!(obj instanceof Url)) {
    // throw new Error('Type Error: Expected Url');
    return Either.left('Expected Url');
  }
  return Either.right(obj);
}
