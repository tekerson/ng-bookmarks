import Service from './service';
import SelectService from './select.service';
import Api from './service.api';

import cardsGridDirective from './cards-grid/cards-grid.directive';
import countDirective from './count/count.directive';
import formDirective from './form/form.directive';

import fieldDescriptionDirective from './form/fields/description.directive';
import fieldTitleDirective from './form/fields/title.directive';
import fieldUrlDirective from './form/fields/url.directive';

export default angular.module('bookmarks', ['restangular'])
  .service('Bookmarks.Service',
      ['Bookmarks.Api', Service])

  .service('Bookmarks.Select',
      ['EventBus', SelectService])

  .service('Bookmarks.Api',
      ['Restangular', '$q', Api])

  .factory('EventBus', ['$rootScope', (v) => v])

  .config(['RestangularProvider', function (Restangular) {
    Restangular.setBaseUrl('http://localhost:3002');
  }])

  .directive('bmCards', cardsGridDirective)
  .directive('bmCount', countDirective)
  .directive('bmForm', formDirective)

  .directive('bmBookmarkDescription', fieldDescriptionDirective)
  .directive('bmBookmarkTitle', fieldTitleDirective)
  .directive('bmBookmarkUrl', fieldUrlDirective)
;
