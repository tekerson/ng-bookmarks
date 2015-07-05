import Selector from './bookmarks.selector';

describe('The bookmark selector service', () => {
  let selector, selected;

  beforeEach(() => {
    selector = new Selector();
    selected = {};
  });

  describe('when a bookmark is selected', () => {
    beforeEach(() => {
      selector.select(selected);
    });

    it('remembers the selected object', () => {
      expect(selector.isSelected(selected)).toBe(true);
    });

    it('does NOT remember objects not selected', () => {
      let notSelected = {};
      expect(selector.isSelected(notSelected)).toBe(false);
    });

    describe('when a bookmark is deselected', () => {
      beforeEach(() => {
        selector.deselect();
      });

      it('does NOT remember previously selected object', () => {
        expect(selector.isSelected(selected)).toBe(false);
      });

    });
  });

  describe('when a selected callback has been registered', () => {
    let callback, deregister;

    beforeEach(() => {
      callback = jasmine.createSpy('callback');
      deregister = selector.onSelect(callback);
    });

    it('calls the callback when an object is selected', () => {
      selector.select(selected);

      expect(callback).toHaveBeenCalledWith(selected);
    });

    it('does NOT call the callback if the registration is deregistered', () => {
      deregister();
      selector.select(selected);

      expect(callback).not.toHaveBeenCalled();
    });

  });

  describe('when a deselected callback has been registered', () => {
    let callback, deregister;

    beforeEach(() => {
      callback = jasmine.createSpy('callback');
      deregister = selector.onDeselect(callback);
    });

    it('calls the callback when an object is deselected', () => {
      selector.deselect();

      expect(callback).toHaveBeenCalled();
    });

    it('does NOT call the callback if the registration is deregistered', () => {
      deregister();
      selector.deselect();

      expect(callback).not.toHaveBeenCalled();
    });

  });
});
