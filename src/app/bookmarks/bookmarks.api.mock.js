import Q from 'q';

import * as Bookmark from './bookmark/bookmark.entity';
import * as Fields from './bookmark/fields';
import * as Id from './bookmark/id';

export default function MockApi() {
    this.list = jasmine.createSpy().and.returnValue(Q([]));
    this.create = jasmine.createSpy().and.callFake((fields) => Q(mkBookmark(undefined, fields)));
    this.update = jasmine.createSpy().and.callFake((id, fields) => Q(mkBookmark(id, fields)));
    this.remove = jasmine.createSpy().and.returnValue(Q());
}

export function mkBookmark(id = undefined, fields = undefined) {
  mkBookmark.lastId += 1;
  return Bookmark.fromObject({
    id: id || Id.fromString(mkBookmark.lastId.toString()),
    fields: fields || mkFields()
  });
}
mkBookmark.lastId = 0;

export function mkFields() {
  return Fields.fromJSON({
    title: 'Title-' + Math.random(),
    url: 'http://example.com/' + Math.random(),
    description: 'Description: ' + Math.random()
  });
}
