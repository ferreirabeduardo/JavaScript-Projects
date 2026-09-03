var X = 10;
function Add_numbers_1() {
document.write(20 + X + "<br>");
}
function Add_numbers_2() {
document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

function Local_1() {
var Y = 10;
console.log(15 + Y);
}
function Local_2() {
console.log(Y + 100);
}
Local_1();
Local_2();


function get_hour() {
    if (new Date().getHours() <12) {
        document.getElementById("Hi").innerHTML = "Good Morning!";
    }  
}

function greeting_function() {
var hour = new Date().getHours();
if (hour < 12) {
document.getElementById("Greeting").innerHTML = "Good Morning!";
} else if (hour < 18) {
document.getElementById("Greeting").innerHTML = "Good Afternoon!";
} else {
document.getElementById("Greeting").innerHTML = "Good Evening!";
}
}

function check_number() {
var number = document.getElementById("numberInput").value;
if (number > 10) {
document.getElementById("numberResult").innerHTML = "Your number is above 10";
} else {
document.getElementById("numberResult").innerHTML = "Your number is 10 or below";
}
}
