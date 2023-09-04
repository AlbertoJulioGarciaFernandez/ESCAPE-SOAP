function RedObstacles(fila) {
    var self = this;
    this.oddY = fila;
    this.oddX = 1;
    this.speed = 800;
    this.timerId;
    this.obsCell;

    this.move = function () {

        if (self.oddX < 21) {
            self.obsCell.classList.remove("obs1");
            self.oddX++
            self.obsCell = document.querySelector(`.row${self.oddY} .column${self.oddX}`);
            self.obsCell.classList.add("obs1");
        } else {
            self.obsCell.classList.remove("obs1");
            clearInterval(this.timerId)
        }
    };

    this.spawn = function () {
        this.obsCell = document.querySelector(`.row${this.oddY} .column${this.oddX}`);
        this.obsCell.classList.add("obs1");
        this.timerId = setInterval(this.move, this.speed);
    };
}

export { RedObstacles }