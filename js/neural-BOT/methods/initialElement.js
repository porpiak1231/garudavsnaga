const initialElement = () => {
  const AllElement = []
  AllElement.push(new Element({
    name: 'bg', 
    acX: 0.2,
  }))
  AllElement.push(new Element({
    name: 'moon', 
    posX: 150,
    posY: 100,
    scale: 0.9
  }))
  AllElement.push(new Element({
    name: 'bg1', 
    speed: 1, 
  }))
  AllElement.push(new Element({
    name: 'bg1', 
    acX: 1,
    speed: 1, 
  }))
  AllElement.push(new Element({
    name: 'bg1', 
    acX: 0.3,
    posY:500,
    speed: 1.5, 
  }))
  AllElement.push(new Element({
    name: 'bg2', 
    speed: -1, 
  }))
  
  AllElement.push(new Element({
    name: 'bg3', 
    speed: 2, 
  }))
  AllElement.push(new Element({
    name: 'dust', 
    acY:0.5,
    acX: 0.75,
    speed:50, 
  }))
  AllElement.push(new Element({
    name: 'dust', 
    acX: 1.5,
    acY:0.5,
    speed:50, 
  }))
  AllElement.push(new Element({
    name: 'dust', 
    acX: 2.5,
    acY:0.5,
    speed:50, 
  }))
  AllElement.push(new Element({
    name: 'dust', 
    acX: 3.5,
    acY:0.5,
    speed:50, 
  }))
  AllElement.push(new Element({
    name: 'dust', 
    acX: 4.5,
    acY:0.5,
    speed:50, 
  }))
  AllElement.push(new Element({
    name: 'dust', 
    acX: 3,
    acY:0.5,
    speed:50, 
  }))
  
 
  // AllElement.push(new Element({
  //   name: 'rain', 
  //   scale:5,
  //   frame: 7
  // }))
  
  
  return AllElement
}