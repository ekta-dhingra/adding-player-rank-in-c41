var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var passedFinish,finishedPlayers=0;

var cars, car1, car2, car3, car4;

var c1,c2,c3,c4,t1;

function preload(){
c1=loadImage("images/car1.png");
c2=loadImage("images/car2.png");

c3=loadImage("images/car3.png");

c4=loadImage("images/car4.png");

t1=loadImage("images/track.jpg");

bronze_img = loadImage("images/bronze.png");
silver_img = loadImage("images/silver.png");
gold_img = loadImage("images/gold.png");

}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("yellow");
  if(playerCount === 4 && finishedPlayers===0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if(finishedPlayers === 4){
    game.update(2);
  }

  if(gameState===2 && finishedPlayers===4)
  {
    game.displayRanks();
    //game.end();
    
  }
}
