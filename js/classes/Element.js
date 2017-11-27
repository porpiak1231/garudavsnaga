

class Element{
  constructor({name, acX, acY, posX ,posY, speed, scale = 1}){
    this.acX = acX
    this.Sprite = PIXI.Sprite.fromImage(name)
    this.Sprite.anchor.set(acX, acY);
    this.Sprite.x = posX;
    this.Sprite.y = posY;
    this.speed = speed;
    this.Sprite.scale.set(scale, scale);
  }

  run() {
    if(this.speed == 0) {
      this.Sprite.x += 0
    }
    this.Sprite.x += this.speed
    if (this.Sprite.x >= (this.Sprite.width * this.acX) + window.innerWidth) {
      this.Sprite.x =  - (this.Sprite.width * Math.abs(1 - this.acX) + window.innerWidth)
    }
  }

  hello() {
    console.log(this.Sprite.width, (this.Sprite.width * this.acX))
    console.log('Hello !')
  }
}