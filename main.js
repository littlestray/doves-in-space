let path = window.location + window.path
let clock, editor

let eventCheckInterval;

let creator = new Creator(document.getElementById("sky"));

console.log(path)


function init() {

    eventCheckInterval = setInterval(() => {
        
    }, 2000)

    

    return window.requestAnimationFrame(gameLoop)
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
