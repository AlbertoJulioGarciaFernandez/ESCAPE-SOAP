function YellowObstacles(fila) {
    var self = this;
    this.oddY = fila;
    this.oddX = 21;
    this.length = 3;
    this.speed = 400;
    this.timerId;
    this.obsCells = []; //this.obsCells = [21, 22, 23]

    this.move = function () {
        self.erase();
        for (let i = 0; i < self.obsCells.length; i++) {
            self.obsCells[i]--;
        }
        /*self.obsCells[0]
        var head = document.querySelector(`.row${self.oddY} .column${self.obsCells[0]}`);
            if (head.classList.contains("soap")){
                alert("Kicked")
            }*/
        self.draw();
    };

    this.draw = function () {
        for (let i = 0; i < this.obsCells.length; i++) {
            var column = this.obsCells[i]
            if (column >= 1 && column <= 21) {
                var newCell = document.querySelector(`.row${self.oddY} .column${column}`);
                newCell.classList.add("obs2");
            }
        }
    }

    this.erase = function () {
        for (let i = 0; i < this.obsCells.length; i++) {
            var column = this.obsCells[i]
            if (column >= 1 && column <= 21) {
                var newCell = document.querySelector(`.row${self.oddY} .column${column}`);
                newCell.classList.remove("obs2");
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

export { YellowObstacles }