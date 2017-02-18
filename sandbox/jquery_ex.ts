$(document).ready( function () {
  let calc = new Calculator('X','Y', 'Output');

});

//jquery type definitions loaded in typings
class Calculator {
  private x: JQuery;
  private y: JQuery;
  private output: JQuery;

  constructor(xId: string, yId: string, outputId: string) {
    this.x = $('#' + xId);
    this.y = $('#' + yId);
    this.output = $('#' + outputId);
    this.wireEvents();

  }

  private wireEvents() {
    $("#Add").click(event => {
      this.output.html(this.add(parseInt(this.x.val()), parseInt(this.y.val())))
    });
    $("#Subtract").click(event => {
      this.output.html(this.subtract(parseInt(this.x.val()), parseInt(this.y.val())))
    });
  }

  add(x: number, y: number) {
    return x + y;
  }

  subtract(x:number, y:number) {
    return x - y;
  }
}
