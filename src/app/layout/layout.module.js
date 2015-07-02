import ShellDirective from './shell.directive';
import ShellController from './shell.controller';

import NavbarDirective from './navbar/navbar.directive';

export default angular.module('app.layout', [])
  .controller('ShellController', ShellController)
  .directive('layoutShell', ShellDirective)
  .directive('layoutNavbar', () => new NavbarDirective())
;
