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

function operate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);

    case "x":
      return multiply(number1, number2);

    case "÷":
      return divide(number1, number2);
  }
}

const btnNumbers = document.querySelectorAll(".btn-nr");
const btnOperators = document.querySelectorAll(".btn-opr");
const display = document.querySelector("#display-current");
const displayOperator = document.querySelector("#display-operator");

let displayNumber = "";
let firstNumber = 0;
let secondNumber = 0;
let operator = "";

// function for each number preset to show on display
btnNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    let number = button.textContent;
    displayNumber += number;
    display.textContent = displayNumber;
  });
});

// function for when a operator is preset
btnOperators.forEach(function (eachOperator) {
  eachOperator.addEventListener("click", function () {
    // when preset the first time it take the display number and make first number
    if (firstNumber == 0 && operator == "") {
      firstNumber = parseInt(display.textContent);
      operator = eachOperator.textContent;
      displayOperator.textContent = operator;
      displayNumber = "";
      display.textContent = "";
    }// after first preset, if preset again
    else if (firstNumber != 0 && operator != ""){
      secondNumber = parseInt(display.textContent);
      displayNumber = operate(firstNumber, operator, secondNumber);
      display.textContent = displayNumber;
      // after doing calc. the result become the first number
      firstNumber = displayNumber;
      operator = "";
      displayOperator.textContent = "";
      secondNumber = 0;
    }
    // logic to do operation after first calculation
    else if (firstNumber != 0 && operator == ""){
      operator = eachOperator.textContent;
      displayOperator.textContent = operator;
      displayNumber = "";
      display.textContent = "";
    }
  });
});




