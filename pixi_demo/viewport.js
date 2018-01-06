/*eslint-env browser */
/*jslint white: true */

var game = {
    element: document.getElementById("gameContainer"),
    width: 320,
    height: 470,
    safeWidth: 320,
    safeHeight: 470
    },

resizeGame = function () {

    // Get the dimensions of the viewport

    var myWidth = 0, myHeight = 0;
    if(typeof(window.innerWidth) === 'number') {
        //Non-IE
        myWidth = window.innerWidth;
        myHeight = window.innerHeight;
    } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
        //IE 6+ in 'standards compliant mode'
        myWidth = document.documentElement.clientWidth;
        myHeight = document.documentElement.clientHeight;
    } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
        //IE 4 compatible
        myWidth = document.body.clientWidth;
        myHeight = document.body.clientHeight;               
    }

    var viewport, newGameWidth, newGameHeight, newGameX, newGameY;

    viewport = {
    width: myWidth,
    height: myHeight
    };

    // Determine game size
    if (game.height / game.width > viewport.height / viewport.width) {
      if (game.safeHeight / game.width > viewport.height / viewport.width) {
          // A
          newGameHeight = viewport.height * game.height / game.safeHeight;
          newGameWidth = newGameHeight * game.width / game.height;
      } else {
          // B
          newGameWidth = viewport.width;
          newGameHeight = newGameWidth * game.height / game.width;
      }
    } else {
      if (game.height / game.safeWidth > viewport.height / viewport.width) {
        // C
        newGameHeight = viewport.height;
        newGameWidth = newGameHeight * game.width / game.height;
      } else {
        // D
        newGameWidth = viewport.width * game.width / game.safeWidth;
        newGameHeight = newGameWidth * game.height / game.width;
      }
    }

    game.element.style.width = newGameWidth + "px";
    game.element.style.height = newGameHeight + "px";

    newGameX = (viewport.width - newGameWidth) / 2;
    newGameY = (viewport.height - newGameHeight) / 2;

    // Set the new padding of the game so it will be centered
    game.element.style.margin = newGameY + "px " + newGameX + "px";
};

window.addEventListener("resize", resizeGame);
resizeGame();
    