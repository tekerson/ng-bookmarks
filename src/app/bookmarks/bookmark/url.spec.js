import * as Url from './url';

describe('The `url` module', () => {

  it('will assert the type of an `Url` value', () => {
    let url = Url.fromString('http://example.com');
    expect(Url.assertType(url)).toBeTruthy();
  });

  it('will not assert the type of a non-`Url` value', () => {
    expect(Url.assertType('Not a url')).toBeFalsy();
  });

  it('will throw a TypeError when constructed with a non-string', () => {
    expect(() => Url.fromString(123)).toThrow(new TypeError('Expected:String'));
  });
});

describe('A `Url` Value Object', () => {

  it('will normalize the string it was created from', () => {
    let url = Url.fromString('http://example.com');
    expect(url.toString()).toEqual('http://example.com/');
  });

});
