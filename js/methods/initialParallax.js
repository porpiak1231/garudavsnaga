const centerX2 =  window.innerWidth/2
const scaleWindow2 = window.innerHeight/1440
const initialParallax = {
  intro : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'garuda_1', 
      scale: 0.6,
      startY: 235,
      startX: -350,
      alpha: 0,
      posX: centerX2 + (-650 * scaleWindow2)
    }))
    AllParallax.push(new Parallax({
      name: 'naga_1', 
      scale: 0.5,
      startY: -60,
      startX: 700,
      alpha: 0,
      posX: centerX2 + (800 * scaleWindow2)
    }))
    AllParallax.push(new Parallax({
      name: 'square_1',
      scale: 0.55,
      startY: 0,
      startX: 0,
      alpha: 0,
      // posX: centerX2
    }))
    AllParallax.push(new Parallax({
      name: 'text_1',
      scale: 0.5,
      startY: 0,
      startX: 0,
      alpha: 0,
      // posX: centerX2
    }))
    return AllParallax
  },
  sceneOne : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_1', 
      scale: 1,
      startY: 5*720 + 100,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'smog-1_1', 
      scale: 1,
      startY: 5*720,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'smog-2_1', 
      scale: 1,
      startY: 5*720 + 1200,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'smog-3_1', 
      scale: 1,
      startY: 6*720 + 1500,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'moon_1', 
      scale: 1.5,
      startY: 3*720 + 600,
      startX: -200
    }))
    AllParallax.push(new Parallax({
      name: 'dust_1', 
      scale: 1,
      startY: 5*720 + 300,
      startX: 0
    }))
    return AllParallax
  },
  sceneTwo : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_2', 
      scale: 100,
      startY: 8*720 + 100,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'flower-1_2', 
      scale: 1,
      startY: 7 * 720 + 500,
      startX: 0,
      
    }))
    AllParallax.push(new Parallax({
      name: 'flower-2_2', 
      scale: 1,
      startY: 7 *720 +900 ,
      startX: 200,
    }))
    AllParallax.push(new Parallax({
      name: 'gatru_2', 
      scale: 1,
      startY: 7*720 + 920,
      startX: 500,
      acX: 0.4
    }))
    AllParallax.push(new Parallax({
      name: 'winta_2', 
      scale: 1,
      startY: 7*720 + 920,
      startX: -730,
      acX: 0.36,
      acY: 0.48
    }))
    AllParallax.push(new Parallax({
      name: 'monk_2', 
      scale: 1,
      startY: 7*720 + 700,
      startX: 0,
      acX: 0.38
    }))
    AllParallax.push(new Parallax({
      name: 'flower-3_2', 
      scale: 1,
      startY: 8*720 + 800,
      startX: 0,
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-1_2', 
      scale: 1,
      startY: 8*720 - 200,
      startX: 0,
      acY: 0.7
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-2_2', 
      scale: 1,
      startY: 8*720 - 200,
      startX: 0,
      acY: 0.7
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-3_2', 
      scale: 1,
      startY: 8*720 - 200,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'name_2', 
      scale: 1,
      startY: 8*720 + 200,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'name-winta_2', 
      scale: 1,
      startY: 8*720 + 500,
      startX: -480
    }))
    AllParallax.push(new Parallax({
      name: 'name-gatru_2', 
      scale: 1,
      startY: 8*720 + 500,
      startX: 490,
      acY: 0.47
    }))
    return AllParallax
  },
  sceneThree : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_3', 
      scale: 1.55,
      startY: 11*720 + 100,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'nak_3', 
      scale: 1,
      startY: 10 *720+ 550,
      startX: -200
    }))
    AllParallax.push(new Parallax({
      name: 'gatru_3', 
      scale: 1,
      startY: 11*720 + 1300 ,
      startX: 600
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-1_3', 
      scale: 1,
      startY: 9 *720   + 700,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'sonshadow_3', 
      scale: 1,
      startY: 12 *720+ 1100,
      startX: 600
    }))
    AllParallax.push(new Parallax({
      name: 'sonback_3', 
      scale: 1,
      startY: 13 *720+ 650,
      startX: 500
    }))
    AllParallax.push(new Parallax({
      name: 'sonfront_3', 
      scale: 1,
      startY: 12 *720+ 600,
      startX: 400
    }))
    AllParallax.push(new Parallax({
      name: 'winta_3', 
      scale: 1,
      startY: 14*720 + 490 ,
      startX: -600
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-2_3', 
      scale: 1,
      startY: 11 *720 +500 ,
      startX: 0
    }))
    return AllParallax
  },
  sceneFour : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_4', 
      scale: 1.25,
      startY: 14*720 + 800,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'moon_1', 
      scale: 1,
      startY: 12*720 + 1300,
      startX: 600
    }))
    AllParallax.push(new Parallax({
      name: 'smog-3_1', 
      scale: 1,
      startY: 14*720 + 900,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'dust_1', 
      scale: 1,
      startY: 13*720 ,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'storytext-1_4', 
      scale: 1,
      startY: 13*720 + 750,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'rain_4', 
      scale: 5,
      startY: 13*720 + 1700,
      startX: 0
    }))
    AllParallax.push(new Parallax({
      name: 'smog-1_1', 
      scale: 1,
      startY: 17*720 + 600,
      startX: 0
    }))
    return AllParallax
  },
  sceneFive : () => {
    const AllParallax = []
    AllParallax.push(new Parallax({
      name: 'bg_5', 
      scale: 1,
      startY: 17*720,
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