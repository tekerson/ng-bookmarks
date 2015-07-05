import FormCtrl from './form.controller';

export default function formDirective() {
  return {
    templateUrl: 'app/bookmarks/form/form.html',
    controller: ['bookmarksService', 'bookmarksSelector', '$scope', FormCtrl],

    scope: {},
    controllerAs: 'vm',
    bindToController: true
  };
}
