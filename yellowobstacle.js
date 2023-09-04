function YellowObstacles(fila) {
    var self = this;
    this.oddY = fila;
    this.oddX = 21;
    this.lenght = 3;
    this.speed = 800;
    this.timerId;
    this.obsCell;

    this.move = function () {
        for(let i = self.oddX; i < self.oddX + self.length; i++)
        if (self.oddX > 1) {
            self.obsCell.classList.remove("obs2");
            self.oddX--
            self.obsCell = document.querySelector(`.row${self.oddY} .column${self.oddX}`);
            self.obsCell.classList.add("obs2");
        } else {
            self.obsCell.classList.remove("obs2");
            clearInterval(this.timerId)
        }
    };

    this.spawn = function () {
        this.obsCell = document.querySelector(`.row${this.oddY} .column${this.oddX}`);
        this.obsCell.classList.add("obs2");
        this.timerId = setInterval(this.move, this.speed);
    };
}

export { YellowObstacles }