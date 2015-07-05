import * as Fields from '../bookmark/fields';

export default class FormCtrl {
  constructor (bookmarksService, selectService, scope) {
    this.bookmarkService = bookmarksService;
    this.selectService = selectService;

    let selectedDeregister = selectService.onSelect(selected => {
      this.selected = selected;
      this.bookmark = selected.fields.toObject();
    });

    let deselectedDeregister = selectService.onDeselect(() => {
      this.selected = undefined;
      this.bookmark = {};
    });

    scope.$on('$destroy', selectedDeregister);
    scope.$on('$destroy', deselectedDeregister);
  }

  submit (form) {
    if (!form.$valid) {
      return;
    }

    let result;
    let fields = Fields.fromObject(this.bookmark);
    if (this.selected) {
      result = this.bookmarkService.update(this.selected.id, fields);
    } else {
      result = this.bookmarkService.create(fields);
    }

    result.then(() => this.cancel(form));
  }

  cancel (form) {
    this.selectService.deselect();
    this.bookmark = {};
    form.$setPristine();
  }

}
