export class Either {
  static pure (value) {
    return Either.right(value);
  }

  static either (value) {
    if (value instanceof Either) {
      return value;
    }
    return Either.right(value);
  }

  static left (value) {
    return new Left(value);
  }

  static right (value) {
    return new Right(value);
  }

  static rights(eithers) {
    return eithers
      .filter(e => e.isRight())
      .map(e => e.either(undefined, a => a));
  }

}

class Right extends Either {
  constructor (value) {
    super();
    this._value = value;
    return Object.freeze(this);
  }

  map (f) {
    return Either.right(f(this._value));
  }

  mapLeft (f) {
    /*jshint unused:vars */
    return this;
  }

  apply (f) {
    return f.either(Either.left, v => Either.right(this._value(v)));
  }

  bind (f) {
    return f(this._value);
  }

  either (l, r) {
    return r(this._value);
  }

  or (b) {
    /*jshint unused:vars */
    return this._value;
  }

  isRight () {
    return true;
  }
}

class Left extends Either {
  constructor (value) {
    super();
    this._value = value;
    return Object.freeze(this);
  }

  map (f) {
    /*jshint unused:vars */
    return this;
  }

  mapLeft (f) {
    return Either.left(f(this._value));
  }

  apply (f) {
    /*jshint unused:vars */
    return this;
  }

  bind (f) {
    /*jshint unused:vars */
    return this;
  }

  either (l, r) {
    /*jshint unused:vars */
    return l(this._value);
  }

  or (b) {
    return b;
  }

  isRight () {
    return false;
  }
}
