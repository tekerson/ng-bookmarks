import { Title, validators } from '../../bookmark/fields';

import link from './link';

export default function fieldTitleDirective() {
  return {
    restrict: 'A',
    require: '?ngModel',
    link: link(Title.fromString, Title.assertType, validators.title)
  };
}
