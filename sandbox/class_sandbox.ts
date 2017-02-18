// Complex Types
// think of classes like Object.literals in JS
class Engine {
  // horsePower: number; // these are defined in the constructor using "public", otherwise it would be defined here
  // engineType: string;
  constructor(public horsePower: number, public engineType: string) {}
}

class Car {
  private _engine: Engine;  // set this field to private, only accesible through getter or setter below, passing the Engine class as type

  constructor(engine: Engine) {
    this.engine = engine;  //calls the setter
  }

  //note these get and set properties wont work on older browsers , will need to explicitly set names like getEngine and setEngine
  //getters and setters to use
    // car.engine   // calls the getter
    // car.engine = { horsePower: 38, engineType: "v8"}  // calls the setter and changes values
  //additional info http://stackoverflow.com/questions/12827266/get-and-set-in-typescript

  get engine(): Engine {
    return this._engine;
  }

  set engine(value: Engine) {
    if (value == undefined) throw 'Supply an Engine';
    this._engine = value;
  }

  start():void {
    alert('Car engine started ' + this._engine.engineType)
  }
}

window.onload = function () {
  var engine = new Engine(32, "V8");
  var car = new Car(engine);
  alert(car.engine.engineType);
  car.start();
};



