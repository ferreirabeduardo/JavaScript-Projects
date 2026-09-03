var myNumber = 25;
document.write(typeof myNumber);

function show_NaN() {
document.getElementById("NaN").innerHTML = 0/0;
}

function show_True() {
document.getElementById("True").innerHTML = isNaN('This is a string');
}

function show_False() {
document.getElementById("False").innerHTML = isNaN('007');
}

function show_Infinity() {
document.getElementById("Infinity").innerHTML = 3E310;
}

function show_NegInfinity() {
document.getElementById("NegInfinity").innerHTML = -3E310;
}

function show_BoolTrue() {
document.getElementById("BoolTrue").innerHTML = (10 > 2);
}

function show_BoolFalse() {
document.getElementById("BoolFalse").innerHTML = (10 < 2);
}

function show_EqualTrue() {
document.getElementById("EqualTrue").innerHTML = (10 == 10);
}

function show_EqualFalse() {
document.getElementById("EqualFalse").innerHTML = (3 == 11);
}

function show_StrictTrue() {
var X = 10;
var Y = 10;
document.getElementById("StrictTrue").innerHTML = (X === Y);
}

function show_StrictFalse1() {
var X = 82;
var Y = "hello";
document.getElementById("StrictFalse1").innerHTML = (X === Y);
}

function show_StrictFalse2() {
var X = 82;
var Y = "82";
document.getElementById("StrictFalse2").innerHTML = (X === Y);
}

function show_StrictFalse3() {
var X = 10;
var Y = 25;
document.getElementById("StrictFalse3").innerHTML = (X === Y);
}

function show_AndTrue() {
document.getElementById("AndTrue").innerHTML = (5 > 2 && 10 > 4);
}

function show_AndFalse() {
document.getElementById("AndFalse").innerHTML = (5 > 10 && 10 > 4);
}

function show_OrTrue() {
document.getElementById("OrTrue").innerHTML = (5 > 10 || 10 > 4);
}

function show_OrFalse() {
document.getElementById("OrFalse").innerHTML = (5 > 10 || 10 > 20);
}

function show_NotTrue() {
document.getElementById("NotTrue").innerHTML = !(5 > 10);
}

function show_NotFalse() {
document.getElementById("NotFalse").innerHTML = !(5 > 2);
}
