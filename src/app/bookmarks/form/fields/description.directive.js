import _ from 'lodash';

import { Description, validators, handleError } from '../../bookmark/fields';

export default function fieldDescriptionDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: linkFn
  };
}

function linkFn(scope, elements, attrs, ctrl) {
  if (ctrl === undefined) { return; }

  ctrl.$render = () => {
    if (_.isUndefined(ctrl.$viewValue)) {
      ctrl.$setViewValue('');
    }
  };

  ctrl.$parsers.push(raw => handleError(Description.fromString(raw), () => undefined));

  validators.description.forEach(validator => {
    ctrl.$validators[validator.key] = v => Description.assertType(v) && validator.pred(v);
  });

  ctrl.$formatters.push(value => Description.assertType(value) ? value.toString() : '');
}
