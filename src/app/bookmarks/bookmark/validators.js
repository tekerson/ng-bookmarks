import _ from 'lodash';

import { Validator } from 'tek/validate';

import * as Title from './title';
import * as Url from './url';
import * as Description from './description';

export default {
  title: [
    new Validator('length', value => Title.assertType(value) && value.title.length >= 3),
    new Validator('initCap', value => Title.assertType(value) &&
        !!value.title[0] &&
        value.title[0].toUpperCase() === value.title[0])
  ],

  url: [
    new Validator('protocol', value => Url.assertType(value) &&
        _.contains(['http', 'https'], value.protocol))
  ],

  description: [
    new Validator('length', value => _.isUndefined(value) || (Description.assertType(value) &&
          (_.isEmpty(value.description) || value.description.length >= 10)))
  ]
};
