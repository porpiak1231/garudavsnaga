const initialParallax = () => {
  const AllParallax = []
  AllParallax.push(new Parallax({
    name: 'sc1-flower', 
    posY:1900,
    acX:0.5 ,
    posX:parseInt(window.innerWidth/2),
    scale: 0.7,
    stickValue: 50,
    factorFade: 1500,
    slide: 100
  }))
  AllParallax.push(new Parallax({
    name: 'sc1-chantra',
    posX:1050, 
    posY:3060,
    scale:0.65,
    stickValue: 100,
    factorFade: 600,
    slide: 50
  }))
  AllParallax.push(new Parallax({
    name: 'sc1-gatru',
    posX:345, 
    posY:3060,
    scale:0.65,
    stickValue: 100,
    factorFade: 600,
    slide: 50
  }))
  AllParallax.push(new Parallax({
    name: 'sc1-monk',
    acX:0.39,
    posX:parseInt(window.innerWidth/2), 
    posY:2300,
    scale:0.65,
    stickValue: 100
  }))
  return AllParallax
}