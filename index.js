import { RedObstacles } from "./redobstacle.js"
import { Soap } from "./soap.js"
import { YellowObstacles } from "./yellowobstacle.js"
import { PinkObstacles } from "./pinkobstacle.js";
import { GreenObstacles } from "./greenobstacle.js";

var gameOver = false,
    obstacle1 = new RedObstacles(),
    obstacle2 = new YellowObstacles(),
    obstacle3 = new PinkObstacles(),
    obstacle4 = new GreenObstacles(),
    
    objSoap = new Soap(),
    timerId = setInterval(gameLoop, 100),
    timerIdRed = setInterval(redObstacles, 1800),
    timerIdYellow = setInterval(yellowObstacles,2000),
    timerIdPink = setInterval(pinkObstacles, 4000)
    timerIdGreen = setInterval(greenObstacles, 5000)
    leftCol = 1,
    rightCol = 21;

// Instanciación de los obstáculos filas impares (sección inferior)
function redObstacles() {
    for (let fila = 17; fila >= 11; fila -= 2) {
        if (Math.ceil(Math.random() * 3) > 1) {
            var obstacle = new RedObstacles(fila);
            obstacle.spawn();
        }
    }
}

// Instanciación de los obstáculos filas pares (sección inferior)
// ENEMIGOS AMARILLOS
function yellowObstacles() {
    for (let fila = 16; fila > 10; fila -= 2) {
        if (Math.ceil(Math.random() * 3) > 1) {
            var obstacle = new YellowObstacles(fila);
            obstacle.spawn();
    }
    }
}

// ENEMIGOS AMARILLOS
function pinkObstacles() {
    for (let fila = 9; fila > 2; fila -= 2) {
        if (Math.ceil(Math.random() * 3) > 1) {
            var obstacle = new PinkObstacles(fila);
            obstacle.spawn();
    }
    }
}

//Enemigos Verdes
function greenObstacles() {
    for (let fila = 8; fila > 2; fila -= 2) {
        if (Math.ceil(Math.random() * 3) > 1) {
            var obstacle = new GreenObstacles(fila);
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

objSoap.draw();

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
        objSoap.move();
    }
}

export { gameOver, setGameOver }