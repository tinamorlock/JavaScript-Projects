// function for form validation

function formValidation() {

    // validate name 

    let A = document.forms["contactMe"]["name"].value;
    if (A == "") {
        alert("Name must be filled out!");
        return false;
    }
    // validate phone

    let B = document.forms["contactMe"]["phone"].value;
    if (B == "") {
        alert("Phone number must be filled out!");
        return false;
    }
    // validate email
    
    let C = document.forms["contactMe"]["email"].value;
    if (C == "") {
        alert("Email address must be filled out!");
        return false;
    }
}