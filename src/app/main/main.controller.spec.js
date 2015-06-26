describe('MainController', () => {

  let ctrl;

  beforeEach(angular.mock.module('ngBookmarks'));

  beforeEach(inject(($controller) => {
    ctrl = $controller('MainController');
  }));

  it('should define more than 5 awesome things', () => {
    expect(angular.isArray(ctrl.awesomeThings)).toBeTruthy();
    expect(ctrl.awesomeThings.length > 5).toBeTruthy();
  });

  it('should define the timestamp the project was created', () => {
    expect(angular.isNumber(ctrl.creationDate)).toBeTruthy();
  });

});
