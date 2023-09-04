import { RedObstacles } from "./redobstacle.js"
import { Soap } from "./soap.js"
import { YellowObstacles } from "./yellowobstacle.js"
var gameOver = false,
    obstacle1 = new RedObstacles(),
    obstacle2 = new YellowObstacles(),
    
    objSoap = new Soap(obstacle1),
    timerId = setInterval(gameLoop, 100),
    timerIdRed = setInterval(redObstacles, 1000),
    timerIdYellow = setInterval(yellowObstacles,1000),
    leftCol = 1,
    rightCol = 21;

// Instanciación de los obstáculos filas impares (sección inferior)
function redObstacles() {
    for (let fila = 17; fila >= 11; fila -= 2) {
        if (Math.round(Math.random() * 10) === 3) {
            var obstacle = new RedObstacles(fila);
            obstacle.spawn();
        }
    }
}

// Instanciación de los obstáculos filas pares (sección inferior)
// ENEMIGOS AMARILLOS
function yellowObstacles() {
    for (let fila = 16; fila > 10; fila -= 2) {
        if (Math.round(Math.random() * 8) === 2) {
            var obstacle = new YellowObstacles(fila);
            obstacle.spawn();
    }
    }
}

function setGameOver(value) {
    gameOver = value;

    if (gameOver) {
        alert('GAME OVER');
    }
}

// obstacle1.drawOddRow();
// obstacle1.drawEvenRow();
objSoap.draw();
// obstacle1.spawn();

window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "w":
            objSoap.direction = "up";
            break;
        case "a":
            objSoap.direction = "left";
            break;
        case "d":
            objSoap.direction = "right";
            break;
    }
});

window.addEventListener("keyup", function (e) {
    objSoap.direction = null;
});

function gameLoop() {
    if (!gameOver) {
        objSoap.collision();
        objSoap.move();
    }
}

export { gameOver, setGameOver }