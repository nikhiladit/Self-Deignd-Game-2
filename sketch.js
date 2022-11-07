var score = 0;
var knife, knifeImg;
var fruits, fruitGroup;
var background, backgroundImg;
var watermelon, apple, mango, banana, orange, pomegranet, pineapple;
var watermelonImg, appleImg, mangoImg, bananaImg, orangeImg, pomegranetImg, pineappleImg;

function preload() {
    watermelonImg = loadImage("./assets/watermelon.png");
    appleImg = loadImage("./assets/apple.png");
    bananaImg = loadImage("./assets/banana.png");
    pomegranetImg = loadImage("./assets/pomegranet.png");
    orangeImg = loadImage("./assets/orange.png");
    pineappleImg = loadImage("./assets/pineapple.png");
    mangoImg = loadImage("./assets/mango.png");
    knifeImg = loadImage("./assets/knife.png");
    backgroundImg = loadImage("./assets/background.jpg");

}

function setup() {
    createCanvas(400,675);

    knife = createSprite(200,200);
    knife.addImage(knifeImg);
    knife.scale = 0.5;

    fruitGroup = createGroup();

}

function draw() {
    background(backgroundImg);    

    text("Score"+ score,35,25);

    spawnFruits();

    knife.y = mouseY;
    knife.x = mouseX;

    if (knife.isTouching(fruitGroup)){
        console.log("hello");
        score = score+1;
    }

    drawSprites();

}

function spawnFruits(){
    if (frameCount % 40 === 0){
      var fruits = createSprite(Math.round(random(1,675)),Math.round(random(1,25)));
      fruits.velocityY = 2;
      fruits.scale = 0.2;
      fruitGroup.add(fruits)
      
       //generate random obstacles
       var rand = Math.round(random(1,7));
       switch(rand) {
         case 1: fruits.addImage(watermelonImg);
                 break;
         case 2: fruits.addImage(appleImg);
                 break;
         case 3: fruits.addImage(bananaImg);
                 break;
         case 4: fruits.addImage(pomegranetImg);
                 break;
         case 5: fruits.addImage(orangeImg);
                 break;
         case 6: fruits.addImage(pineappleImg);
                 break;
         case 7: fruits.addImage(mangoImg);
                 break;
         default: break;
        }
   }
}