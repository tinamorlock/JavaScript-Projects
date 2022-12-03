// function that prints a part of the dictionary

function scheduleDictionary() {
    var day_schedule = {
        Monday:"Clean Bathrooms",
        Tuesday:"Empty Trash",
        Wednesday:"Vaccuum Downstairs",
        Thursday:"Dust Living Room",
        Friday:"Organize Bedroom",
        Saturday:"Mow Backyard",
        Sunday:"Mow and Weed Front Yard"
    };
    document.getElementById("Dictionary").innerHTML = "Saturday's Chore: " + day_schedule.Saturday;
}

// function that creates two duplicate keys to see what happens

function wrongKeys() {
    var studentNames = {
        ABCDE:"Casey Norman",
        ABCDE:"Amanda Morrison",
        XYLRT:"Maria Torrez"
    };
    document.getElementById("wrongDictionary").innerHTML = "Student #ABCDE: " + studentNames.ABCDE;

}

// fixes the duplicate keys with a delete operator

function deleteKey() {
    var studentNames = {
        ABCDE:"Casey Norman",
        ABCDE1:"Amanda Morrison",
        XYLRT:"Maria Torrez"
    };
    delete studentNames.ABCDE1;
    document.getElementById("deleted").innerHTML = "Student #ABCDE1: " + studentNames.ABCDE1;

}