import * as Bookmark from './bookmark.entity';

import * as Fields from './fields';

import * as Id from './id';
import * as Title from './title';
import * as Url from './url';
import * as Description from './description';

describe('The `bookmarks.entity` module', () => {

  it('will not assert the type of a non-`Bookmark` value', () => {
    expect(Bookmark.assertType('Not a Bookmark')).toBeFalsy();
  });

  it('will return a TypeError when a constructed without a valid Id', () => {
    let bookmark = Bookmark.fromObject({
      id: 'NotAnId',
      fields: undefined
    });
    expect(bookmark).toBeError('Expected:Id');
  });

  it('will return a TypeError when a constructed without a valid set of Fields', () => {
    let bookmark = Bookmark.fromObject({
      id: Id.fromString('123'),
      fields: 'NotFields'
    });
    expect(bookmark).toBeError('Expected:Fields');
  });

  it('will return a Bookmark entity when created with valid parameters', () => {
    let bookmark = Bookmark.fromObject({
      id: Id.fromString('123'),
      fields: Fields.fromObject({
        title: Title.fromString('Title'),
        url: Url.fromString('http://example.com'),
        description: Description.fromString('This is a valid description')
      })
    });
    expect(Bookmark.assertType(bookmark)).toBeTruthy();
  });

  it('will return a Bookmark entity when created with valid JSON', () => {
    let bookmark = Bookmark.fromJSON({
      id: '123',
      title: 'Title',
      url: 'http://example.com',
      description: 'This is a valid description'
    });
    expect(Bookmark.assertType(bookmark)).toBeTruthy();
  });

});
