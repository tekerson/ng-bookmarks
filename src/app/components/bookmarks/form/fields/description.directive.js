import _ from 'lodash';

import { Description, validators } from '../../bookmark/fields';

export default function fieldDescriptionDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: linkFn
  };
}

function linkFn(scope, elements, attrs, ctrl) {
  if (ctrl === undefined) { return; }

  ctrl.$parsers.push(value => Description.fromString(value).or(undefined));

  validators.description.forEach(validator => {
    ctrl.$validators[validator.key] = v => !_.isUndefined(v) && validator.pred(v);
  });

  ctrl.$formatters.push(value => value && value.toString());
}
