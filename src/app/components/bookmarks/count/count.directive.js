export default function countDirective() {
  return {
    templateUrl: 'app/components/bookmarks/count/count.html',
    restrict: 'E',
    scope: {
      bookmarks: '='
    },
    controller: () => {},

    controllerAs: 'vm',
    bindToController: true
  };
}
