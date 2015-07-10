import _ from 'lodash';

import { Title, validators, handleError } from '../../bookmark/fields';

export default function fieldTitleDirective() {
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

  ctrl.$parsers.push(raw => handleError(Title.fromString(raw), () => undefined));

  validators.title.forEach(validator => {
    ctrl.$validators[validator.key] = v => Title.assertType(v) && validator.pred(v);
  });

  ctrl.$formatters.push(value => Title.assertType(value) ? value.toString() : '');
}
