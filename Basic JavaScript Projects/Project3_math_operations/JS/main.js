// this function adds 2 and 2 together and displays the result

function doMathAdd() {
    var doMathResultA=2+2;
    document.getElementById("Math").innerHTML=doMathResultA;
}

// this function displays the result of a subtraction operation

function doMathSub() {
    var doMathResultS=400-89;
    document.getElementById("Math2").innerHTML=doMathResultS;
}

// this function displays the result of a multiplication operation

function doMathMulti() {
    var doMathResultM=9*9;
    document.getElementById("Math3").innerHTML=doMathResultM;
}

// this function displays the result of a division operation

function doMathDiv() {
    var doMathResultD=48/8;
    document.getElementById("Math4").innerHTML=doMathResultD;
}

// this function displays the result of a multiple math operation

function doMathMany() {
    var doMathResultY=(89-88)*58;
    document.getElementById("Math5").innerHTML=doMathResultY;
}

// this function displays the result of a modulus operation

function doMathMod() {
    var doMathResultMod=89%11;
    if (doMathResultMod == 0) { // two paths for what to display on webpage
        document.getElementById("Math6").innerHTML="There is no remainer!";
    }
    else {
        document.getElementById("Math6").innerHTML = "Yes, there is! The remainder is: " + doMathResultMod;
    }
}

// this function displays the result of a negate operation

function doMathNeg() {
    var doMathResultNeg=-884;
    document.getElementById("Math7").innerHTML=doMathResultNeg;
}

// this function displays the result of an increment

function doMathInc() {
    var doMathResultInc=92;
    doMathResultInc++;
    document.getElementById("Math8").innerHTML=doMathResultInc;
}

// this function displays the result of an decrement

function doMathDec() {
    var doMathResultDec=92;
    doMathResultDec--;
    document.getElementById("Math9").innerHTML=doMathResultDec;
}

// display random number

window.alert("Random number: " + (Math.random() *800));

// displays value of Pi in web browser

document.write("The value of Pi: " + Math.PI);