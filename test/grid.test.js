var Grid = require('../src/grid');

describe('Grid', function() {
  var grid;
  beforeEach(function() {
    grid = new Grid();
  });

  describe('#printTable', function() {
    it('returns an array of arrays', function() {
      var table = grid.printTable();
      expect(Array.isArray(table)).toBe(true);
      expect(Array.isArray(table[0])).toBe(true);
    });
  });
});
