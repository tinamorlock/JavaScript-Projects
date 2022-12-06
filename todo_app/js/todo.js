// gets task from the user's input

function get_todos() {

    // creates array of tasks user inputs

    var todos = new Array;

    // pulls task saved in web browser memory

    var todos_str = localStorage.getItem('todo');

    // if input not null, JSON.parse communicates
    // with web browser to make task a JS object

    if (todos_str != null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// adds inputted task to the get_todos function array

function add() {

    // takes task input and creates a variable of it

    var task = document.getElementById('task').value;
    var todos = get_todos();

    // adds new task to end of array

    todos.push(task);

    // converts task input to a JSON string

    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}

// keeps tasks permanently displayed on the screen

function show() {

    // sets task retrieved as variable

    var todos = get_todos();

    // sets each task as <ul>

    var html = '<ul>';

    // displays task in list in order it's inputted

    for (var i = 0; i < todos.length; i++) {

        // displays task as a list and creates "x" button

        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';

    // displays the task as a list

    document.getElementById('todos').innerHTML = html;

    // looks for any items that are removed

    var buttons = document.getElementsByClassName('remove');

    // loop goes through the array to see if any have been removed

    for (var i =0; i < buttons.length; i++) {

        // event listener that looks for the item to remove

        buttons[i].addEventListener('click', remove);
    }
}

// removes an item from the to-do list when the close button is clicked

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();

    // creates a new array when one is removed from the list
    
    todos.splice(id,1);

    // helps remove from local storage by displaying the new array

    localStorage.setItem('todo', JSON.stringify(todos));
    show();
    return false;
}

// displays inputted task when the add button is clicked

document.getElementById('add').addEventListener('click', add);

// keeps inputs displayed on screen

show();