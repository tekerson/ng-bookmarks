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
      expect(selector.selected()).toBe(selected);
      expect(selector.isSelected(selected)).toBe(true);
    });

    it('does NOT remember objects not selected', () => {
      let notSelected = {};
      expect(selector.isSelected(notSelected)).toBe(false);
    });

    it('calls the `whenSelected` callback to `withSelected` with the selected bookmark', () => {
      let retVal = { arbitrary: 'value' };
      let whenSelected = (v) => [v, retVal];
      expect(selector.withSelected(whenSelected, undefined)).toEqual([selected, retVal]);
    });

    describe('when a bookmark is deselected', () => {
      beforeEach(() => {
        selector.deselect();
      });

      it('does NOT remember previously selected object', () => {
        expect(selector.selected()).toBe(undefined);
        expect(selector.isSelected(selected)).toBe(false);
      });

      it('calls the `whenEmpty` callback to `withSelected`', () => {
        let retVal = { arbitrary: 'value' };
        let whenEmpty = () => retVal;
        expect(selector.withSelected(undefined, whenEmpty)).toEqual(retVal);
      });
    });
  });
});
