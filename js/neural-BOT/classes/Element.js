

class Element{
  constructor({name, acX = 0 , acY = 0 , posX = 0  ,posY = 0 , speed = 0 , scale = 1, frame = 1 }){
    this.acX = acX
    this.x = posX
    const sprite = PIXI.Sprite.fromImage(name)
    // console.log(sprite['_texture'].orig.height)
    const setTexture = []
    for (let i =0; i< frame; i += 1){
      const Texture = new PIXI.Texture(sprite.texture, new PIXI.Rectangle(
        (sprite['_texture'].orig.width/frame) * i,
        0,
        (sprite['_texture'].orig.width/frame),
        sprite['_texture'].orig.height,
      ))
      setTexture.push(Texture)
    }
    // console.log(setTexture)
    this.Sprite = new PIXI.extras.AnimatedSprite(setTexture)
    this.Sprite.anchor.set(acX, acY);
    this.Sprite.x = posX;
    this.Sprite.y = posY;
    this.speed = speed;
    this.Sprite.scale.set(scale, scale);
    this.Sprite.animationSpeed = 0.2;
    this.Sprite.gotoAndPlay(0)
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
}