export default (parse, verify, validators) =>
  (scope, element, attrs, ctrl) => {
    if (ctrl === undefined) { return; }

    ctrl.$parsers.push(raw => handleError(parse(raw), () => undefined));

    validators.forEach(validator => {
      ctrl.$validators[validator.key] = v => validator.pred(v);
    });

    ctrl.$formatters.push(value => verify(value) ? value.toString() : '');
  };

function handleError(value, onError) {
  if (value instanceof Error) {
    return onError(value);
  }
  return value;
}
