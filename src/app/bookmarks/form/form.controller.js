import * as Fields from '../bookmark/fields';

export default class FormCtrl {
  constructor (bookmarksService, selectService, scope) {
    this.bookmarkService = bookmarksService;
    this.selectService = selectService;

    scope.$watch(() => selectService.selected, selected => {
      if (selected === undefined) {
        this.bookmark = {};
      } else {
        this.bookmark = selected.fields.toObject();
      }
    });
  }

  submit (form) {
    if (!form.$valid) {
      return;
    }

    let result;
    let fields = Fields.fromObject(this.bookmark);
    if (this.selectService.selected) {
      result = this.bookmarkService.update(this.selectService.selected.id, fields);
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
