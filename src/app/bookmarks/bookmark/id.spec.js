import * as Id from './id';

describe('The `id` module', () => {

  it('will assert the type of an `Id` value', () => {
    let id = Id.fromString('123');
    expect(Id.assertType(id)).toBeTruthy();
  });

  it('will not assert the type of a non-`Id` value', () => {
    expect(Id.assertType('123')).toBeFalsy();
  });

  it('will return an Error when a value cannot be created', () => {
    expect(Id.fromString('abc')).toBeError('Invalid:NotNumeric');
  });

});

describe('An `Id` Value Object', () => {

  it('will return the string it was created from', () => {
    let id = Id.fromString('123');
    expect(id.toString()).toEqual('123');
  });

});
