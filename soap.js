import { gameOver, setGameOver } from "./index.js";

function Soap(enemy) {
    var self = this
    this.x = 11
    this.y = 20
    this.direction = null

    this.draw = function () {
        var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
        soapCell.classList.add("soap")
    }

    this.collision = function () {
        if (!gameOver) {
            if (self.direction === 'up') {
                var frontCell = self.y;
                frontCell -= 1
                if (self.y > 1) {
                    var checkEnemy = document.querySelector(`.row${frontCell} .column${self.x}`);
                    if (checkEnemy.classList.contains("obs1")) {
                        setGameOver(true);
                    }
                }
            }

            var leftCell = self.x;
            leftCell -= 1
            if (self.x > 1) {
                var checkEnemy = document.querySelector(`.row${self.y} .column${leftCell}`);
                if (checkEnemy.classList.contains("obs1")) {
                    setGameOver(true);
                }
            }

            var rightCell = self.x;
            rightCell += 1
            if (self.x < 21) {
                var checkEnemy = document.querySelector(`.row${self.y} .column${rightCell}`);
                if (checkEnemy.classList.contains("obs1")) {
                    setGameOver(true)
                }
            }
        }
    }

    this.move = function () {
        self.collision()
        if (!gameOver) {
            switch (self.direction) {
                case "up":
                    var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                    soapCell.classList.remove('soap');
                    self.y--
                    soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                    soapCell.classList.add("soap")
                    if (self.y === 1) {
                        alert('YOU WIN!')
                    }
                    break;

                case "left":
                    if (self.x > 1) {
                        var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                        soapCell.classList.remove('soap')
                        self.x--
                        soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                        soapCell.classList.add("soap")
                    }
                    break;
                case "right":
                    if (self.x < 21) {
                        var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                        soapCell.classList.remove('soap')
                        self.x++
                        soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                        soapCell.classList.add("soap")
                    }
                    break;
            }
        }
    }
}

export { Soap }