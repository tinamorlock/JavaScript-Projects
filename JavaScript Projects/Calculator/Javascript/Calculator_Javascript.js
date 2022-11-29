// object keeps track of values

const Calculator = {

    // displays 0 on calc screen

    Display_Value: '0',

    // holds the first operand for any expressions
    // setting to null for right now

    First_Operand: null,

    // checks to see if second operand inputted by user

    Wait_Second_Operand: false,

    // holds operator
    // set to null for now

    operator: null,
};

// modifies values each time button clicked

function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;

    // checks if Wait_Second_Operand is true
    // sets Display_Value to the key clicked

    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    }
    else {

        // overwrites Display_Value if current value 0
        // otherwise, adds onto it

        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

// section to handle decimal points

function Input_Decimal(dot) {

    // ensures clicking decimal point accidentally doesn't create a bug

    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {

        // if Display_Value doesn't contain decimal point:
        // add decimal point

        Calculator.Display_Value += dot;
    }
}

// section to handle operators

function Handle_Operator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;

    // when operator key is pressed:
    // convert the current number on screen
    // to a number, then store the result in
    // calc. First_Operand if it doesn't already exist.

    const Value_of_Input = parseFloat(Display_Value);

    // check if operator exists 
    // if Wait_Second_Operand is true:
    // updates operator, exits function

    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    }
    else if (operator) { // checking if operator exists 
        const Value_Now = First_Operand || 0;

        // if operator exists: 
        // property lookup performed for operator
        // in Perform_Calculation object
        // function matching operator is executed

        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

        // fixed amount of numbers after the decimal point

        result = Number(result).toFixed (9);

        // removes trailing 0s

        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

// updates calc screen with contents of Display_Value

function Update_Display() {

    // uses calculator-screen class to target input tag of HTML doc

    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}
Update_Display();

// section monitors button clicks

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {

    // target variable is an object representing clicked element

    const { target } = event;

    // not a button? exits function.

    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    // makes sure AC clears all inputs from Calc screen

    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})