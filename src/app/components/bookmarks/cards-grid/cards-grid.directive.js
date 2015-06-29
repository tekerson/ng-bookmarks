import CardsGridCtrl from './cards-grid.controller';

export default function CardsGridDirective() {
  return {
    templateUrl: 'app/components/bookmarks/cards-grid/cards-grid.html',
    controller: ['Bookmarks.Service', 'Bookmarks.Select', CardsGridCtrl],

    scope: {
      bookmarks: '='
    },
    controllerAs: 'vm'
  };
}
