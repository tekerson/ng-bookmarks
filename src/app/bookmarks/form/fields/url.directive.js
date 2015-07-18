import * as Url from '../../bookmark/url';

export default function fieldUrlDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: (scope, element, attrs, ctrl) => {
      if (ctrl === undefined) { return; }

      ctrl.$parsers.push(v => {
        if (v === '') { return null; }
        let value = Url.fromString(v);
        if (value instanceof Url.ParseError) { return undefined; }
        return value;
      });

      ctrl.$validators.protocol = value =>
        (value === null) || !(value instanceof Url.InvalidProtocolError);

      ctrl.$formatters.push(value =>
        Url.assertType(value) ? value.toString() : '');
    }
  };
}
