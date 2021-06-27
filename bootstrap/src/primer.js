console.log('Hello');
console.log('----------------------------------------------------------------');
let myFunc = function(name, weather) {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
};
myFunc("Adam", "sunny");
console.log('----------------------------------------------------------------');
let myFunc = function (name, weather = "") {
  console.log("Hello " + name + ".");
  console.log("It is " + weather + " today");
};
myFunc("Adam");
