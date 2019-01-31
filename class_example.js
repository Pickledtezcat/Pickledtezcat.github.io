function Item(my_button) {
	this.button = my_button
	this.x = 0;
	this.y = 0;

}

Far.prototype = Object.create(PIXI.extras.TilingSprite.prototype);
Far.DELTA_X = 0.128;

Far.prototype.setViewportX = function(newViewportX) {
  var distanceTravelled = newViewportX - this.viewportX;
  this.viewportX = newViewportX;
  this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
};
