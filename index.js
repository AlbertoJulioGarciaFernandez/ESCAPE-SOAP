import { Obstacle } from "./obstacle.js"
import { Soap } from "./soap.js"

var objSoap = new Soap()

objSoap.draw()

window.addEventListener("keydown", function (e) {
   
    switch (e.key) {
        case "w":
            objSoap.direction = "up"
            break;
        case "a":
            objSoap.direction = "left"
            break;
        case "d":
            objSoap.direction = "right"
            break;
    }
 
})
window.addEventListener("keyup", function (e) {

    objSoap.direction = null

})

function gameLoop(){
  
    objSoap.collision()
    objSoap.move()
}

var timerId = setInterval(gameLoop,100)
