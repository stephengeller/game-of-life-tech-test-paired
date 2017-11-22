function Cell() {
  this.isAlive = false;
}

Cell.prototype.makeAlive = function() {
  this.isAlive = true;
};

Cell.prototype.makeDead = function() {
  this.isAlive = false;
};

module.exports = Cell;
