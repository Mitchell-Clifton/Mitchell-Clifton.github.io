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
    sawBladeHitZone.x = 6400;
    sawBladeHitZone.y = 780;
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
  createSawBlade(5500, 780)
  createSawBlade(5800, 780)
  createSawBlade(6100, 780)
  createSawBlade(1700, 780)
  createSawBalde(2200, 780)

  var enemy = game.createGameItem("enemy", 25);
  var enemyImage = draw.bitmap("img/enemyImage.png");
  enemyImage.x = -100;
  enemyImage.y = -230;
  enemy.x = 3500;
  enemy.y = 780;
  enemy.addChild(enemyImage);
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
    var enemyImage = draw.bitmap("img/enemyImage.png");
    enemyImage.x = -100;
    enemyImage.y = -230;
    enemy.addChild(enemyImage);
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
    createEnemy(2000, 780);
    createEnemy(2300, 780);
    createEnemy(2600, 780);
    createEnemy(2900, 780);
    createEnemy(3200, 780);

function createReward(x, y) {
var reward = game.createGameItem("reward", 25);
reward.x = x;
reward.y = y;
reward.velocityX = -2;
var rewardImage = draw.bitmap("img/reward.png"); 
rewardImage.x = -45; 
rewardImage.y = -38; 
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
createReward(5000, 750)

function createMarker(x, y) {
var marker = game.createGameItem("marker", 25);
marker.x = x;
marker.y = y;
marker.velocityX = -2;
var markerImage = draw.bitmap("img/marker.png");
markerImage.x = -145; 
markerImage.y = -170; 
marker.addChild(markerImage);
marker.onPlayerCollision = function() {
startLevel(); 
  };
marker.onProjectileCollision = function() {
startLevel(); 
  };
game.addGameItem(marker);
}
createMarker(10000, 750)

var levelData = 
  {
name: "Robot Romp",
number: 1,
speed: -3,


}

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
