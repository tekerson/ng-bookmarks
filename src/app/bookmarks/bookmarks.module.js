import service from './bookmarks.service';
import selectorService from './bookmarks.selector';
import api from './bookmarks.api';

import cardsGridDirective from './cards-grid/cards-grid.directive';
import countDirective from './count/count.directive';
import formDirective from './form/form.directive';

import fieldDescriptionDirective from './form/fields/description.directive';
import fieldTitleDirective from './form/fields/title.directive';
import fieldUrlDirective from './form/fields/url.directive';

import BookmarksController from './bookmarks.controller';

export default angular.module('bookmarks', ['restangular'])
  .service('bookmarksService',
      ['bookmarksApi', service])

  .service('bookmarksSelector',
      ['eventBus', selectorService])

  .service('bookmarksApi',
      ['Restangular', '$q', api])

  .factory('eventBus', ['$rootScope', (v) => v])

  .config(['RestangularProvider', function (Restangular) {
    Restangular.setBaseUrl('http://localhost:3002');
  }])

  .controller('BookmarksController', ['bookmarksService', BookmarksController])

  .directive('bmCards', cardsGridDirective)
  .directive('bmCount', countDirective)
  .directive('bmForm', formDirective)

  .directive('bmBookmarkDescription', fieldDescriptionDirective)
  .directive('bmBookmarkTitle', fieldTitleDirective)
  .directive('bmBookmarkUrl', fieldUrlDirective)
;
