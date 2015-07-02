describe('LayoutShellController', () => {

  let ctrl;

  beforeEach(angular.mock.module('app.layout', 'templates'));

  beforeEach(inject(($controller) => {
    ctrl = $controller('ShellController');
  }));

  it('should define the timestamp the project was created', () => {
    expect(angular.isNumber(ctrl.creationDate)).toBeTruthy();
  });

});
