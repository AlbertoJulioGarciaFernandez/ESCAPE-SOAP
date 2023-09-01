function Obstacle(){
    var self = this
    this.x = 1
    this.y = 17
    this.speed = 1000 //32
    this.timerId
    this.obsCell


    this.drawOddRow= function(){
        this.obsCell = document.querySelector(".row17 .column1")
        this.obsCell.classList.add("obs1")
    }

this.move = function(){
    self.obsCell.classList.remove("obs1")
    self.x++
    self.obsCell =document.querySelector(`.row${self.y} .column${self.x}`)
    self.obsCell.classList.add("obs1")
}

this.spawn = function (){
    this.timerId = setInterval(this.move, this.speed)
}










}


var obstacle1 = new Obstacle()
obstacle1.drawOddRow()
obstacle1.spawn()

export { Obstacle }


