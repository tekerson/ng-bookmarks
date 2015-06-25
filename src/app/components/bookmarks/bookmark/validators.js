import _ from 'lodash';

import { Validator } from '../../../../lib/tek/validate';

export default {
  title: [
    new Validator('length', value => value.title.length >= 3),
    new Validator('initCap', value =>
        value.title[0] && value.title[0].toUpperCase() === value.title[0])
  ],

  url: [
    new Validator('protocol', value => _.contains(['http', 'https'], value.protocol))
  ],

  description: [
    new Validator('length', value => _.isEmpty(value.description) || value.description.length >= 10)
  ]
};
