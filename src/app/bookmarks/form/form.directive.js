import FormCtrl from './form.controller';

export default function formDirective() {
  return {
    templateUrl: 'app/bookmarks/form/form.html',
    controller: ['bookmarksService', 'bookmarksSelector', 'eventBus', FormCtrl],

    scope: {},
    controllerAs: 'vm',
    bindToController: true
  };
}
