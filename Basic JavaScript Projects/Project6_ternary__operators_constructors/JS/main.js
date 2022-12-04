function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

// function will display a response using the ternary operator, checking to see whether
// user is old enough to vote or not

function votingAge(){
    var Age, canVote;
    Age = document.getElementById("Age").value;
    canVote = (Age >= 18) ? "You are old enough ":"You are not old enough ";
    document.getElementById("Vote").innerHTML = canVote + "to vote."
}

// working with the "this" keyword in a function

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

// using "new"

var Tina = new Vehicle("Mazda", "RX-7", 1981, "Blue");
function TinaFunction(){
    document.getElementById("New_and_This").innerHTML = "Tina drives a " + Tina.Vehicle_Color + "-colored " + Tina.Vehicle_Model + " manufactured in " + Tina.Vehicle_Year;
}

// asigning a variable the value of a keyword

// var oneWord = this;
// document.write("<br><br>" + oneWord);

// a function that serves as an object constructor, defining an object of shirt

function Shirt(Color, Size, Type, Brand) {
    this.Shirt_Color = Color;
    this.Shirt_Size = Size;
    this.Shirt_Type = Type;
    this.Shirt_Brand = Brand;
}

// using new keyword with object constructor, prints results of new action

var shirtOne = new Shirt("Black", "Medium", "T-shirt", "Hanes");
function newShirt() {
    document.getElementById("Purchased").innerHTML= "You just bought a " + shirtOne.Shirt_Brand + " " + shirtOne.Shirt_Size + " " + shirtOne.Shirt_Color + " " + shirtOne.Shirt_Type + ".";
}

// creating a nested function

function nestedMath() {
    document.getElementById("Nested_Function").innerHTML = twiceNum();
    function twiceNum() {
        var thisNum = 88;
        function timesTwo() {thisNum=thisNum*2;}
        timesTwo();
        return thisNum;
    }
}