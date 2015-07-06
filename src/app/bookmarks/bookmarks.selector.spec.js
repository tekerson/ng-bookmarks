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
      expect(selector.selected).toBe(selected);
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
        expect(selector.selected).toBe(undefined);
        expect(selector.isSelected(selected)).toBe(false);
      });
    });
  });
});
