import FormCtrl from './form.controller';

export default function formDirective() {
  return {
    templateUrl: 'app/components/bookmarks/form/form.html',
    controller: ['Bookmarks.Service', 'Bookmarks.Select', 'EventBus', FormCtrl],

    scope: {},
    controllerAs: 'vm',
    bindToController: true
  };
}
