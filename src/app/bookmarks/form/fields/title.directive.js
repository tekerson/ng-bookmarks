import * as Title from '../../bookmark/title';

export default function fieldTitleDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: (scope, element, attrs, ctrl) => {
      if (ctrl === undefined) { return; }

      ctrl.$parsers.push(v => v === '' ? null : Title.fromString(v));

      ctrl.$validators.length = value =>
        (value === null) || !(value instanceof Title.TooShortError);
      ctrl.$validators.initCap = value =>
        (value === null) || !(value instanceof Title.NoInitCapError);

      ctrl.$formatters.push(value =>
        Title.assertType(value) ? value.toString() : '');
    }
  };
}
