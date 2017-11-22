var Cell = require('../src/cell');

describe('Cell', function() {
  var cell;
  beforeEach(function() {
    cell = new Cell();
  });
  it('exists', function() {
    expect(cell).toBeDefined();
  });

  describe('#isAlive', function() {
    it('starts dead', function() {
      cell = new Cell();
      expect(cell.isAlive).toBe(false);
    });
  });

  describe('#makeAlive', function() {
    it('makes alive', function() {
      expect(cell.isAlive).toBe(false);
      cell.makeAlive();
      expect(cell.isAlive).toBe(true);
    });
  });

  describe('#makeDead', function() {
    it('kills the cell', function() {
      cell.makeAlive();
      expect(cell.isAlive).toBe(true);
      cell.makeDead();
      expect(cell.isAlive).toBe(false);
    });
  });
});
