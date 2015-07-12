import * as Fields from '../bookmark/fields';

export default function FormCtrl(bookmarks, selector, scope) {

  scope.$watch(() => selector.selected, selected => {
    if (selected === undefined) {
      this.bookmark = undefined;
    } else {
      this.bookmark = selected.fields.toObject();
    }
  });

  this.submit = (form) => {
    if (!form.$valid) {
      return;
    }

    let result;
    let fields = Fields.fromObject(this.bookmark);
    if (selector.selected) {
      result = bookmarks.update(selector.selected.id, fields);
    } else {
      result = bookmarks.create(fields);
    }

    result.then(() => this.cancel(form));
  };

  this.cancel = (form) => {
    selector.deselect();
    this.bookmark = undefined;
    form.$setPristine();
  };

  this.showErrors = (form, field) => {
    return (form.$submitted || field.$dirty) && field.$invalid;
  };

}
