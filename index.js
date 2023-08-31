function Soap ( ) {
    

    this.draw = function() {
        // var soapCell = document.getElementsByClassName('row20')[0].getElementsByClassName('column11')[0];
        // console.log(soapCell)
        // soapCell.classList.add("player")
        var soapCell = document.querySelector('.row20 .column11')
     soapCell.classList.add("soap")
    }
}
 var objSoap = new Soap()
objSoap.draw()