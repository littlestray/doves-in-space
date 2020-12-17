//By: little_stray
//https://github.com/littlestray/doves-in-space
//https://twitter.com/little_stray
//Dec. 15 2020

let path = window.location + window.path
let clock, editor

let eventCheckInterval, creator;

console.log(path)
let doveSpeed = 666
avgWindowSize = 100

let counter = 0
let start = Date.now()
let then  = start
let avgWindow = []

for(let i = 0; i < avgWindowSize; i++){
    avgWindow.push(1)
}
console.log(`windowsize: ${avgWindow.length}`)

function init(fps) {
    creator = new Creator(document.getElementById("sky"));
    eventCheckInterval = setInterval(() => {
        let now = Date.now()
        counter++
        avgWindow[counter % avgWindowSize] = doveSpeed / (now - then)

        // console.log(`current: ${doveSpeed / (Date.now() - then)}`);
        let avg =  avgWindow.reduce((a,b) => a + b) / avgWindow.length
        console.log(`average: ${avg}`)

        Math.random() > 0.66 ? creator.addDove() : null
        then = now

        if(avg > 2) {

            for(let i = document.images.length; i > 0; i--){
                clearInterval(eventCheckInterval)
                document.images[i - 1].remove()
                
            }

            console.log(`Threshold at ${(now - start)/1000/60}`)
            console.log(`last ten cycles: ${avgWindow}`)
            console.log(`windowsize: ${avgWindow.length}`)
        }
        
    
    
    }, doveSpeed)
    
    

    // return window.requestAnimationFrame(gameLoop)
}

function update() {


}

function draw() {

}


function gameLoop() {

    update()
    draw()
    window.requestAnimationFrame(gameLoop)
}

