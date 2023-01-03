// this function will change the background of the text to black and font color of the text to pink

function changeText(pinkText, blackBack) {
    const changed=document.getElementById('changeClass');
    changed.style.color=pinkText;
    changed.style.background=blackBack;
}

// concatenates two strings together using the += operator

function displayCatString(){
    var first_str = "Did the text ";
    first_str += "above change?";
    document.getElementById("conCat").innerHTML=first_str;
}