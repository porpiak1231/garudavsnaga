

const initialTitle = () => {
  const AllTitle = []
  AllTitle.push(new Title({
    name: 'text-garuda', 
    acX: 0.5,
    acY: 0,
    posX: parseInt(window.innerWidth/3.5),
    posY: 300,
    speed: 0, 
    scale: 0.4,
  }))
  AllTitle.push(new Title({
    name: 'text-vs', 
    acX: 0.5,
    acY: 0,
    posX: parseInt(window.innerWidth/2),
    posY: 350,
    speed: 0, 
    scale: 0.3,
  }))
  AllTitle.push(new Title({
    name: 'text-naga', 
    acX: 0.5,
    acY: 0,
    posX: parseInt(window.innerWidth - (window.innerWidth/3.5)),
    posY: 300,
    speed: 0, 
    scale: 0.4,
    roVelo: -0.0008,
    xVelo: -1.3
  }))
  return AllTitle
}