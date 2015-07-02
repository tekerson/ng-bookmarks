/* global malarkey:false, toastr:false, moment:false */
import config from './index.config';

import routerConfig from './index.route';

import runBlock from './index.run';
import MainController from './main/main.controller';
import GithubContributorService from './components/githubContributor/githubContributor.service';
import WebDevTecService from './components/webDevTec/webDevTec.service';
import MalarkeyDirective from './components/malarkey/malarkey.directive';

import './templates.module';
import './bookmarks/bookmarks.module';
import './layout/layout.module';

angular.module('ngBookmarks', ['templates', 'app.layout', 'ngRoute', 'ui.bootstrap', 'bookmarks'])
  .constant('malarkey', malarkey)
  .constant('toastr', toastr)
  .constant('moment', moment)
  .config(config)

  .config(routerConfig)

  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .controller('MainController', MainController)
  .directive('acmeMalarkey', () => new MalarkeyDirective(malarkey));
