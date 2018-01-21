

class Element{
  constructor({name, acX = 0.5 , acY = 0.5 , startX = 0  ,posY = -10000 ,posX = 0 , speed = 0 , scale = 1, frame = 1, prl = false }){
    this.acX = acX
    this.prl = prl
    this.name = name
    this.startX = startX
    this.scale = scale
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
    this.Sprite.y = posY;
    this.Sprite.x = posX
    this.speed = speed;
    this.Sprite.scale.set(scale, scale);
    this.Sprite.animationSpeed = 0.2;
    this.Sprite.gotoAndPlay(0)
  }
}