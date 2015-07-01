import * as Bookmark from '../bookmark/bookmark.entity';

describe('The `cards-grid` directive', () => {
  let scope, compile;

  function create() {
    let tpl = angular.element('<bm-cards bookmarks="vm.bookmarks"></bm-cards>');
    let el = compile(tpl)(scope);
    scope.$digest();
    return el;
  }

  beforeEach(angular.mock.module('ngBookmarks'));

  beforeEach(inject(($compile, $rootScope) => {
    scope = $rootScope.$new();
    compile = $compile;
  }));

  it('displays a "no bookmarks" message when the list is empty', () => {
    scope.vm = { bookmarks: [] };
    let el = create();
    expect(el.text()).toContain('No Bookmarks Found');
  });

  it('displays a a bookmark card for each bookmark', () => {
    let bookmarks = [Bookmark.fromJSON({
      id: '1',
      title: 'Title',
      url: 'http://example.com',
      description: 'This is a valid description'
    }), Bookmark.fromJSON({
      id: '2',
      title: 'Title',
      url: 'http://example.com',
      description: 'This is a valid description'
    })];

    scope.vm = { bookmarks };
    let el = create();
    let cards = el[0].getElementsByClassName('bookmark-card');

    expect(cards.length).toBe(2);
  });

});

