import { Either } from './either';

export var Validator = (key, pred) =>
  Object.freeze({
    key: key,
    pred: pred
  });

export var validate = validators => input =>
  validators.reduce((acc, validator) =>
    acc.bind(() => validator.pred(input) ? acc : Either.left(validator.key)),
    Either.right(input));
