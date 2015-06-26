import _ from 'lodash';

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
    return null;
  }
  let [protocol, rest] = value.split('://', 2);
  if (_.isEmpty(rest)) {
    return null;
  }
  let [domain, path] = rest.split('/', 2);
  return new Url(protocol, domain, path || '');
}

export function assertType(obj) {
  return obj instanceof Url;
}
