function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

function operate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);

    case "*":
      return multiply(number1, number2);

    case "/":
      return divide(number1, number2);
  }
}
