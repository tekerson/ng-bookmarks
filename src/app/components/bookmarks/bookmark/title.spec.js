import * as Title from './title';

describe('The `title` module', () => {

  it('will assert the type of an `Title` value', () => {
    let title = Title.fromString('This is a title');
    expect(Title.assertType(title)).toBeTruthy();
  });

  it('will not assert the type of a non-`Title` value', () => {
    expect(Title.assertType('Not a title')).toBeFalsy();
  });

  it('will return an Error when a value cannot be created', () => {
    expect(Title.fromString(123)).toBeError('Expected:String');
  });

  it('will return an Error when a value cannot be created', () => {
    expect(Title.fromString(123)).toBeError('Expected:String');
  });

});

describe('A `Title` Value Object', () => {

  it('will return the string it was created from', () => {
    let title = Title.fromString('A Title');
    expect(title.toString()).toEqual('A Title');
  });

});
