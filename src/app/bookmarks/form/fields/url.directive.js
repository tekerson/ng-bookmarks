import _ from 'lodash';

import { Url, validators, handleError } from '../../bookmark/fields';

export default function fieldUrlDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: linkFn
  };
}

function linkFn(scope, element, attrs, ctrl) {
  if (ctrl === undefined) { return; }

  ctrl.$render = () => {
    if (_.isUndefined(ctrl.$viewValue)) {
      ctrl.$setViewValue('');
    }
  };

  ctrl.$parsers.push(raw => handleError(Url.fromString(raw), () => undefined));

  validators.url.forEach(validator => {
    ctrl.$validators[validator.key] = v => Url.assertType(v) && validator.pred(v);
  });

  ctrl.$formatters.push(value => Url.assertType(value) ? value.toString() : '');
}
