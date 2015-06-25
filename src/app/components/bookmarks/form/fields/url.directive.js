import _ from 'lodash';

import { Url, validators } from '../../bookmark/fields';

export default function fieldUrlDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: linkFn
  };
}

function linkFn(scope, element, attrs, ctrl) {
  if (ctrl === undefined) { return; }

  ctrl.$parsers.push(value => Url.fromString(value).or(undefined));

  validators.url.forEach(validator => {
    ctrl.$validators[validator.key] = v => !_.isUndefined(v) && validator.pred(v);
  });

  ctrl.$formatters.push(value => value && value.toString());
}
