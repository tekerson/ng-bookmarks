import * as Id from './id';

beforeEach(() => {
  jasmine.addMatchers({
    isRight: (util) => ({
      compare: (actual) => {
        let pass = actual && actual.isRight && actual.isRight();
        return {
          pass: pass,
          message: util.buildFailureMessage(pass ? 'toBeALeft' : 'toBeARight', false, actual)
        };
      }
    })
  });
});

describe('The `id` module', () => {

  it('will create an `Id` Value Object from a string', () => {
    expect(Id.fromString('123')).isRight();
  });

  it('will assert the type of an `Id` value', () => {
    let id = Id.fromString('123').bind(Id.assertType);
    expect(id).isRight();
  });

  it('will not assert the type of a non-`Id` value', () => {
    let id = Id.assertType('123');
    expect(id).not.isRight();
  });

});

describe('An `Id` Value Object', () => {

  it('will return the string it was created from', () => {
    let id = Id.fromString('123').or(undefined);
    expect(id.toString()).toEqual('123');
  });

});
