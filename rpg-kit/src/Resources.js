export class Resources {
    constructor() {
        this.toLoad = {
            sky: "rpg-kit/public/sprites/sky.png",
            ground: "rpg-kit/public/sprites/ground.png",
            shadow: "rpg-kit/public/sprites/shadow.png",
            hero: "rpg-kit/public/sprites/spritesheet.png"
        };

        this.images= []//holds all loaded images
    
        Object.keys(this.toLoad).forEach(key=>{
            const img = new Image();
            img.src = this.toLoad[key];
            this.images[key] = {
                image: img,
                isLoaded: false

            }

            img.onload = () => {
                this.images[key].isLoaded = true;
            }
    })
    

    }

    
}