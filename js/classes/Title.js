

class Title{
  constructor({name, acX, acY, posX ,posY, speed, scale = 1, roVelo=0.0008, xVelo = -1}){
    this.acX = acX
    this.Sprite = PIXI.Sprite.fromImage(name)
    this.Sprite.anchor.set(acX, acY);
    this.Sprite.x = posX;
    this.Sprite.y = posY;
    this.speed = speed;
    this.Sprite.scale.set(scale, scale);
    if(roVelo > 0) this.alpha = 1;
    else this.alpha = -1
    this.x = posX
    this.roVelo = roVelo;
    this.xVelo = xVelo;
  }

  rotate({x, y}){
    // const centerWindow = window.innerWidth/2
    
    let factor
    if(x > window.innerWidth || x < 0) {
      factor = 0
    } else {
      factor = -(this.x - x) / 15
    }
    this.Sprite.rotation += this.roVelo;
    if (this.Sprite.rotation >= 0.1){
      this.roVelo *= -1
    } else if (this.Sprite.rotation <= -0.1){
      this.roVelo *= -1
    }
    this.Sprite.x = this.x + factor  
  }
 
}