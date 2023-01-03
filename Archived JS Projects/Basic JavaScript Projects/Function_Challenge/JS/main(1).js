// this first function returns the result of an average of three numbers

function avgNums(num1, num2, num3){
    var totalNums=num1+num2+num3;
    alert('The average of these three numbers is ' + totalNums/3);
}

// this function returns a list of missed assignments

function listMissed(){
    missed = 'Unit Test 2<br>';
    missed += 'Quiz 2.45<br>';
    missed += 'Shakespeare Essay';
    document.getElementById("missedAssign").innerHTML=missed;
}