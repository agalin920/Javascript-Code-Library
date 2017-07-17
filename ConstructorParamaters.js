Constructor

var Car = function(wheels,seats,engines) {
  //Change this constructor
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};


var myCar = new Car(3,1,2);
var myCar = new Car(4,4,2);
var myCar = new Car(2,6,3);

/*
creates an object:
{
  wheels: 6,
  seats: 3,
  engines: 1
}
*/