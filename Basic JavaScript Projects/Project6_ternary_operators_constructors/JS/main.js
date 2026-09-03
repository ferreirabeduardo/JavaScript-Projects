function Ride_Function() {
var Height, Can_ride;
Height = document.getElementById("Height").value;
Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
var Age, Can_vote;
Age = document.getElementById("Age").value;
Can_vote = (Age < 18) ? "You are not old enough to vote":"You can vote!";
document.getElementById("Vote").innerHTML = Can_vote;
}

function pass_score_function() {
    var score, scorechecked;
    score= document.getElementById("score").value;
    scorechecked=(score<75)? "You did not pass":"You passed!";
    document.getElementById("scorechecked").innerHTML =scorechecked;

}

function Vehicle(Make, Model, Year, Color) {
this.Vehicle_Make = Make;
this.Vehicle_Model = Model;
this.Vehicle_Year = Year;
this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
document.getElementById("Keywords_and_Constructors").innerHTML =
"Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
" manufactured in " + Erik.Vehicle_Year;
}

function reserved_Function() {
var myVar = "var";
document.getElementById("Reserved").innerHTML = myVar;
}

function Person(first, last, age, eye) {
this.firstName = first;
this.lastName = last;
this.age = age;
this.eyeColor = eye;
}

function person_Function() {
var Bob = new Person("Bob", "Smith", 40, "Blue");
document.getElementById("Person").innerHTML = Bob.firstName + " " + Bob.lastName + " is " + Bob.age + " with " + Bob.eyeColor + " eyes.";
}   

//nested functon here 
function count_function() {
    document.getElementById("count").innerHTML = count();
    function count() {
        var starting_point = 1;
        function plus_one() {starting_point += 10;}
        plus_one();
        return starting_point;
    }       

}