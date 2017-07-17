
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
  
  
};

var Bike = function() {

  var gear = 4;
  
  this.getGear = function(){
    return gear;    
  };
  
  this.setGear = function(gearSet){
    gear = gearSet;  
  };

};

var myCar = new Car();

var myBike = new Bike();
