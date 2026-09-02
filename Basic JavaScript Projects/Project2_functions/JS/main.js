function Change_Text() {
    // Start with a string variable
    var message = "Hello";

    message += ", welcome";
    message += " to my website!";

    // Use getElementById to display the concatenated string in the paragraph
    document.getElementById("output").innerHTML = message;
}
