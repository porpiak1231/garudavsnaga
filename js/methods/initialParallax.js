const centerX2 =  window.innerWidth/2
const scaleWindow2 = window.innerHeight/1440
const initialParallax = {
  intro : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'garuda_1', 
      scale: 0.6,
      startY: 1440/2,
      startX: -350,
      alpha: 0,
      posX: centerX2 + (-650 *  window.innerHeight/1440),
      slow: 7
    }))
    AllParallax.push(new Parallax({
      name: 'naga_1', 
      scale: 0.5,
      startY:  1440/2,
      startX: 700,
      alpha: 0,
      posX: centerX2 + (800 *  window.innerHeight/1440),
      slow: 7
    }))
    AllParallax.push(new Parallax({
      name: 'square_1',
      scale: 0.55,
      startY:  1440/2,
      startX: 0,
      alpha: 0,
      slow: 7,
      // posX: centerX2
    }))
    AllParallax.push(new Parallax({
      name: 'text_1',
      scale: 0.5,
      startY: 1440/2,
      startX: 0,
      alpha: 0,
      slow: 7,
      // posX: centerX2
    }))
    return AllParallax
  },
  sceneOne : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_1', 
      scale: 1.5,
      startY: 4*1440,
      startX: 0,
      slow: 1.5
    }))
    AllParallax.push(new Parallax({
      name: 'smog-1_1', 
      scale: 1,
      startY: 3*1440,
      startX: 0,
      slow: 1.5
    }))
    AllParallax.push(new Parallax({
      name: 'smog-1_1', 
      scale: 1,
      startY: 3*1440 -1500,
      startX: -500,
      slow: 1.5
    }))
    AllParallax.push(new Parallax({
      name: 'smog-1_1', 
      scale: 1,
      startY: 3*1440 - 1200,
      startX: 500,
      slow: 1.5
    }))
    AllParallax.push(new Parallax({
      name: 'smog-2_1', 
      scale: 1,
      startY: 2*1440 + ( 1200 ),
      startX: 0,
      slow: 2.5,
      speed: 20
    }))
    AllParallax.push(new Parallax({
      name: 'smog-2_1', 
      scale: 1.8,
      startY: 2*1440 + ( 1200 ),
      startX: -1900,
      slow: 2.5,
      speed: 10
    }))
    AllParallax.push(new Parallax({
      name: 'dust_1', 
      scale: 2,
      startY: 4*1440 + ( 300 ),
      posX: -1000 ,
      slow: 2,
      speed: 200
    }))
    AllParallax.push(new Parallax({
      name: 'moon_1', 
      scale: 1.5,
      startY: 1440 + ( 600 ),
      startX: -500,
      slow: -5,
    }))
    AllParallax.push(new Parallax({
      name: 'smog-3_1', 
      scale: 1,
      startY: 3*1440 + ( 1500 ),
      startX: 0,
      slow: 2.5
    }))
    AllParallax.push(new Parallax({
      name: 'dust_1', 
      scale: 2.5,
      startY: 4*1440 + ( -800 ),
      posX: 100,
      slow: 2,
      speed: 250
    }))
    AllParallax.push(new Parallax({
      name: 'dust_1', 
      scale: 3,
      startY: 4*1440 + ( -1000 ),
      posX: 1000 ,
      slow: 2,
      speed: 150
    }))
    return AllParallax
  },
  sceneTwo : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_2', 
      scale: 100,
      startY: 8*1440 + 100,
      startX: 0,
      slow: 14
    }))
    AllParallax.push(new Parallax({
      name: 'flower-1_2', 
      scale: 1,
      startY: 6 * 1440 - 400,
      startX: 0,
      slow: 5
    }))
    AllParallax.push(new Parallax({
      name: 'flower-2_2', 
      scale: 1,
      startY: 6 *1440 - 200 ,
      startX: 200,
      slow: 6
    }))
    AllParallax.push(new Parallax({
      name: 'gatru_2', 
      scale: 1,
      startY: 7*1440 + 920,
      startX: 500,
      acX: 0.4,
      slow: 6
    }))
    AllParallax.push(new Parallax({
      name: 'winta_2', 
      scale: 1,
      startY: 7*1440 + 920,
      startX: -730,
      acX: 0.36,
      acY: 0.48,
      slow: 6
    }))
    AllParallax.push(new Parallax({
      name: 'monk_2', 
      scale: 1,
      startY: 7*1440 + 700,
      startX: 0,
      acX: 0.38,
      slow: 8
    }))
    AllParallax.push(new Parallax({
      name: 'flower-3_2', 
      scale: 1,
      startY: 8*1440 + 800,
      startX: 0,
      slow: 3
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-1_2', 
      scale: 1,
      startY: 8*1440 - 200,
      startX: 0,
      acY: 0.7,
      slow: 4
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-2_2', 
      scale: 1,
      startY: 8*1440 - 200,
      startX: 0,
      acY: 0.7,
      slow: 4
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-3_2', 
      scale: 1,
      startY: 8*1440 - 200,
      startX: 0,
      slow: 4
    }))
    AllParallax.push(new Parallax({
      name: 'name_2', 
      scale: 1,
      startY: 8*1440 + 200,
      startX: 0,
      slow: 7
    }))
    AllParallax.push(new Parallax({
      name: 'name-winta_2', 
      scale: 1,
      startY: 8*1440 + 500,
      startX: -480,
      slow: 5
    }))
    AllParallax.push(new Parallax({
      name: 'name-gatru_2', 
      scale: 1,
      startY: 8*1440 + 500,
      startX: 490,
      acY: 0.47,
      slow: 5
    }))
    return AllParallax
  },
  sceneThree : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_3', 
      scale: 1.55,
      startY: 11*window.innerHeight + 100 * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'nak_3', 
      scale: 1,
      startY: 10 *window.innerHeight+ 550 * window.innerHeight/1440,
      startX: -200
    }))
    AllParallax.push(new Parallax({
      name: 'gatru_3', 
      scale: 1,
      startY: 11*window.innerHeight + 1300  * window.innerHeight/1440,
      startX: 600
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-1_3', 
      scale: 1,
      startY: 9 *window.innerHeight   + 700 * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'sonshadow_3', 
      scale: 1,
      startY: 12 *window.innerHeight+ 1100 * window.innerHeight/1440,
      startX: 600
    }))
    AllParallax.push(new Parallax({
      name: 'sonback_3', 
      scale: 1,
      startY: 13 *window.innerHeight+ 650 * window.innerHeight/1440,
      startX: 500
    }))
    AllParallax.push(new Parallax({
      name: 'sonfront_3', 
      scale: 1,
      startY: 12 *window.innerHeight+ 600 * window.innerHeight/1440,
      startX: 400
    }))
    AllParallax.push(new Parallax({
      name: 'winta_3', 
      scale: 1,
      startY: 14*window.innerHeight + 490  * window.innerHeight/1440,
      startX: -600
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-2_3', 
      scale: 1,
      startY: 11 *window.innerHeight +500  * window.innerHeight/1440,
      startX: 0
    }))
    return AllParallax
  },
  sceneFour : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_4', 
      scale: 1.25,
      startY: 14*window.innerHeight + 800 * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'moon_1', 
      scale: 1,
      startY: 12*window.innerHeight + 1300 * window.innerHeight/1440,
      startX: 600
    }))
    AllParallax.push(new Parallax({
      name: 'smog-3_1', 
      scale: 1,
      startY: 14*window.innerHeight + 900 * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'dust_1', 
      scale: 1,
      startY: 13*window.innerHeight  * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-1_4', 
      scale: 1,
      startY: 13*window.innerHeight + 750 * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'rain_4', 
      scale: 5,
      startY: 13*window.innerHeight + 1700 * window.innerHeight/1440,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'smog-1_1', 
      scale: 1,
      startY: 17*window.innerHeight + 600 * window.innerHeight/1440,
      startX: 0
    }))
    return AllParallax
  },
  sceneFive : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_5', 
      scale: 1,
      startY: 17*window.innerHeight * window.innerHeight/1440,
      startX: 0
    }))
    return AllParallax
  },
  background: () => {
    const AllParallax = []
    // AllParallax.push(new Parallax({
    //   name: 'square_1',
    //   scale: 0.7
    // }))
    return AllParallax
  },
  text: () => {
    const AllParallax = []
    // AllParallax.push(new Parallax({
    //   name: 'text_1',
    //   scale: 0.5
    // }))
    return AllParallax
  }
}