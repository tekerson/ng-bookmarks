import * as Fields from './fields';

import * as Title from './title';
import * as Url from './url';
import * as Description from './description';

describe('The `fields` module', () => {

  it('will not assert the type of a non-`Fields` value', () => {
    expect(Fields.assertType('Not Fields')).toBeFalsy();
  });

  it('will return a TypeError when a constructed without a valid Url', () => {
    let fields = Fields.fromObject({
      url: 'NotAUrl',
      title: Title.fromString('A Valid Title'),
      description: Description.fromString('This is a valid description')
    });
    expect(fields).toBeError('Expected:Url');
  });

  it('will return a TypeError when a constructed without a valid Title', () => {
    let fields = Fields.fromObject({
      url: Url.fromString('http://example.com'),
      title: 'NotATitle',
      description: Description.fromString('This is a valid description')
    });
    expect(fields).toBeError('Expected:Title');
  });

  it('will return a TypeError when a constructed without a valid Title', () => {
    let fields = Fields.fromObject({
      url: Url.fromString('http://example.com'),
      title: Title.fromString('A Valid Title'),
      description: 'NotADescription'
    });
    expect(fields).toBeError('Expected:Description');
  });

  it('will return a Fields when created with valid parameters', () => {
    let fields = Fields.fromObject({
      title: Title.fromString('Title'),
      url: Url.fromString('http://example.com'),
      description: Description.fromString('This is a valid description')
    });
    expect(Fields.assertType(fields)).toBeTruthy();
  });

  it('will return a Fields when created with valid JSON', () => {
    let fields = Fields.fromJSON({
      title: 'Title',
      url: 'http://example.com',
      description: 'This is a valid description'
    });
    expect(Fields.assertType(fields)).toBeTruthy();
  });

});
