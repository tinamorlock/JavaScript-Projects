// keeps track of whose turn it is

let activePlayer = 'X';

// stores an array of moves, determines win conditions

let selectedSquares = [];

// function places an X or an O in a square

function placeXOrO(squareNumber) {
    
    // condition ensures a square hasn't been selected already

    // .some() method checks each element of the selectSquare array
    // to see if it contains the square number clicked on.

    if (!selectedSquares.some(element => element.includes(squareNumber))) {

        // variable retrieves HTML element id clicked

        let select = document.getElementById(squareNumber);

        //checks whose turn it is

        if (activePlayer === 'X') {

            // if activePlayer is equal to 'X', x.png is placed

            select.style.backgroundImage = 'url("images/x.png")';
        }

        else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // squareNumber and activePlayer concatenated together and added to array

        selectedSquares.push(squareNumber + activePlayer);

        // calls function that checks for win conditions

        checkWinConditions();

        // condition changes active player

        if(activePlayer === 'X') {
            activePlayer = 'O';
        }

        else {
            activePlayer = 'X';
        }

        // functions plays placement sound

        audio('./media/place.mp3');

        // condition checks to see if it's the computer's turn

        if (activePlayer === 'O') {

            // disables clicking for computer's turn

            disableClick();

            // waits one second before computer places image and enables click

            setTimeout(function () { computersTurn(); }, 1000);
        }

        // return true for computersTurn() to work

        return true;
    }

    // computer selects random square

    function computersTurn() {

        // boolean needed for while loop

        let success = false;

        // stores random number, 0 through 8

        let pickASquare;

        // condition keeps trying if square already selected

        while (!success) {

            // another random number (0–8)

            pickASquare = String(Math.floor(Math.random() * 9));

            // if number returns true, square hasn't been selected yet

            if (placeXOrO(pickASquare)) {

                // changes boolean and ends the loop

                success = true;
            };
        }
    }
}

// parses selectedSquares array to search for win conditions

// drawLine() function called to draw a line on the screen if condition met

function checkWinConditions() {
    
    // X 0, 1, 2 condition

    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }

    // X 3, 4, 5 

    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    
    // X 6, 7, 8

    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }

    // X 0, 3, 6 

    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }

    // X 1, 4, 7

    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }

    // X 2, 5, 8

    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }

    // X 6, 4, 2

    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }

    // X 0, 4, 8

    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    // O 0, 1, 2 condition

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }

    // O 3, 4, 5 
    
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
        
    // O 6, 7, 8
    
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    
    // O 0, 3, 6 
    
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    
    // O 1, 4, 7
    
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    
    // O 2, 5, 8
    
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    
    // O 6, 4, 2
    
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    
    // O 0, 4, 8
    
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    // condition checks for a tie. if none of the above conditions met and 9 
    // squares selected, the code executes.

    else if (selectedSquares.length >= 9) {

        // function plays tie game sound

        audio('./media/tie.mp3');

        // function sets a .3 second timer before resetGame called

        setTimeout(function () { resetGame(); }, 500);
    }

    // function checks if an array includes three strings.
    // checks each win condition.

    function arrayIncludes(squareA, squareB, squareC) {

        // three variables used to check three in a row

        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        // if three variables passed are included in array
        // true is returned and else/if executes drawLine()

        if (a === true && b === true && c === true) { return true; }
    }
}

// function makes body element temporarily unclickable

function disableClick() {
    body.style.pointerEvents = 'none';

    // waits one second before you can click again

    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

// function takes a string parameter of the path set earlier for placement sound

function audio(audioURL) {

    // creates new audio object and passes path as a parameter

    let audio = new Audio(audioURL);

    // play method plays audio sound

    audio.play();
}

// function uses HTML canvas to draw win lines

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {

    // accesses HTML canvas element

    const canvas = document.getElementById('win-lines');

    // access to methods and properties to use on canvas

    const c = canvas.getContext('2d');

    // starts of lines x axis

    let x1 = coordX1, 
        y1 = coordY1, // start of y axis
        x2 = coordX2, // end of x axis
        y2 = coordY2, // end of y axis
        x = x1, // temp x axis data for animation loop
        y = y1; // temp y axis data for animation loop

    // function interacts with the canvas

    function animateLineDrawing() {

        // variable creates a loop

        const animationLoop = requestAnimationFrame(animateLineDrawing);

        // clears content from the last loop iteration

        c.clearRect(0, 0, 608, 608);

        // method starts a new path

        c.beginPath();

        // method moves to starting point in line

        c.moveTo(x1,y1);

        // method indicates the end point

        c.lineTo(x,y);

        // method sets the width of the line

        c.lineWidth = 10;

        // sets the color of the line

        c.strokeStyle = 'rgba(70, 255, 33, .8)';

        // draws everything above

        c.stroke();

        // condition checks if end point reached

        if (x1 <= x2 && y1 <= y2) {

            // condition adds 10 to the previous end x endpoint

            if (x < x2) { x+=10; }

            // condition adds 10 to the previous end y endpoint

            if (y < y2) { y+=10; }

            // condition similar to one above, 
            // necessary for the 6, 4, 2 win conditions

            if (x >= x2 && y>= y2) { cancelAnimationFrame(animationLoop); }
        }

        // condition similar to the one above,
        // necessary for the 6, 4, 2 win conditions

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    // function clears canvas after win line drawn

    function clear() {

        // line starts animation loop

        const animationLoop = requestAnimationFrame(clear);

        // line clears canvas

        c.clearRect(0, 0, 608, 608);

        // line stops animation loop

        cancelAnimationFrame(animationLoop);
    }

    // disallows clicking while the win sound is playing

    disableClick();

    // line plays win sounds

    audio('./media/winGame.mp3');

    // calls main animation loop

    animateLineDrawing();

    // waits one second, then clears canvas, resets game, allows clicking again

    setTimeout(function () { clear(); resetGame(); }, 1000);
}

// function resets game in event of tie or win

function resetGame() {

    // iterates through each HTML square element

    for (let i=0; i < 9; i++) {

        // gets the HTML element i

        let square = document.getElementById(String(i));

        // removes elements backgroundImage

        square.style.backgroundImage = '';
    }

    // resets array to empty, can start over now

    selectedSquares = [];
}