describe('The `count` directive', () => {
  let scope, compile;

  function create() {
    let tpl = angular.element('<bm-count bookmarks="vm.bookmarks"></bm-count>');
    let el = compile(tpl)(scope);
    scope.$digest();
    return el;
  }

  beforeEach(angular.mock.module('bookmarks', 'templates'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('displays 0 when there are no bookmarks', () => {
    scope.vm = { bookmarks: [] };
    let el = create();
    expect(el.text()).toContain('0');
  });

  it('displays the count of bookmarks', () => {
    scope.vm = { bookmarks: [{}, {}] };
    let el = create();
    expect(el.text()).toContain('2');
  });

});

