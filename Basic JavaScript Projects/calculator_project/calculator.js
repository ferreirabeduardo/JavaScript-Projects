// Object to keep track of the calculator values
const Calculator = {
  // This will display 0 on the calculator screen
  Display_Value: '0',
  // This holds the first operand, set to null for now
  First_Operand: null,
  // This checks whether the second operand has been inputted
  Wait_Second_Operand: false,
  // This holds the operator, set to null for now
  operator: null,
};

// This modifies values each time a number button is clicked
function Input_Digit(digit) {
  const { Display_Value, Wait_Second_Operand } = Calculator;
  // If waiting for the second operand, set the display to the key clicked
  if (Wait_Second_Operand === true) {
    Calculator.Display_Value = digit;
    Calculator.Wait_Second_Operand = false;
  } else {
    // Overwrite the display if the value is 0, otherwise add onto it
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
  }
}

// This handles decimal points
function Input_Decimal(dot) {
  // Stops accidental clicking of the decimal from breaking the operation
  if (Calculator.Wait_Second_Operand === true) return;
  // If the display does not already contain a decimal point, add one
  if (!Calculator.Display_Value.includes(dot)) {
    Calculator.Display_Value += dot;
  }
}

// This handles operators
function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator;
  // Turn the current display into a number
  const Value_of_Input = parseFloat(Display_Value);

  // If an operator exists and we are waiting, just update the operator
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }

  // If there is no first operand yet, store this value as the first operand
  if (First_Operand === null) {
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    // Otherwise do the calculation
    const result = Perform_Calculation[operator](First_Operand, Value_of_Input);
    // Remove any trailing zeros
    Calculator.Display_Value = String(result);
    Calculator.First_Operand = result;
  }

  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

// This object holds the math for each operator
const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  '=': (First_Operand, Second_Operand) => Second_Operand,
};

// This resets the calculator
function Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}

// This updates the calculator screen with the Display_Value
function Update_Display() {
  const display = document.querySelector('.calculator-screen');
  display.value = Calculator.Display_Value;
}

Update_Display();

// This monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
  const target = event.target;
  // If the element clicked is not a button, exit the function
  if (!target.matches('button')) {
    return;
  }
  // The button values have a leading space in the HTML, so trim it
  const value = target.value.trim();

  if (target.classList.contains('operator')) {
    Handle_Operator(value);
    Update_Display();
    return;
  }
  if (target.classList.contains('decimal')) {
    Input_Decimal(value);
    Update_Display();
    return;
  }
  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }
  Input_Digit(value);
  Update_Display();
});
