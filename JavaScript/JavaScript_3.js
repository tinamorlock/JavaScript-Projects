// displays student grade

function displayGrade(student) {
    var studentGrade = student.getAttribute("data-student-grade");
    alert(student.innerHTML + " has a grade of " + studentGrade + " for the semester.");
}