class Creator {

    

    constructor(sky){
        this.sky = sky
        this.doveCount = 0
    }

    addDove(){
        this.doveCount++
        let img      = document.createElement("img")
        img.id  = "dove" + this.doveCount
        img.src = "./assets/dove.gif"
        // img.x   = Math.random() * window.innerWidth
        // img.y   = Math.random() * window.innerHeight
        this.sky.append(img)

    }
}
