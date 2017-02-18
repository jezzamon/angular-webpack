// Complex Types
// think of classes like Object.literals in JS
var Engine = (function () {
    // horsePower: number; // these are defined in the constructor using "public", otherwise it would be defined here
    // engineType: string;
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply an Engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(32, "V8");
    var car = new Car(engine);
    alert(car.engine.engineType);
    car.start();
};
