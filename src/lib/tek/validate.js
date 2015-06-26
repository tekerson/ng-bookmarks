export var Validator = (key, pred) =>
  Object.freeze({
    key: key,
    pred: pred
  });

export var errors = (validators, input) =>
  validators.reduce((acc, validator) => {
    if (!validator.pred(input)) {
      acc.push(validator.key);
    }
    return acc;
  }, []);
