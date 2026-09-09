//auto slideshow
var slideNow = 0;
var slides = document.getElementsByClassName("slide");

function runSlideshow() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  slideNow++;
  if (slideNow > slides.length) { slideNow = 1; }
  slides[slideNow - 1].classList.add("show");
  setTimeout(runSlideshow, 3000);
}

runSlideshow();

//open the contact form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

//close the contact form
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

//check the form before sending
function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (name === "") {
    document.getElementById("formError").innerHTML = "Please enter your name.";
    return false;
  }
  if (email === "") {
    document.getElementById("formError").innerHTML = "Please enter your email.";
    return false;
  }
  if (email.indexOf("@") === -1) {
    document.getElementById("formError").innerHTML = "Please enter a valid email.";
    return false;
  }
  document.getElementById("formError").innerHTML = "";
  alert("Thanks, your message has been sent!");
  return false;
}
