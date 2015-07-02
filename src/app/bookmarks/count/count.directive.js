export default function countDirective() {
  return {
    templateUrl: 'app/bookmarks/count/count.html',
    restrict: 'E',
    scope: {
      bookmarks: '='
    },
    controller: () => {},

    controllerAs: 'vm'
  };
}
