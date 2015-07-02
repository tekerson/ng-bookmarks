import validators from './validators';

import { errors } from 'tek/validate';
import * as Title from './title';
import * as Url from './url';
import * as Description from './description';

describe('The `validators` module', () => {

  describe('when validating a bad title', () => {
    let actual;

    beforeEach(() => {
      let title = Title.fromString('ab');
      actual = errors(validators.title, title);
    });

    it('will return an error indicating the Title is too short', () => {
      expect(actual).toContain('length');
    });

    it('will return an error indicating the Title does NOT start with a capital', () => {
      expect(actual).toContain('initCap');
    });

  });

  describe('when validating a good title', () => {
    it('will return no errors', () => {
      let title = Title.fromString('Abc');
      let actual = errors(validators.title, title);
      expect(actual).toEqual([]);
    });
  });

  describe('when validating a non-http or https url', () => {
    it('will return an error indicating the Url protocol is wrong', () => {
      let url = Url.fromString('ftp://example.com');
      let actual = errors(validators.url, url);
      expect(actual).toContain('protocol');
    });
  });

  describe('when validating a good url', () => {
    it('will return no errors', () => {
      let url = Url.fromString('http://example.com');
      let actual = errors(validators.url, url);
      expect(actual).toEqual([]);
    });
  });

  describe('when validating a short description', () => {
    it('will return an error indicating it is too short', () => {
      let description = Description.fromString('too short');
      let actual = errors(validators.description, description);
      expect(actual).toContain('length');
    });
  });

  describe('when validating a good description', () => {
    it('will return no errors', () => {
      let description = Description.fromString('This is a good description.');
      let actual = errors(validators.description, description);
      expect(actual).toEqual([]);
    });
  });

});
