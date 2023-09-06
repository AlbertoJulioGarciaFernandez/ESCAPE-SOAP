function Soap(x, y) {
  var self = this;
  this.x = x;
  this.y = y;
  this.direction = null;

  this.draw = function () {
    var soapCell = document.querySelector(`.row${self.y} .column${self.x}`);
    soapCell.classList.add("soap");
  };

  this.collision = function () {
    var checkEnemy = document.querySelector(`.row${self.y} .column${self.x}`);
    if (
      checkEnemy.classList.contains("obs1") ||
      checkEnemy.classList.contains("obs2") ||
      checkEnemy.classList.contains("obs3") ||
      checkEnemy.classList.contains("obs4")
    ) {
      return true;
    }
    return false;
  };

  this.move = function (direction) {
    switch (direction) {
      case "up":
        var soapCell = document.querySelector(`.row${self.y} .column${self.x}`);
        soapCell.classList.remove("soap");
        self.y--;
        soapCell = document.querySelector(`.row${self.y} .column${self.x}`);
        soapCell.classList.add("soap");
        if (self.y === 1) {
          var win = document.querySelector(`.win`);
          win.classList.remove('hidden')
        }

        break;
      case "left":
        if (self.x > 1) {
          var soapCell = document.querySelector(
            `.row${self.y} .column${self.x}`
          );
          soapCell.classList.remove("soap");
          self.x--;
          soapCell = document.querySelector(`.row${self.y} .column${self.x}`);
          soapCell.classList.add("soap");
        }

        break;
      case "right":
        if (self.x < 21) {
          var soapCell = document.querySelector(
            `.row${self.y} .column${self.x}`
          );
          soapCell.classList.remove("soap");
          self.x++;
          soapCell = document.querySelector(`.row${self.y} .column${self.x}`);
          soapCell.classList.add("soap");
        }
        break;
    }
  };
}

export { Soap };
