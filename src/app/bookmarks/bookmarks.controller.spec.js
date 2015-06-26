describe('BookmarksController', function(){

  beforeEach(angular.mock.module('ngBookmarks'));

  it('should define more than 5 awesome things', inject(function($controller) {
    var vm = $controller('BookmarksController');

    expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
    expect(vm.awesomeThings.length > 5).toBeTruthy();
  }));
});
