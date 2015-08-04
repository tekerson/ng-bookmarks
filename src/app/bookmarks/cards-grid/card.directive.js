export default function CardDirective() {
  return {
    scope: {
      bookmark: '=',
      isSelected: '=',
      index: '=',
      delete: '&onDeleteClick',
      select: '&onSelectClick'
    },
    template: `
      <div class="bookmark-card"
           ng-class="{ 'selected': isSelected }">
        <div class="content">
          <button class="delete-btn" ng-click="delete()"></button>
          <button class="edit-btn" ng-click="select()"></button>
          <h3>
            <span class="list-index" ng-bind="index + 1"></span>
            {{bookmark.fields.title.toString()}}
          </h3>
          <p ng-bind="bookmark.fields.description">??</p>
          <p>
          <a ng-href="{{bookmark.fields.url.toString()}}"
            ng-bind="bookmark.fields.url">??</a></p>
        </div>
      </div>
    `
  };
}
