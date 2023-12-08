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



const buttons = document.querySelectorAll(".btn");
const btnNumberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const btnOperators = ["+", "-", "x", "÷"];
const display = document.querySelector("#display-current");

let firstNumber = 0;
let operator = "";
let secondNumber = 0;

//Add event to display when nr are preset
buttons.forEach(function (button) {
  if (btnNumberArray.includes(button.textContent)) {
    button.addEventListener("click", function () {
      const displayValue = document.createElement("span");
      displayValue.textContent = this.textContent;
      display.appendChild(displayValue);
    });
  }
  if (btnOperators.includes(button.textContent)) {
    button.addEventListener("click", function () {
      if (firstNumber == 0) {
        firstNumber = parseInt(display.textContent);
        operator = this.textContent;
        display.textContent = "";
      } else {
        secondNumber = parseInt(display.textContent);
        display.textContent = operate(firstNumber, operator, secondNumber);
        firstNumber = 0;
        secondNumber = 0;
        operator = "";
      }
    });
  }
 });
 


//add event listener to operator
//if firstNumber = 0 then when a operator is preset set the value from curent display

// also display the firstNumber and operator in display-last-operation
// if firstNumber not 0 then set the secondNumber
// do the calculation when "=" is preset
//then the result become the firstNumber if the user what to do more calculation and secondNumber is set to 0
//happens when showing result and operator is preset
