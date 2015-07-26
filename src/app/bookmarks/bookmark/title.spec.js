import * as Title from './title';

describe('The `title` module', () => {

  it('will assert the type of an `Title` value', () => {
    let title = Title.fromString('This is a title');
    expect(Title.isInstance(title)).toBeTruthy();
  });

  it('will not assert the type of a non-`Title` value', () => {
    expect(Title.isInstance('Not a title')).toBeFalsy();
  });

  it('will throw a TypeError when constructed with a non-string', () => {
    expect(() => Title.fromString(123)).toThrow(new TypeError('Expected:String'));
  });
});

describe('A `Title` Value Object', () => {

  it('will return the string it was created from', () => {
    let title = Title.fromString('A Title');
    expect(title.toString()).toEqual('A Title');
  });

});
