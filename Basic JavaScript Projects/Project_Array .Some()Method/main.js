var ages = [1,2,6,5,15,16,18,20,25,30,35,40,45,50,55,60,65,70,75,80];

checkAge = (age) => age>=18;

function myFunction() {
    document.getElementById('ageDisplay').innerHTML = "Some over 18 is " + ages.some(checkAge);
}
myFunction();
