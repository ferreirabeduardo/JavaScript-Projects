function color_function() {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string= "is a nice color!";

    switch(colors) {
        case "Red":
            color_output = "Red" + color_string;
        break;
        case "Yellow":
            color_output = "Blue" + color_string;
        break;
        case "Green":
            color_output = "Green" + color_string;
        break;
        case "Blue":
            color_output = "Yellow" + color_string;
        break;
        case "Orange":
            color_output = "Orange" + color_string;
        break;
        
        default:
            color_output = "Please enter a color exactly as written on the above list.";
        }

        document.getElementById("output").innerHTML = color_output;

    }