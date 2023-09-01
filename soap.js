function Soap() {
    var self = this
    this.x = 11
    this.y = 20
    this.direction = null

    this.draw = function () {
        var soapCell = document.querySelector('.row20 .column11')
        soapCell.classList.add("soap")
    }

    this.collision = function () {
        //FRONT COLLISION 
        if (self.direction === 'up') {
            var frontCell = self.y;
            frontCell -= 1
            if (self.y > 1) {
                var checkEnemy = document.querySelector(`.row${frontCell} .column${self.x}`);

                if (checkEnemy.classList[1] === "obs1") {

                    alert('GAME OVER');
                }
            }
        }

        //LEFT COLLISION 
        var leftCell = self.x;
        leftCell -= 1
        if (self.x > 1) {
            var checkEnemy = document.querySelector(`.row${self.y} .column${leftCell}`);

            if (checkEnemy.classList[1] === "obs1") {

                alert('GAME OVER');


            }
        }

        //RIGHT COLLISION 
        var rightCell = self.x;
        rightCell += 1
        if (self.x < 21) {
            var checkEnemy = document.querySelector(`.row${self.y} .column${rightCell}`);

            if (checkEnemy.classList[1] === "obs1") {

                alert('GAME OVER');


            }
        }


    }

    this.move = function () {
        self.collision()
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

                if(self.x > 1) {

                    var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                    soapCell.classList.remove('soap')
                    self.x--
                    soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                    soapCell.classList.add("soap")
                    
                }

                break;

            
                case "right":



            if(self.x < 21) {
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

export { Soap }