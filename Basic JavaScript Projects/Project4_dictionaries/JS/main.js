function my_dictionary() {
    var Animal = {
    Species: "Dog",
    Color: "Brown",
    Breed: "Labrador",
    Age: 5,
    Sound: "Bark"
    };
delete Animal.Sound;
document.getElementById("Dictionary").innerHTML = "Species: " + Animal.Species;
document.getElementById("Deleted").innerHTML = "Sound after delete: " + Animal.Sound;
}
