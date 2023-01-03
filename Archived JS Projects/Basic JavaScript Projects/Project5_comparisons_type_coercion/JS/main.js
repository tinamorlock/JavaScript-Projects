// outputs type of variable

var secretWord = "Planet";
document.write(typeof secretWord);

// does math operation on two different data types

var num1 = '5';
var num2 = 10;
document.write("<br><br>10 / 5 is " + num2/num1);

// doing math on a number written out as a string to get NaN as a result

var num3 = 'nine';
var num4 = 3;
document.write("<br><br>9 / 3 is " + num3/num4);

// combines a string and a number

document.write("<br><br>" + (num3+num4));

// displaying boolean values with isNaN() function

var num5 = 'eighteen';
var num6 = 18;

if (isNaN(num5)==false) {
    document.write("<br><br>\"Eighteen\" is a valid number. (NaN=True)");
}

else {
    document.write("<br><br>\"Eighteen\" is not a valid number. (NaN=False)");
}

if (isNaN(num6)==false) {
    document.write("<br><br>18 is a valid number. (NaN=True)");
}

else {
    document.write("<br><br>18 is not a valid number. (NaN=False)");
}

// this function will display positive and negative infinity numbers

function runInfinity() {
    var num7=9E888;
    var num8=-8E342;
    document.getElementById("infinityNums").innerHTML = "<br><br>" + num7 + "<br><br>" + num8;
}

// inputting out false and true

document.write("<br><br>" + (4 > 5));
document.write("<br><br>" + (91 < 190));

// display a math operation result in the console

console.log(5*5);

// displaying boolean value "false" in the console

console.log(500 < 90);

// using the == operator to display true and false boolean values

document.write("<br><br>" + (98 == 98));
document.write("<br><br>" + (99 == 98));

// using the === operator to display true and false boolean values

// true: match data type and value

document.write("<br><br>" + (98 === 98));

// false: different data type and different value

document.write("<br><br>" + ('eight' === 9));

// false: different data type but same value

document.write("<br><br>" + ('561' === 561));

// false: same data type but different values

document.write("<br><br>" + (54 === 45));

// using && operator to display true and false boolean values

document.write("<br><br>" + ((54 === 54) && (45 === 45)));

document.write("<br><br>" + ((85 > 75) && (75 > 90)));

// using || operator to display true and false boolean values

document.write("<br><br>" + (('sixty' === 'sixty') || ('sixty' === 60)));

document.write("<br><br>" + ((85 < 75) || (75 > 90)));

// using ! operator to display true and false boolean values

function usingNot() {
    document.getElementById("Not").innerHTML = (!(98 > 99)) + "<br><br>" + (!(99 < 190)); 
}