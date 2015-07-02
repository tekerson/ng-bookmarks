export default function shellDirective() {
  return {
    templateUrl: 'app/layout/shell.html',
    restrict: 'EA',
    transclude: true,
    scope: {},
    controller: 'ShellController',
    controllerAs: 'vm'
  };
}

