var wall,bullet;

var speed,weight,thickness;

function setup() {
    createCanvas(1600,400);

    bullet = createSprite(50, 200, 50, 20);
    bullet.shapeColor = color(100,100,100);

    thickness = random(22,83);
  
    wall = createSprite(1400,200,thickness,height/2);
  
    speed = random(223,321);  
    weight = random(30,52);


}

function draw() {
    background(0);  
  
    bullet.velocityX = speed;
    bullet.depth = wall.depth+1;


if (bullet.x-wall.x <= wall.width/2+bullet.width/2    
  && wall.x-bullet.x <= wall.width/2+bullet.width/2    
  && bullet.y-wall.y <= wall.height/2+bullet.height/2    
  && wall.y-bullet.y <= wall.height/2+bullet.height/2)
  {        
    bullet.velocityX = 0;  
  }

if (hasCollided(bullet,wall))
{    
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  damage = Math.round(damage);

if (damage > 10)    
{      
      wall.shapeColor = color(255,0,0);
      
      fill("red");
      textSize(20);
      text("Damage = " + damage+" (Result LETHAL)",600,200);
    
    }

if (damage < 10)    
{     
        wall.shapeColor = color(0,255,0);
        
        fill(0,255,0);
        textSize(20);
        text("Damage = " + damage+" (Result Good) ",600,200);

    }
  }
 
 drawSprites();
}

function hasCollided(lbullet,lwall)
{

  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge)
  {
      return true;
  }
  return false;
}