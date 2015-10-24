export default function countDirective() {
  return {
    restrict: 'E',
    scope: {
      bookmarks: '='
    },
    template: `
      <span class="bookmark-count">{{bookmarks.length}}</span>
    `
  };
}
