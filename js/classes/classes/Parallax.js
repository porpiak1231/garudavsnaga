
class Parallax extends Element {
  constructor({ alpha = 0, stickValue = 0, factorFade = 1500, slide = 0, ...props}) {
    super(props)
    this.Sprite.y = stickValue
    this.posY = props.posY
    this.Sprite.alpha = alpha
    this.stick = true
    this.factorFade = factorFade
    this.slide = slide
    this.fadeIn = this.fadeIn.bind(this)
  }

  fadeIn(tracker) {
    if(this.posY <= tracker) {
      if(!this.initialStickValue) this.initialStickValue = tracker
      let alpha = (tracker - this.posY)/this.factorFade
      if(alpha > 1) {
        alpha = 1
      }
      this.Sprite.alpha = alpha
    } else {
      this.Sprite.alpha = 0
    }
  }

  slideFromLeft(tracker) {
    if(this.posY <= tracker) {
      if(!this.initialStickValue) this.initialStickValue = tracker
      let alpha = (tracker - this.posY)/this.factorFade
      if(alpha > 1) {
        alpha = 1
      }
      let x = (tracker - this.posY)/this.factorFade*200 - 100
      if(x > (window.innerWidth/2)-this.Sprite.width- this.slide) {
        x = (window.innerWidth/2)-this.Sprite.width - this.slide
      }
      console.log(x, this.Sprite.x)
      this.Sprite.alpha = alpha
      this.Sprite.x = x
    } else {
      this.Sprite.alpha = 0
    }
  }

  slideFromRight(tracker) {
    if(this.posY <= tracker) {
      if(!this.initialStickValue) this.initialStickValue = tracker
      let alpha = (tracker - this.posY)/this.factorFade
      if(alpha > 1) {
        alpha = 1
      }
      let x = window.innerWidth - (tracker - this.posY)/this.factorFade*200 - this.Sprite.width + 100
      if(x < window.innerWidth - (window.innerWidth /2) + this.slide)  {
        x = window.innerWidth - (window.innerWidth /2) + this.slide
      }
      this.Sprite.alpha = alpha
      this.Sprite.x = x
    } else {
      this.Sprite.alpha = 0
    }
  }

  parallaxMouse({x, y}) {
    let factor
    if(x > window.innerWidth || x < 0) {
      factor = 0
    } else {
      factor = -(this.x - x) / 15
    }
    this.Sprite.x = this.x + factor
  }
}