var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = 2000;
    sawBladeHitZone.y = 750;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    obstacleImage.x = -25
    obstacleImage.y = -25
    sawBladeHitZone.addChild(obstacleImage);   

    function createSawBlade(x, y) {
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x; 
      sawBladeHitZone.y = y; 
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25; 
      obstacleImage.y = -25; 
      sawBladeHitZone.addChild(obstacleImage);
  }
  createSawBlade(3000, 750)
  createSawBlade(2700, 750)
  createSawBlade(2400, 750)

var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.x = 1000;
enemy.y = 750;
enemy.addChild(redSquare);
game.addGameItem(enemy);
enemy.velocityX = -3
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10) 
};
enemy.onProjectileCollision = function () {
  game.increaseScore(100);
enemy.fadeOut();
}
function createEnemy(x, y) {
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
enemy.velocityX = -2;
enemy.onPlayerCollision = function() {
game.changeIntegrity(-10);
  };
enemy.onProjectileCollision = function() {
game.increaseScore(100);
enemy.fadeOut();
  };
game.addGameItem(enemy);
}
createEnemy(400, 250);
createEnemy(800, 250);
createEnemy(1200, 250);

function createReward(x, y) {
var reward = game.createGameItem("reward", 25);
reward.x = x;
reward.y = y;
var rewardImage = draw.bitmap("img/reward.png"); // Adjust for an image
rewardImage.x = -12; // Center image
rewardImage.y = -12; // Center image
reward.addChild(rewardImage);

reward.onPlayerCollision = function() {
game.increaseScore(100); // Increase score
reward.fadeOut(); // disappear
  };

reward.onProjectileCollision = function() {
reward.fadeOut(); // disappear
  };
game.addGameItem(reward);
}
createReward(400, 250)

function createMarker(x, y) {
var marker = game.createGameItem("marker", 25);
marker.x = x;
marker.y = y;
var markerImage = draw.bitmap("img/marker.png");
markerImage.x = -12; 
markerImage.y = -12; 
marker.addChild(markerImage);
marker.onPlayerCollision = function() {
startLevel(); 
  };
marker.onProjectileCollision = function() {
startLevel(); 
  };
game.addGameItem(marker);
}
createMarker(2000, 750)

var levelData = [
  {
name: "Robot Romp",
number: 1,
speed: -3,
gameItems: [
{ type: "sawblade", x: 450, y: groundY - 25 },
{ type: "enemy", x: 700, y: groundY - 50 },
{ type: "reward", x: 1000, y: groundY - 60 },
{ type: "marker", x: 1200, y: groundY - 30 } // End-of-level marker
],
},
];
function startLevel() {
      // TODO 13 goes below here
var level = levelData[currentLevel]; // Get current level
var levelObjects = level.gameItems; // Get array of game items
for (var i = 0; i < levelObjects.length; i++) {
var obj = levelObjects[i];
if (obj.type === "sawblade") {
createSawBlade(obj.x, obj.y);
} else if (obj.type === "enemy") {
createEnemy(obj.x, obj.y);
} else if (obj.type === "reward") {
createReward(obj.x, obj.y);
} else if (obj.type === "marker") {
createMarker(obj.x, obj.y);
}
}


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
