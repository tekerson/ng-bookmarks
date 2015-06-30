import * as Description from './description';

describe('The `description` module', () => {

  it('will assert the type of an `Description` value', () => {
    let description = Description.fromString('This is a description');
    expect(Description.assertType(description)).toBeTruthy();
  });

  it('will not assert the type of a non-`Description` value', () => {
    expect(Description.assertType('Not a description')).toBeFalsy();
  });

  it('will return an Error when a value cannot be created', () => {
    expect(Description.fromString(123)).toBeError('Expected:String');
  });

});

describe('A `Description` Value Object', () => {

  it('will return the string it was created from', () => {
    let description = Description.fromString('A Description');
    expect(description.toString()).toEqual('A Description');
  });

});
