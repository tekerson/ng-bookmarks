import _ from 'lodash';

class Url {
  constructor(protocol, domain, path) {
    if (!_.contains(['http', 'https'], protocol)) {
      return new InvalidProtocolError(protocol);
    }

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

export class UrlError extends Error {}

export class ConstructError extends UrlError {}
export class InvalidProtocolError extends ConstructError {}

export function fromString(value) {
  if (!_.isString(value)) {
    throw new TypeError('Expected:String');
  }
  let [protocol, rest] = value.split('://', 2);
  if (_.isEmpty(rest)) {
    return new NoDomainError();
  }
  let [domain, path] = rest.split('/', 2);
  return new Url(protocol, domain, path || '');
}

export var fromJSON = fromString;

export class ParseError extends UrlError {}
export class NoDomainError extends ParseError {}

export function assertType(obj) {
  return obj instanceof Url;
}
