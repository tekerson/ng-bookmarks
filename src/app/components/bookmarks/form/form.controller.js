import * as Fields from '../bookmark/fields';

export default class FormCtrl {
  constructor (BookmarksService, SelectService, events) {
    this.service = BookmarksService;
    this.select = SelectService;

    events.$on(SelectService.selectedSubject, (ev, selected) => {
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
      result = this.service.update(this.selected.id, fields);
    } else {
      result = this.service.create(fields);
    }

    result.then(() => this.cancel(form));
  }

  cancel (form) {
    this.select.deselect();
    this.bookmark = {};
    form.$setPristine();
  }

}
