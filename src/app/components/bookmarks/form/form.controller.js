import * as Fields from '../bookmark/fields';

export default class FormCtrl {
  constructor (bookmarksService, selectService, events) {
    this.bookmarkService = bookmarksService;
    this.selectService = selectService;

    events.$on(selectService.selectedSubject, (ev, selected) => {
      this.selected = selected;
      this.bookmark = (selected === undefined) ? {} : selected.fields.toObject();
    });
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
