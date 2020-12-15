class Creator {

    

    constructor(sky){
        this.sky = sky
        this.doveCount = 0
    }

    addDove(){
        this.doveCount++
        let img      = new Image()
        img.id  = "dove" + this.doveCount
        img.title = img.id
        img.src = "./assets/dove.gif"
        img.style.top = (Math.random() * 100) + "%"
        img.style.left = (Math.random() * 100) + "%"
        img.style.transform = `rotate(${Math.random() * 360}deg)`
        this.sky.append(img)

    }
}