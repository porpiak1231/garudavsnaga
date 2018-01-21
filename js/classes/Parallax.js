
class Parallax extends Element {
  constructor({ alpha = 1, startY = 0, factorFade = 1500, slide = 0, ...props}) {
    super(props)
    this.posY = props.posY
    this.Sprite.alpha = alpha
    this.stick = true
    this.startY = startY
    this.pulse = 0
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

  moveToY({ endPos, speed }) {
    const dx = endPos.x - this.Sprite.x
    const dy = endPos.y - this.Sprite.y
    const angle = Math.atan2(dy, dx)
    const yVelo = Math.sin(angle) * speed
    if( parseInt(yVelo) <= 0 && this.Sprite.y + yVelo <= endPos.y ) {
      this.Sprite.y = endPos.y
      return true
    }  else {
      // this.Sprite.x += xVelo
      this.Sprite.y += yVelo
    }
  } 

  moveToX({ endPos, speed }) {
    const dx = endPos.x - this.Sprite.x
    const dy = endPos.y - this.Sprite.y
    const angle = Math.atan2(dy, dx)
    const xVelo = Math.cos(angle) * speed
    console.log(parseInt(this.Sprite.x) + parseInt(xVelo), endPos.x)
    if (parseInt(xVelo) < 0 && parseInt(this.Sprite.x) + parseInt(xVelo) < parseInt(endPos.x)) {
      this.Sprite.x = endPos.x
      return false
    } else if (parseInt(xVelo) > 0 && parseInt(this.Sprite.x) + parseInt(xVelo) > parseInt(endPos.x)) {
      this.Sprite.x = endPos.x
      return false
    }
    else this.Sprite.x += xVelo
    return true
  } 

  pulse1({
    pulse = 3,
    speed = 0.1
  }) {
    if(this.pulse%2 == 1) {
      this.Sprite.alpha -= speed
      if(this.Sprite.alpha <= 0) {
        this.Sprite.alpha = 0
        this.pulse += 1
      }
    } else if(this.pulse%2 == 0) {
      this.Sprite.alpha += speed
      if(this.Sprite.alpha >= 1) {
        this.Sprite.alpha = 1
        this.pulse += 1
      }
    }
    // console.log(this.pulse * 2, pulse)
    if(this.pulse == pulse * 2 + 1) return false
    else return true
  }

  zoomIn({
    scale = 2,
    speed = 0.01,
    ancX = 0,
    ancY = 0,
  }) {
    if (this.Sprite.scale.x < scale) {
      this.Sprite.scale.x += speed
      this.Sprite.scale.y += speed
    } else {
      this.Sprite.scale.x = scale
      this.Sprite.scale.y = scale
      return true
    }
  }

  parallaxMouse(speedFactor, multiX, multiY, maxRange, tracker, slow) {
    this.Sprite.scale.set(this.scale * window.innerHeight/1440, this.scale * window.innerHeight/1440)
    this.Sprite.x = window.innerWidth/2
    this.Sprite.y = window.innerHeight/48 * 24 - (tracker*window.innerHeight/1440 )/7 + (this.startY *window.innerHeight/1440)
    // const window.innerWidth/2 + (this.startX * window.innerHeight/1440) = window.innerWidth/2 + (this.startX * window.innerHeight/1440)
    // const posY = (tracker*window.innerHeight/1440 ) + (IntroParallax[2].startY *window.innerHeight/1440)
    // const centerX =  window.innerWidth/2
    const {x, y} = app.renderer.plugins.interaction.mouse.global
    let factorX = 0, factorY = 0
    if(x > window.innerWidth || x < 0) {
      factorX = 0
      factorY = 0
    } else {
      let dx = x - this.Sprite.x
      let dy = y - this.Sprite.y 
      const angleX = Math.atan2( slow, dx)
      const angleY = Math.atan2( dy, slow)
      factorX = Math.cos(angleX) * speedFactor * multiX
      factorY = Math.sin(angleY) * speedFactor * multiY
    }
    // if(this.Sprite.x + factorX <= window.innerWidth/2 + (this.startX * window.innerHeight/1440) + maxRange && this.Sprite.x + factorX >= window.innerWidth/2 + (this.startX * window.innerHeight/1440) - maxRange)
      
    this.Sprite.x += factorX * window.innerHeight/1440
    this.Sprite.y += factorY * window.innerHeight/1440
    // this.Sprite.x = window.innerHeight/2 + this.Sprite.x 
    // else {
    //   window.innerWidth/2 + ((this.Sprite.x) * window.innerHeight/1440)
    // }// this.Sprite.x += factorX
    // // this.Sprite.y += factorY
  }
}