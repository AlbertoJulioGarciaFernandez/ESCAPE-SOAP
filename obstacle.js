import { xArrCoord } from "./index.js";

function Obstacle(obsCell, row, leftCol) {
    var self = this;
    this.oddY = row;
    this.oddX = leftCol;
    this.speed = 1000;
    this.timerId;
    this.obsCell = obsCell;

    this.drawOddRow = function () {
        // this.x = 1;
        // this.obsCell = document.querySelector(`.row${this.y} .column${this.x}`);
        // this.obsCell.classList.add("obs1");
        // for (let fila = 17; fila >= 11; fila -= 2) {
        //     this.y = fila;
        //     this.obsCell = document.querySelector(`.row${this.y} .column${this.x}`);
        //     this.obsCell.classList.add("obs1");
        //     this.spawn();
        // }
        this.spawn('left-right');
    };

    this.drawEvenRow = function () {
        //     for (let fila = 16; fila >= 10; fila -= 2) {
        //         self.y = fila;
        //         this.obsCell = document.querySelector(`.row${self.y} .column${self.evenX}`);
        //         this.obsCell.classList.add("obs2");
        //         this.obsCell = document.querySelector(`.row${self.y} .column${self.evenX - 1}`);
        //         this.obsCell.classList.add("obs2");
        //     }
        this.spawn('right-left');
    };
    this.move = function (movDirection) {

        if (movDirection === 'left-right') {
            self.obsCell.classList.remove("obs1");

            if (self.oddX < 21) {
                self.oddX++;
            } else {
                self.oddX = 1;
            }

            self.obsCell = document.querySelector(`.row${self.oddY} .column${self.oddX}`);
            self.obsCell.classList.add("obs1");
        } else {
            // Almacenamos las x que queremos iluminar
            var cell1 = document.querySelector(`.row${row} .column${xArrCoord[0]}`),
                cell2 = document.querySelector(`.row${row} .column${xArrCoord[1]}`),
                cell3 = document.querySelector(`.row${row} .column${xArrCoord[2]}`);

            // // Coordenada Y = 16, X = 21
            if (!cell1.classList.contains('obs2')) {
                cell1.classList.add("obs2");
            }

            // Coordenada Y = 16, X = 20
            if (!cell2.classList.contains('obs2')) {
                cell2.classList.add("obs2");
            }

            // Coordenada Y = 16, X = 19
            if (!cell3.classList.contains('obs2')) {
                cell3.classList.add("obs2");
            }

            cell1.classList.remove("obs2");//21

            if (xArrCoord[2] > 1) {
                xArrCoord[2]--;
            } else {
                xArrCoord[0] = 21;
                xArrCoord[1] = 20;
                xArrCoord[2] = 19;
            }

            cell3 = document.querySelector(`.row${row} .column${xArrCoord[2]}`);
            cell3.classList.add("obs2");

            xArrCoord[0] = xArrCoord[0] - 1;//20
            xArrCoord[1] = xArrCoord[1] - 1;//19

        }

    };

    this.spawn = function (movDir) {
        this.timerId = setInterval(this.move, this.speed, movDir);
    };

}

export { Obstacle }