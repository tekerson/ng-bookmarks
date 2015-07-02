import Service from './bookmarks.service';
import SelectorService from './bookmarks.selector';
import Api from './bookmarks.api';

import CardsGridDirective from './cards-grid/cards-grid.directive';
import CountDirective from './count/count.directive';
import FormDirective from './form/form.directive';

import FieldDescriptionDirective from './form/fields/description.directive';
import FieldTitleDirective from './form/fields/title.directive';
import FieldUrlDirective from './form/fields/url.directive';

import BookmarksController from './bookmarks.controller';

export default angular.module('bookmarks', ['restangular'])
  .service('bookmarksService',
      ['bookmarksApi', Service])

  .service('bookmarksSelector',
      ['eventBus', SelectorService])

  .service('bookmarksApi',
      ['Restangular', '$q', Api])

  .factory('eventBus', ['$rootScope', (v) => v])

  .config(['RestangularProvider', function (Restangular) {
    Restangular.setBaseUrl('http://localhost:3002');
  }])

  .controller('BookmarksController', ['bookmarksService', BookmarksController])

  .directive('bmCards', CardsGridDirective)
  .directive('bmCount', CountDirective)
  .directive('bmForm', FormDirective)

  .directive('bmBookmarkDescription', FieldDescriptionDirective)
  .directive('bmBookmarkTitle', FieldTitleDirective)
  .directive('bmBookmarkUrl', FieldUrlDirective)
;
