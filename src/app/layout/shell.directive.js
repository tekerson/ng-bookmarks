export default function shellDirective() {
  return {
    templateUrl: 'app/layout/shell.html',
    restrict: 'EA',
    transclude: true,
    scope: true,
    controller: 'ShellController',
    controllerAs: 'vm'
  };
}

