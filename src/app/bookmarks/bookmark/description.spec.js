import * as Description from './description';

describe('The `description` module', () => {

  it('will assert the type of an `Description` value', () => {
    let description = Description.fromString('This is a description');
    expect(Description.isInstance(description)).toBeTruthy();
  });

  it('will not assert the type of a non-`Description` value', () => {
    expect(Description.isInstance('Not a description')).toBeFalsy();
  });

  it('will will throw a TypeError when created with a non-string', () => {
    expect(() => Description.fromString(123)).toThrow(new TypeError('Expected:String'));
  });

});

describe('A `Description` Value Object', () => {

  it('will return the string it was created from', () => {
    let description = Description.fromString('A Description');
    expect(description.toString()).toEqual('A Description');
  });

});
