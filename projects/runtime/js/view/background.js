var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      var tree = draw.bitmap("img/car.png");
      var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            //var backgroundFill = draw.rect(canvasWidth,canvasHeight,'black');
            var backgroundFill = draw.bitmap("img/city.png");
            backgroundFill.x = 0;
            backgroundFill.y = 0;
            backgroundFill.scaleX = 1.53;
            backgroundFill.scaleY = 1.1;
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var people = draw.bitmap("img/people.png");
            people.x = 800;
            people.y = 500;
            people.scaleX = .4;
            people.scaleY = .3;
            background.addChild(people)
            var road = draw.bitmap("img/pixelroad.jpg");
            road.x = 0;
            road.y = 790;
            road.scaleX = 2.15;
            road.scaleY = 1.3;
            background.addChild(road)
           
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var building;
            for (var i = 0; i < 5; ++i) {
                var buildingHeight = 300;
                building = draw.rect(75, buildingHeight, "LightGray", "Black", 1);
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            
            
            // TODO 3: Part 1 - Add a tree
            
            tree.x = 300;
            tree.y = groundY - 150;
            background.addChild(tree);
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 8;
            if(tree.x < -200) {
            tree.x = canvasWidth;
           
            }
            
             
            
            
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++){
                var eachBuilding = buildings[i]
                eachBuilding.x -=6;
                if(eachBuilding.x < -200){
                    eachBuilding.x = canvasWidth;
                }

            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
