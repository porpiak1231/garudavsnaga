const initialElement = () => {
  const AllElement = []
  AllElement.push(new Element({
    name: 'bg', 
    acX: 0.2,
    acY: 0,
    posX: 0,
    posY: 0,
    speed: 0, 
  }))
  AllElement.push(new Element({
    name: 'bg1', 
    acX: 0,
    acY: 0,
    posX: 0,
    posY: 0,
    speed: 1, 
  }))
  AllElement.push(new Element({
    name: 'bg1', 
    acX: 1,
    acY: 0,
    posX: 0,
    posY: 0,
    speed: 1, 
  }))
  
  AllElement.push(new Element({
    name: 'bg2', 
    acX: 0,
    acY: 0,
    posX: 0,
    posY: 0,
    speed: 3, 
  }))
  
  AllElement.push(new Element({
    name: 'bg3', 
    acX: 1,
    acY: 0,
    posX: 0,
    posY: 0,
    speed: 4, 
  }))
  return AllElement
}