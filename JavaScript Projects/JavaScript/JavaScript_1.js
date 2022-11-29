// using switch statement to display a string dependent on user input

function Show_Function() {
    var showOutput;
    var shows = document.getElementById("TV_Input").value;
    var showString = " is a great show!";
    switch(shows) {
        case "The Walking Dead":
            showOutput = "The Walking Dead" + showString;
        break;
        case "Veronica Mars":
            showOutput = "Veronica Mars" + showString;
        break;
        case "Big Bang Theory":
            showOutput = "Big Bang Theory" + showString;
        break;
        case "Coupling":
            showOutput = "Coupling" + showString;
        break;
        case "Grey's Anatomy":
            showOutput = "Grey's Anatomy" + showString;
        break;
        case "Studio 60 on the Sunset Strip":
            showOutput = "Studio 60 on the Sunset Strip" + showString;
        break;
        default:
        showOutput = "Please enter a show exactly as written on the above list.";
    }
    var W = document.getElementsByClassName("output") // using class name instead of ID name
    W[1].innerHTML = showOutput;
}

// filling canvas with solid black color

var X = document.getElementById("drawingCanvas");
var Y = X.getContext("2d");
Y.fillStyle = "#000000";
Y.fillRect(0,0,150,100);

// creating a gradient color background in a canvas

var Z = document.getElementById("drawingCanvas2");
var T = Z.getContext("2d");
var gradientStyle = T.createLinearGradient(0,0,170,0);
gradientStyle.addColorStop(0, "pink");
gradientStyle.addColorStop(1, "red");

T.fillStyle = gradientStyle;
T.fillRect(0,0,150,100);