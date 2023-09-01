import { Obstacles } from "./obstacles.js"

function Soap() {
    var self = this
    this.x = 11
    this.y = 20
    this.direction = function () {

    }

    this.draw = function () {
        var soapCell = document.querySelector('.row20 .column11')
        soapCell.classList.add("soap")
    }

        this.move = function (e) {
        var key = e.key;
        switch (key) {
            case "w":
                if (self.y > 1){
                var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.remove('soap')
                self.y--
                soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.add("soap")
                if (self.y === 1) {
                    alert('YOU WIN!')
                }
            }
                break;
            case "a":
                if(self.x > 1){
                var soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.remove('soap')
                self.x--
                soapCell = document.querySelector(`.row${self.y} .column${self.x}`)
                soapCell.classList.add("soap")
            }    
                break;
            case "d":
                if(self.x < 21){
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

var objSoap = new Soap()
objSoap.draw()


window.addEventListener("keydown", objSoap.move)

