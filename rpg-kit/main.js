import { Resources } from "./src/Resources";

const canvas = document.getElementById('gc');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

const resources = new Resources()

setInterval(()=>{
  draw()
}, 300)

function draw()  {
  const sky = resources.images.sky
  if(sky.isLoaded) {
    ctx.drawImage(sky.image, 0,0)
  } else {
    console.log(sky.image)
  }
}