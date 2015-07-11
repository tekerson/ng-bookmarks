import _ from 'lodash';

export default (parse, verify, validators) =>
  (scope, element, attrs, ctrl) => {
    if (ctrl === undefined) { return; }

    ctrl.$render = () => {
      if (_.isUndefined(ctrl.$viewValue)) {
        ctrl.$setViewValue('');
      }
    };

    ctrl.$parsers.push(raw => handleError(parse(raw), () => undefined));

    validators.forEach(validator => {
      ctrl.$validators[validator.key] = v => verify(v) && validator.pred(v);
    });

    ctrl.$formatters.push(value => verify(value) ? value.toString() : '');
  };

function handleError(value, onError) {
  if (value instanceof Error) {
    return onError(value);
  }
  return value;
}
