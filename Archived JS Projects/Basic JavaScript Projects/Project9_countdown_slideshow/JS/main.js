// sets an alarm based on input from the user, then desiplays an alert after the number of seconds is up

function countdown() {
  var seconds = document.getElementById("seconds").value;

    function tick(name) {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

// ----------------------------------------------------------
// ----------------------------------------------------------

// for slideshow project

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) { // controls how the slideshow moves to the next slide
  showSlides(slideIndex += n);
}

function currentSlide(n) { // how the current slide shows 
  showSlides(slideIndex = n);
}

function showSlides(n) { // moving through the slide show based on user controls
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}