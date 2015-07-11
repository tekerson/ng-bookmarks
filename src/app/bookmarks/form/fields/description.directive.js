import { Description, validators } from '../../bookmark/fields';

import link from './link';

export default function fieldDescriptionDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: link(Description.fromString, Description.assertType, validators.description)
  };
}
