/* global moment:false */
import config from './index.config';

import routerConfig from './index.route';

import './templates.module';
import './bookmarks/bookmarks.module';
import './layout/layout.module';

angular.module('ngBookmarks', ['templates', 'app.layout', 'ngRoute', 'ui.bootstrap', 'bookmarks'])
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)
;
