function PinkObstacles(fila){
    var self = this;
    this.oddY = fila;
    this.oddX = 21;
    this.length = 4;
    this.speed = 1000;
    this.timerId;
    this.obsCells = []; //this.obsCells = [21, 22, 23, 24]

    this.move = function () {
        self.erase();
        for (let i = 0; i < self.obsCells.length; i++) {
            self.obsCells[i]--;
        }
        self.draw();
    };

    this.draw = function () {
        for (let i = 0; i < this.obsCells.length; i++) {
            var column = this.obsCells[i]
            if (column >= 1 && column <= 21) {
                var newCell = document.querySelector(`.row${self.oddY} .column${column}`);
                newCell.classList.add("obs3");
            }
        }
    }

    this.erase = function () {
        for (let i = 0; i < this.obsCells.length; i++) {
            var column = this.obsCells[i]
            if (column >= 1 && column <= 21) {
                var newCell = document.querySelector(`.row${self.oddY} .column${column}`);
                newCell.classList.remove("obs3");
            }
        }
    }

    this.spawn = function () {
        for (let i = this.oddX; i < this.oddX + this.length; i++) {
            this.obsCells.push(i)
        }
        this.draw();
        this.timerId = setInterval(this.move, this.speed);
    };
}

export { PinkObstacles }