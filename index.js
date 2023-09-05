import { RedObstacles } from "./redobstacle.js";
import { Soap } from "./soap.js";
import { YellowObstacles } from "./yellowobstacle.js";
import { PinkObstacles } from "./pinkobstacle.js";
import { GreenObstacles } from "./greenobstacle.js";

var gameOver = false,
    objSoap = new Soap(11, 20),
    timerId = setInterval(gameLoop, 10),
    timerIdRed = setInterval(moveRedObstacles, 800),
    timerIdYellow = setInterval(moveYellowObstacles, 900),
    timerIdPink = setInterval(movePinkObstacles, 500),
    /*timerIdGreen = setInterval(greenObstacles, 5000),*/
    leftCol = 1,
    rightCol = 21;
var redObstacles = [];
var yellowObstacles = [];
var pinkObstacles = [];

createBoard();
setInterval(addNewRedObstacle, 4000);
setInterval(addNewYellowObstacle, 3000);
setInterval(addNewPinkObstacle, 2500);

function createBoard() {
    createInitialRedObstacles();
    createInitialYellowObstacles();
    createInitialPinkObstacles();
}

function createInitialRedObstacles() {
    for (let row = 17; row >= 11; row -= 2) {
        var column = Math.floor(Math.random() * 21);
        var obstacle = new RedObstacles(row, column);
        redObstacles.push(obstacle);
    }
}

function addNewRedObstacle() {
    var rowRange = Math.floor(Math.random() * 3);
    var row =
        rowRange === 0 ? 17 : rowRange === 1 ? 15 : rowRange === 2 ? 13 : 11;
    var column = Math.floor(Math.random() * 20);
    if (isColumnAvailableForObstacle(row, column, 4, redObstacles)) {
        var obstacle = new RedObstacles(row, column);
        redObstacles.push(obstacle);
    }
}

function isColumnAvailableForObstacle(row, column, distance, obstacles) {
    for (const obstacle of obstacles) {
        if (obstacle.oddY === row) {
            if (Math.abs(obstacle.oddX - (column)) < distance) {
                return false;
            }
        }
    }
    return true;
}

function moveRedObstacles() {
    for (let i = 0; i < redObstacles.length; i++) {
        //for (const redObstacle of redObstacles) {
        redObstacles[i].move();
    }
}

// Instanciación de los obstáculos filas pares (sección inferior)
// ENEMIGOS AMARILLOS
function createInitialYellowObstacles() {
    for (let row = 16; row >= 12; row -= 2) {
        var column = Math.floor(Math.random() * 19);
        for (let i = 0; i < 3; i++) {
            const obstacle = new YellowObstacles(row, column + i);
            yellowObstacles.push(obstacle);
        }
    }
}

function moveYellowObstacles() {
    for (let i = 0; i < yellowObstacles.length; i++) {
        yellowObstacles[i].move();
    }
}

function addNewYellowObstacle() {
    var rowRange = Math.floor(Math.random() * 2);
    var row = rowRange === 0 ? 16 : rowRange === 1 ? 14 : 12;
    var column = Math.floor(Math.random() * 19);
    if (isColumnAvailableForObstacle(row, column, 6, yellowObstacles)) {
        for (let i = 0; i < 3; i++) {
            const obstacle = new YellowObstacles(row, column + i);
            yellowObstacles.push(obstacle);
        }
    }
}

//PINK OBS
function createInitialPinkObstacles() {
    for (let row = 9; row > 2; row -= 2) {
        var column = Math.floor(Math.random() * 19);
        for (let i = 0; i < 2; i++) {
            const obstacle = new PinkObstacles(row, column + i);
            pinkObstacles.push(obstacle);
        }
    }
}

function movePinkObstacles() {
    for (let i = 0; i < pinkObstacles.length; i++) {
        pinkObstacles[i].move();
    }
}

function addNewPinkObstacle() {
    var rowRange = Math.floor(Math.random() * 2);
    var row = rowRange === 0 ? 9 : rowRange === 1 ? 7 : rowRange === 2 ? 5 : 3;
    var column = Math.floor(Math.random() * 19);
    if (isColumnAvailableForObstacle(row, column, 5, pinkObstacles)) {
        for (let i = 0; i < 3; i++) {
            const obstacle = new PinkObstacles(row, column + i);
            pinkObstacles.push(obstacle);
        }
    }
}


function setGameOver(value) {
    gameOver = value;
    if (gameOver) {
        alert("GAME OVER");
        clearInterval(timerId);
    }
}

objSoap.draw();

window.addEventListener("keydown", function (e) {
    switch (e.key) {
        case "w":
            objSoap.move("up");
            break;
        case "a":
            objSoap.move("left");
            break;
        case "d":
            objSoap.move("right");
            break;
    }
});

function gameLoop() {
    if (objSoap.collision() === true) {
        setGameOver(true);
    }
}

export { gameOver, setGameOver };
