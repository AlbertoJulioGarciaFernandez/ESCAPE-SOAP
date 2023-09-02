import { Obstacle } from "./obstacle.js"
import { Soap } from "./soap.js"

var gameOver = false,
    obstacle1 = new Obstacle(),
    objSoap = new Soap(obstacle1),
    timerId = setInterval(gameLoop, 100),
    leftCol = 1,
    rightCol = 21,
    xArrCoord = [];

// Instanciación de los obstáculos filas impares (sección inferior)
for (let fila = 17; fila >= 11; fila -= 2) {
    var obsCell = document.querySelector(`.row${fila} .column${leftCol}`),
        obstacle = new Obstacle(obsCell, fila, leftCol, rightCol);

    obsCell.classList.add("obs1");
    obstacle.drawOddRow();
}

// Instanciación de los obstáculos filas pares (sección inferior)
for (let fila = 16; fila > 10; fila -= 2) {
    xArrCoord = [rightCol, rightCol - 1, rightCol - 2];
    var obsCell = null,
        obstacle = new Obstacle(obsCell, fila, rightCol);

    obstacle.drawEvenRow();
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

export { gameOver, setGameOver, xArrCoord }