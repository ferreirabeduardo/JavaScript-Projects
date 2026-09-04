function count_To_Ten() {
var X = 1;
var Digit = "";
while (X < 11) {
Digit += "<br>" + X;
X++;
document.getElementById("Counting_to_Ten").innerHTML = Digit;
}
}

function length_method() {
var text = "Hello World!";
var length = text.length;
document.getElementById("length").innerHTML = length;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
for (Y = 0; Y < Instruments.length; Y++) {
Content += Instruments[Y] + "<br>";
document.getElementById("List_of_Instruments").innerHTML = Content;
}
}

function cat_pics() {
var Cat_Picture = [];
Cat_Picture[0] = "sleeping";
Cat_Picture[1] = "playing";
Cat_Picture[2] = "eating";
Cat_Picture[3] = "purring";
document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

const Musical_Instrument = {
type: "guitar",
color: "black",
price: 900
};
function constant_function() {
Musical_Instrument.color = "blue";
Musical_Instrument.brand = "Fender";
document.getElementById("Constant").innerHTML = "The " + Musical_Instrument.color + " " + Musical_Instrument.brand + " " + Musical_Instrument.type + " was $" + Musical_Instrument.price;
}

function let_function() {
let X = 82;
if (X > 10) {
let X = 33;
document.getElementById("Let").innerHTML = "Inside the block X is " + X;
}
document.getElementById("Let").innerHTML += "<br>Outside the block X is " + X;
}

function greeting(name) {
return "Hello " + name;
}
function multiply(a, b) {
return a * b;
}
function return_function() {
document.getElementById("Return").innerHTML = greeting("John") + "<br>4 times 3 is " + multiply(4, 3);
}

let car = {
make: "Dodge",
model: "Viper",
year: 2021,
color: "red ",
description: function() {
return "The car is a " + this.year + " " + this.color + this.make + " " + this.model;
}
};
function car_function() {
document.getElementById("Car_object").innerHTML = car.description();
}

function break_function() {
let text = "";
for (let i = 0; i < 10; i++) {
if (i === 3) { break; }
text += "The number is " + i + "<br>";
}
document.getElementById("Break").innerHTML = text;
}

function continue_function() {
let text = "";
for (let i = 0; i < 10; i++) {
if (i === 3) { continue; }
text += "The number is " + i + "<br>";
}
document.getElementById("Continue").innerHTML = text;
}
