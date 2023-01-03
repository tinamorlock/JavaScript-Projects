// defining a global variable

var gloVar = 500;

// function that defines a local variable

function localFun(){
    var loVar = 900;
    document.write("The local variable loVar has the value of " + loVar);
}

localFun();

// function that has intentional error

function loGlo() {
    var totalVars = gloVar + loVar;
    document.write("When you add gloVar (" + gloVar + ") and loVar (" + loVar + "together, here's the result: " + totalVars);
}

loGlo();

// function using date/time, determines what time of day it is, then greets appropriately, using conditional if statements

function greetMe() {
    if ((new Date().getHours() >= 0) && ((new Date().getHours() < 12))) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    }

    else if ((new Date().getHours() >= 12) && ((new Date().getHours() < 5))) {
        document.getElementById("Greeting").innerHTML = "Good afternoon!";
    }

    else {
        document.getElementById("Greeting").innerHTML = "Good evening!";
    }
}

// changes font color of a word, depending on what the user inputs

function colorChanger() {
    var Color = document.getElementById("color_choice").value;

    // if statements to check what color chosen

   
    if (Color == 'yellow') {
        document.getElementById("Chosen").innerHTML = "<font color='yellow'>You chose yellow as your color.</font>";
    }
    else if (Color == 'black') {
        document.getElementById("Chosen").innerHTML = "<font color='black'>You chose black as your color.</font>";
    }
    else if (Color == 'purple') {
        document.getElementById("Chosen").innerHTML = "<font color='purple'>You chose purple as your color.</font>";
    }
    else {
            document.getElementById("Chosen").innerHTML = "<strong>ERROR! Try again.</strong>";
        }
    }

    // displays time of day (from course slide)
    
    function Time_function() {
        var Time = new Date().getHours();
        var Reply;
        if (Time < 12 == Time > 0) {
            Reply = "It is morning time!";
        }
        else if (Time >= 12 == Time < 18) {
            Reply = "It is afternoon."
        }
        else {
            Reply = "It is evening time.";
        }
        document.getElementById("Time_of_day").innerHTML = Reply;
    }