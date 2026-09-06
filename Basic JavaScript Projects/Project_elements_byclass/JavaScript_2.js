function validate_form() {
var name = document.forms["contactForm"]["name"].value;
var email = document.forms["contactForm"]["email"].value;

if (name == "") {
document.getElementById("error").innerHTML = "Please enter your name.";
return false;
}
if (email == "") {
document.getElementById("error").innerHTML = "Please enter your email.";
return false;
}
if (email.indexOf("@") == -1) {
document.getElementById("error").innerHTML = "Please enter a valid email.";
return false;
}
document.getElementById("error").innerHTML = "";
return true;
}
