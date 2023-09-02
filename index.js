import { Obstacle } from "./obstacle.js"
import { Soap } from "./soap.js"

var gameOver = false;

function setGameOver(value) {
    gameOver = value;
    if (gameOver) {
        alert('GAME OVER');
    }
}

var obstacle1 = new Obstacle(),
    objSoap = new Soap(obstacle1),
    timerId = setInterval(gameLoop, 100);

obstacle1.drawOddRow();
objSoap.draw();
obstacle1.spawn();

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
    objSoap.direction = null;
})

function gameLoop() {
    if (!gameOver) {
        objSoap.collision()
        objSoap.move()
    }
}

export { gameOver, setGameOver }