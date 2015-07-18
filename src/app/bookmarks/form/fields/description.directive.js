import * as Description from '../../bookmark/description';

export default function fieldDescriptionDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: (scope, element, attrs, ctrl) => {
      if (ctrl === undefined) { return; }

      ctrl.$parsers.push((v) => v === '' ? null : Description.fromString(v));

      ctrl.$validators.length = value =>
        (value === null) || !(value instanceof Description.TooShortError);

      ctrl.$formatters.push(value =>
        Description.assertType(value) ? value.toString() : '');
    }
  };
}
