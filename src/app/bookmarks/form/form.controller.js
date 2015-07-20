import * as Fields from '../bookmark/fields';

export default function FormCtrl(bookmarks, selector, scope) {

  let editSelected = () => {
    this.bookmark = selector.withSelected(
      (selected) => selected.fields.toObject(),
      () => ({ description: null }));
  };

  scope.$watch(selector.selected, editSelected);

  this.submit = (form) => {
    if (!form.$valid) {
      return;
    }

    let fields = Fields.fromObject(this.bookmark);
    selector.withSelected(
        (selected) => bookmarks.update(selected.id, fields),
        () => bookmarks.create(fields))
      .then(() => this.cancel(form));
  };

  this.cancel = (form) => {
    selector.deselect();
    editSelected();
    form.$setPristine();
  };

  this.showErrors = (form, field) => {
    return (form.$submitted || field.$dirty) && field.$invalid;
  };

}
