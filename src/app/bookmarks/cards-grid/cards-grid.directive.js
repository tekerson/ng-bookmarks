import CardsGridCtrl from './cards-grid.controller';

export default function CardsGridDirective() {
  return {
    templateUrl: 'app/bookmarks/cards-grid/cards-grid.html',
    controller: ['bookmarksService', 'bookmarksSelector', CardsGridCtrl],

    scope: {
      bookmarks: '='
    },
    controllerAs: 'vm'
  };
}
