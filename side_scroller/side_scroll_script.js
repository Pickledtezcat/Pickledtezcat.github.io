/*eslint-env browser */
/*jslint white: true */

function side_scroll() {

	var stage = new PIXI.Container();

	var renderer = PIXI.autoDetectRenderer(
		512,
		384,
		{view:document.getElementById("game-canvas")}
	);
	var farTexture = PIXI.Texture.fromImage("resources/bg-far.png");
	
	var far = new PIXI.extras.TilingSprite(farTexture, 512, 256);
	far.position.x = 0;
	far.position.y = 0;
	far.tilePosition.x = 0;
	far.tilePosition.y = 0;	
	stage.addChild(far);
	
	var midTexture = PIXI.Texture.fromImage("resources/bg-mid.png");
	var mid = new PIXI.extras.TilingSprite(midTexture, 512, 256);
	mid.position.x = 0;
	mid.position.y = 128;
	mid.tilePosition.x = 0;
	mid.tilePosition.y = 0;
	stage.addChild(mid);
	
	// renderer.render(stage);
	
	requestAnimationFrame(update);
	
	function update() {
		far.tilePosition.x -= 0.128;
		mid.tilePosition.x -= 0.64;

		renderer.render(stage);

		requestAnimationFrame(update);
	}

}