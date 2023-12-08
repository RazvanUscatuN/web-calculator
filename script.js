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

const buttons = document.querySelectorAll(".btn");
const btnNumberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const display = document.querySelector("#display");

//Add event to display when nr are preset
buttons.forEach(function (button) {
  if (btnNumberArray.includes(button.textContent)) {
    button.addEventListener("click", function () {
      const displayValue = document.createElement("span");
      displayValue.textContent = this.textContent;
      display.appendChild(displayValue);
    });
  }
});
