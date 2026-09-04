
//concanate 
function full_sentence() {
    var part_1 = "I have ";
    var part_2 = "created a ";
    var part_3 = "this text ";
    var part_4 = " in diffrent lines ";
    full_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = full_sentence;
}

//slice
function slice_method() {
    var sentence = "all work and nno play makes jhonny a dull boy";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section;

}

//top uppercase 
function upper_method() {
    var sentence = "make this loud";
    var loud = sentence.toUpperCase();
    document.getElementById("upper").innerHTML = loud;
}

//search//
function search_method() {
    var sentence = "where is the word play in here";
    var position = sentence.search("play");
    document.getElementById("search").innerHTML = "The word play starts at position " + position;
}

// number methods

function string_method() {
    var X = 151;
    document.getElementById("number_to_string").innerHTML = X.toString();
}

// precision

function precision_method() {
    var x = 12938.3012987376112;
    document.getElementById("precision").innerHTML = x.toPrecision (8);

}

// to_fixed
function fixed_method() {
    var x = 9.65784;
    document.getElementById("fixed").innerHTML = x.toFixed(2);
}

// valueof
function value_method() {
    var x = 100;
    document.getElementById("value").innerHTML = x.valueOf();
}


