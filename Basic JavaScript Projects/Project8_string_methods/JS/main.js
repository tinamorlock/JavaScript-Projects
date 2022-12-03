// uses concat() to put multiple string variables together in a sentence

function writeSentence() {
    var phrase_1 = "This sentence ";
    var phrase_2 = "was written ";
    var phrase_3 = "with JavaScript's concat()."
    var sentenceToWrite = phrase_1.concat(phrase_2, phrase_3);
    document.getElementById("written").innerHTML = sentenceToWrite;
}

// takes a portion of a string and displays a "slice"

function sliceSentence() {
    var sentence2slice = "We're going to cut a word or two out of this sentence."
    var slicedSentence = sentence2slice.slice(6,12);
    document.getElementById("sliceIt").innerHTML = "Here's your slice: " + slicedSentence;
}

// converts a string to uppercase

function convertUpper() {
    var string2upper = "this string is uppercase";
    var upString = string2upper.toUpperCase();
    document.getElementById("upperString").innerHTML = upString;
}

// uses search() to return position of part of the string

function searchString() {
    var string2search = "searching for a word";
    var Searched = string2search.search("search");
    document.getElementById("Searching").innerHTML = "<strong>search</strong> can be found in our string at this position: " + Searched;
}

// converts numbers to a string

function numString() {
    var numBer = 876;
    document.getElementById("number-string").innerHTML = numBer.toString();
}

// formatting a number to a specified length

function usingPrecision() {
    var preciseNum = 789.098;
    document.getElementById("precise_ID").innerHTML = preciseNum.toPrecision(7);
}

// rounding string to a certain number of decimals

function getFixed() {
    var fixedNum = 623.801;
    document.getElementById("fixing").innerHTML = fixedNum.toFixed(2);
}

// returns primitive value of a number

function getValue() {
    var valuedNum = 678;
    document.getElementById("Valued").innerHTML = valuedNum.valueOf();
}