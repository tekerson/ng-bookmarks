import { Url, validators } from '../../bookmark/fields';

import link from './link';

export default function fieldUrlDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: link(Url.fromString, Url.assertType, validators.url)
  };
}
