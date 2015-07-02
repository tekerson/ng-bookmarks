import _ from 'lodash';

import { Title, validators } from '../../bookmark/fields';

export default function fieldTitleDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: linkFn
  };
}

function linkFn(scope, element, attrs, ctrl) {
  if (ctrl === undefined) { return; }

  ctrl.$parsers.push(value => Title.fromString(value) || undefined);

  validators.title.forEach(validator => {
    ctrl.$validators[validator.key] = v => !_.isUndefined(v) && validator.pred(v);
  });

  ctrl.$formatters.push(value => value && value.toString());
}
