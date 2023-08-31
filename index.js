import { Obstacles } from "./obstacles.js"




//PlAYER FUNCTION 

function Soap() {
    var self = this
    this.x = 11
    this.y = 20
    this.direction = function () {


    }


    this.draw = function () {
        // var soapCell = document.getElementsByClassName('row20')[0].getElementsByClassName('column11')[0];
        // console.log(soapCell)
        // soapCell.classList.add("player")
        var soapCell = document.querySelector('.row20 .column11')
        soapCell.classList.add("soap")
    }
    //COMANDOS DEL JUEGO 

    this.move = function (e) {
        var key = e.key;

        switch (e.key) {
            case "w":
                var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)

                soapCell.classList.remove('soap')
                self.y--

                soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.add("soap")
                if (self.y ===1) {

                    alert('YOU WIN!')
 
                
                }


                break;
            case "a":
                var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)

                soapCell.classList.remove('soap')

                self.x--
                soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.add("soap")
                break;
            case "d":
                var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)

                soapCell.classList.remove('soap')

                self.x++
                soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.add("soap")
                break;


        }
    }
}



var objSoap = new Soap()
objSoap.draw()


window.addEventListener("keydown", objSoap.move)

