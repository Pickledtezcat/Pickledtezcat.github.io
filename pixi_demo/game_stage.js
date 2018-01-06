/*eslint-env browser */
/*jslint white: true */
/*global PIXI */
var pixi_canvas = document.getElementById("gameContainer");   
var game_stage = new PIXI.Application(320, 470, {view: pixi_canvas, backgroundColor: 0x42f4ee});        

function onClick () {
	sprite.x += 5;
	enterFullscreen();

}

function enterFullscreen() {
    document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;

    function requestFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }

    if (document.fullscreenEnabled) {
        requestFullscreen(document.body);

    }

}


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
var sprite = PIXI.Sprite.fromImage('images/test_char.png');

// Set the initial position
sprite.anchor.set(0.5);
sprite.x = game_stage.renderer.width / 2;
sprite.y = game_stage.renderer.height / 2;

// Opt-in to interactivity
sprite.interactive = true;

// Shows hand cursor
sprite.buttonMode = true;

// Pointers normalize touch and mouse
sprite.on('pointerdown', onClick);

// Alternatively, use the mouse & touch events:
// sprite.on('click', onClick); // mouse-only
// sprite.on('tap', onClick); // touch-only

game_stage.stage.addChild(sprite);


        
        