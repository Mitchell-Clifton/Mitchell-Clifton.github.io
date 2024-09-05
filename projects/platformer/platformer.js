$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(600, 375, 300, 100); // short but wide platform located 200 pixels from the left of the screen and 700 pixels from the top of the screen
    createPlatform(600,0, 300, 200, 0);
    createPlatform(400, 610, 100, 30);
    createPlatform(1000, 610, 100, 30);
    createPlatform(500, 630, 150, 10)
    createPlatform(650, 570, 10, 70);
    createPlatform(650, 570, 200, 10);
    createPlatform(850, 630, 150, 10);
    createPlatform(850, 570, 10, 70);
    createPlatform(1300, 500, 10, 50);
    createPlatform(1100, 410, 50, 10);
    createPlatform(1000, 300, 10, 10);
    createPlatform(900, 190, 20, 10);
    createPlatform(1150, 200, 30, 10);
    createPlatform(1300, 100, 30, 10);
    createPlatform(300, 520, 10, 50);
    createPlatform(200, 480, 10, 50);
    createPlatform(50, 440, 20, 10);
    createPlatform(300, 330, 20, 10);
    createPlatform(500, 220, 20, 10);
    createPlatform(300, 100, 20, 10);
    createPlatform(40, 200, 110, 10);
    createPlatform(150, 80, 10, 130);
    createPlatform(0, 80, 150, 10);




    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("silverbar", 100, 160, 10); 
    createCollectable("stackgoldbars", 700, 200); 
    createCollectable("diamond", 300, 70);
    createCollectable("emerald", 1300, 50);
    createCollectable("goldbar", 700, 600);
    createCollectable("sapphire", 900, 130);
    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right", 780, 3000); 
    createCannon("left", -10, 2000);
    createCannon("right", 400, 2000);
    createCannon("top", 400, 3000);
    createCannon("top",1100, 3000);




    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
