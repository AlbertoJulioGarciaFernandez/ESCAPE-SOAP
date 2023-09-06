import { Soap } from "./soap.js";
import { RedObstacles } from "./redobstacle.js";
import { YellowObstacles } from "./yellowobstacle.js";
import { PinkObstacles } from "./pinkobstacle.js";
import { GreenObstacles } from "./greenobstacle.js";

var gameOver = false,
    objSoap,
    timerId,
    timerIdRed,
    timerIdYellow,
    timerIdPink,
    timerIdGreen,
    redObstacles = [],
    yellowObstacles = [],
    pinkObstacles = [],
    greenObstacles = [];

function initGame() {
    createBoard();
    setInterval(addNewRedObstacle, 4000);
    setInterval(addNewYellowObstacle, 2000);
    setInterval(addNewPinkObstacle, 2500);
    setInterval(addNewGreenObstacle, 3000);
    objSoap = new Soap(11, 20);
    objSoap.draw();
    timerId = setInterval(gameLoop, 10);
    timerIdRed = setInterval(moveRedObstacles, 800);
    timerIdYellow = setInterval(moveYellowObstacles, 300);
    timerIdPink = setInterval(movePinkObstacles, 300);
    timerIdGreen = setInterval(moveGreenObstacles, 800);
}

var opening = document.getElementById("opening")
//Llamar div y button

opening.addEventListener("click", function (e) {
    opening.classList.add("hidden")
    var canvas = document.getElementById("canvas")
    canvas.classList.remove("hidden")
    initGame();
})

function createBoard() {
    createInitialRedObstacles();
    createInitialYellowObstacles();
    createInitialPinkObstacles();
    createInitialGreenObstacles();
}

//CHECK IF AVAILABLE
function isColumnAvailableForObstacle(row, column, distance, obstacles) {
    for (const obstacle of obstacles) {
        if (obstacle.oddY === row) {
            if (Math.abs(obstacle.oddX - column) < distance) {
                return false;
            }
        }
    }
    return true;
}

//RED OBSTACLES
function createInitialRedObstacles() {
    for (let row = 17; row >= 11; row -= 2) {
        const column = Math.floor(Math.random() * 21);
        const obstacle = new RedObstacles(row, column);
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

function moveRedObstacles() {
    for (let i = 0; i < redObstacles.length; i++) {
        //for (const redObstacle of redObstacles) {
        redObstacles[i].move();
    }
}

// YELLOW OBSTACLES
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
    var column = Math.floor(Math.random() * 16) + 2;
    if (isColumnAvailableForObstacle(row, column, 6, yellowObstacles)) {
        for (let i = 0; i < 3; i++) {
            const obstacle = new YellowObstacles(row, column + i);
            yellowObstacles.push(obstacle);
        }
    }
}

//PINK OBSTACLES
function createInitialPinkObstacles() {
    for (let row = 9; row > 2; row -= 2) {
        var column = Math.floor(Math.random() * 16) + 2;
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
    var rowRange = Math.floor(Math.random() * 3);
    var row = rowRange === 0 ? 9 : rowRange === 1 ? 7 : rowRange === 2 ? 5 : 3;
    var column = Math.floor(Math.random() * 13) + 2;
    if (isColumnAvailableForObstacle(row, column, 8, pinkObstacles)) {
        for (let i = 0; i < 3; i++) {
            const obstacle = new PinkObstacles(row, column + i);
            pinkObstacles.push(obstacle);
        }
    }
}

//GREEN OBSTACLES
function createInitialGreenObstacles() {
    for (let row = 8; row > 2; row -= 2) {
        var column = Math.floor(Math.random() * 19) + 2;
        for (let i = 0; i < 4; i++) {
            const obstacle = new GreenObstacles(row, column + i);
            greenObstacles.push(obstacle);
        }
    }
}

function moveGreenObstacles() {
    for (let i = greenObstacles.length - 1; i >= 0; i--) {
        greenObstacles[i].move();
    }
}

function addNewGreenObstacle() {
    var rowRange = Math.floor(Math.random() * 2);
    var row = rowRange === 0 ? 8 : rowRange === 1 ? 6 : 4;
    var column = Math.floor(Math.random() * 14) + 4;
    if (isColumnAvailableForObstacle(row, column, 8, greenObstacles)) {
        for (let i = 0; i < 3; i++) {
            const obstacle = new GreenObstacles(row, column + i);
            greenObstacles.push(obstacle);
        }
    }
}

//GAME OVER
function setGameOver(value) {
    gameOver = value;
    if (gameOver) {
        var endGame = document.getElementById("ending")
        //Cambiar ID de imagen por div (img + button)
        //Llamar button
        endGame.classList.remove("hidden")
        clearInterval(timerId);
        clearInterval(timerIdRed);
        clearInterval(timerIdYellow);
        clearInterval(timerIdPink);
        clearInterval(timerIdGreen);
    }
}

//Evento click button Game Over


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