// define types for function

// here we are saying accept a an object with two properties, one optional, and expect to return a number
let squareIt: (rect: { h: number; w?: number; }) => number;  // commented out in favor of interface

// another preferred way is setting an interface
interface Rectangle {
    h: number;
    w?: number;
}

// here we are saying accept a an object using the Rectangle interface to get type of properties, and expect to return a number
let squareItWithInterface: (rect: Rectangle) => number;


let rectA = {h: 8 };
let rectB = {h: 32, w: 32};

// switch between squareIt and squareItWithInterface should work the same
squareItWithInterface = (rect) => {
    if (rect.w === undefined) {
        return rect.h * rect.w;
    }
    return rect.h * rect.w;
};


console.log(squareIt(rectA));
console.log(squareIt(rectB));

// create Interface for person
interface Person {
    name: String;
    age?: number; // age optional
    kids: number;
    calcPets: () => number; // returns a number
    makeYounger: (years: number) => void; // does not return anything
    greet: (msg: string) => string;
}

// declare variable p with Person interface as model
let p: Person {
    name: 'Colleen',
    kids: 4,
    age: 30,
    calcPets: function() {
        return this.kids * 2;
    },
    makeYounger: function(years: number) {
        this.age -= years;
    },
    greet: function (msg: string) {
      return `${msg}, ${this.name}`;
    }
};

let pets = p.calcPets();
console.log(pets);

p.makeYounger(15);
let newAge = p.age;
console.log(newAge);

let msg = p.greet("Good day to you");
console.log(msg);

//using interface with revealing module pattern
  //interface for two methods in module

interface SessionEval {
  addRating: (rating: number) => void;
  calcRating: () => number;
}

function sessionEvaluator(): SessionEval {

  let ratings: number[] = [];

  let addRating = (rating: number) => {
    ratings.push(rating);
  };
  let calcRating = () => {
    let sum: number;
    ratings.forEach( (score) => sum += score)

    return sum / ratings.length;
};

  return {
    addRating: addRating,
    calcRating: calcRating
  };
};

let s = sessionEvaluator();
s.addRating(4);
s.addRating(5);
s.addRating(4);
s.addRating(5);








