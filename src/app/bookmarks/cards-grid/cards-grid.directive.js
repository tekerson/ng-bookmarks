import _ from 'lodash';

export default function CardsGridDirective() {
  return {
    scope: {
      bms: '=bookmarks',
      selected: '=',
      delete: '=onDeleteClick',
      select: '=onSelectClick'
    },
    controllerAs: 'vm',
    bindToController: true,

    controller: function () {
      let reversed = false;

      this.reverse = () => {
        reversed = !reversed;
      };

      this.bookmarks = () => {
        let bms = _(this.bms)
          .sortBy((bm) => bm.fields.title);
        return (reversed ? bms.reverse() : bms).value();
      };

      this.isSelected = (bookmark) =>
        this.selected === bookmark;
    },

    template: `
      <button class="reverse-btn" ng-click="vm.reverse()"></button>
      <div class="bookmark-card-list">
        <div ng-if="!vm.bookmarks().length">No Bookmarks Found</div>
        <bm-card ng-repeat="bookmark in vm.bookmarks() track by bookmark.id"
                 index="$index"
                 bookmark="bookmark"
                 on-select-click="vm.select(bookmark)"
                 on-delete-click="vm.delete(bookmark)"
                 is-selected="vm.isSelected(bookmark)"></bm-card>
      </div>
    `
  };
}
