var scaryBg
var player
var wolfChase
var gameState = "play"
var birdsFlying

function preload(){
    scaryBg = loadImage("ScaryBg.png");
    birdsFlying = loadAnimation("birds.png","birds2.png");
   //wolfChase = loadAnimation("Wolf thing-1-1 (dragged).png","Wolf thing-1-2 (dragged).png","Wolf thing-1-3 (dragged).png","Wolf thing-1-4 (dragged).png","Wolf thing-1-5 (dragged).png","Wolf thing-1-6 (dragged).png","Wolf thing-1-7 (dragged).png","Wolf thing-1-8 (dragged).png","Wolf thing-1-9 (dragged).png","Wolf thing-1-10 (dragged).png","Wolf thing-1-11 (dragged).png");
}

function setup() {
    createCanvas(600,600);
    birdsFly = createSprite(300,300);
    birdsFly.addAnimation("birds",birdsFlying);
  //  birdsFly.debug = true;
    bg = createSprite(300,300);
    bg.addImage("ScaryBg.png", scaryBg)

    ground = createSprite(300,600,600,80)

    wolf = createSprite(90,500);
   //wolf.addAnimation("Wolf thing-1-1 (dragged).png","Wolf thing-1-2 (dragged).png","Wolf thing-1-3 (dragged).png","Wolf thing-1-4 (dragged).png","Wolf thing-1-5 (dragged).png","Wolf thing-1-6 (dragged).png","Wolf thing-1-7 (dragged).png","Wolf thing-1-8 (dragged).png","Wolf thing-1-9 (dragged).png","Wolf thing-1-10 (dragged).png","Wolf thing-1-11 (dragged).png",wolfChase);
    wolf.scale = 0.4;
    
    player = createSprite(210,500);
    player.scale = 0.2

 
    
}

function draw() {
    birdsFly.depth = bg.depth+2

    bg.velocityX = -6;

    
    if(bg.x<0){
        bg.x = bg.width/2; 
    }


    if(gameState === "play" ){
        if(keyDown("space")){
            player.velocityY = -6;
        }
        player.velocityY = player.velocityY + 0.7
    }

   player.collide(ground);



    drawSprites();
}