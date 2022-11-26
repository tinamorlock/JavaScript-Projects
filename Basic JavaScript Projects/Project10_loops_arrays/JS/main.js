// first while loop, counts to 20

function Call_Loop() {
    var count=1;
    var stringContainer = "";
    while (count <  21) {
        stringContainer += "<br>" + count;
        count++;
    }
    document.getElementById("Loop").innerHTML = stringContainer;
}

// displays the string and it's length

function getStringLength () {
    thisString = "This is a string we will count.";
    document.getElementById("Length").innerHTML = "The string we are counting the length of: " + thisString + "<br><br>This string is " + thisString.length + " characters long.";
}

// this will print a list of instruments

var instrumentList = ["violin", "drums", "xylophone", "accordion", "piano", "harp", "electric guitar"];
var instrument_count;
var instrumentString = "";

function for_Loop() {
    for(instrument_count=0; instrument_count< instrumentList.length; instrument_count++) {
        instrumentString += instrumentList[instrument_count] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = instrumentString;
}

// working with an array to print out one of the elements, a specific color

function array_Function() {
    var colorArray = ["black", "yellow", "orange", "pink"];
    document.getElementById("Array").innerHTML = "The second color in our array is " + colorArray[1] + ".";
}

// constant object of food in the refrigerator

const fridgeContents = {food_item:"butter", brand:"Borden", food_group:"dairy"};
fridgeContents.food_group = "DAIRY"; // changing a property's value
fridgeContents.meal = "breakfast, lunch, and dinner"; // adding a property with a value

// function that displays a value from the object

function constant_function() {
    // displays the food_item, the food group (changed property), and the meal (added property)
    document.getElementById("Constant").innerHTML = "The " + fridgeContents.food_item + " is from the " + fridgeContents.food_group + " food group and can be used to cook " + fridgeContents.meal + ".";
}

// using the let keyword, shows the three states of the variable: before, during, and after the block

function letFunction() {
    var X = 990;
    document.getElementById("lettingBefore").innerHTML = "X is " + X;
    {let X = 654; document.getElementById("lettingDuring").innerHTML = "X is " + X;} // only changing X for this block of code, then it reverts to its global value
    document.getElementById("lettingAfter").innerHTML = "X is " + X;
}

// displays a holiday message

function seasonsGreetings() {
        return "I hope you have a Merry Christmas and a Happy New Year!";
}

document.getElementById("Greetings").innerHTML = seasonsGreetings();

// creates an object and a method for tv shows

let shows = {
    series: "Friends",
    long: "30 minute",
    started: "1994",
    setting: "New York City",
    category: "sitcom",
    description : function() {
        return shows.series + " is a " + shows.long + " " + shows.category + " set in " + shows.setting + " that first aired on TV in " + shows.started + ".";
        }
    }

    document.getElementById("Shows").innerHTML = shows.description();

// loop with a break and a continue statement

var loopContainer = "";
for (let x=0; x < 100; x++) {
    if (x == 11) {
        continue; // continue
    }
    else if (x == 22) { // break
        loopContainer += "<br>Operation aborted.";
        break;
    }
    loopContainer += "<br>" + x.toString();
}

document.getElementById("Breaking").innerHTML = loopContainer;