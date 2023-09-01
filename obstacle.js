function Obstacle() {
    var self = this
    this.x = 1
    this.y = 17
    this.speed = 500 //32
    this.timerId
    this.obsCell
    // this.randomPosLeft = Math.random() 


    this.drawOddRow = function () {
        this.obsCell = document.querySelector(`.row${self.y} .column${self.x}`)
        this.obsCell.classList.add("obs1")
    }

    this.move = function () {
        self.obsCell.classList.remove("obs1")
        if (self.x < 21) {
            self.x++            
        } else {
            self.x = 1;            
        }
        self.obsCell = document.querySelector(`.row${self.y} .column${self.x}`)
        self.obsCell.classList.add("obs1")
    }

    this.spawn = function () {
        this.timerId = setInterval(this.move, this.speed)
    }

    










}

export { Obstacle }


