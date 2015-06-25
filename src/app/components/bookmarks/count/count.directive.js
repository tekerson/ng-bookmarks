import CountCtrl from './count.controller';

export default function countDirective() {
  return {
    templateUrl: 'app/components/bookmarks/count/count.html',
    controller: ['Bookmarks.Service', CountCtrl],
    restrict: 'E',

    scope: {},
    controllerAs: 'vm',
    bindToController: true
  };
}
