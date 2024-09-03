"use strict";

function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function multiplication(a, b) {
  return a * b;
}

function calculate() {
  const number1Element = document.getElementById("number1");
  const number2Element = document.getElementById("number2");
  const operator = document.getElementById("operator").value;
  let result;

  // Validate inputs
  if (number1Element.value === "" || number2Element.value === "") {
    document.getElementById("result").innerText =
      "Error: Both numbers are required.";
    return;
  }

  // Parse the input values to floats
  const parsednumber1 = parseFloat(number1Element.value);
  const parsednumber2 = parseFloat(number2Element.value);

  try {
    switch (operator) {
      case "addition":
        result = addition(parsednumber1, parsednumber2);
        break;
      case "subtraction":
        result = subtraction(parsednumber1, parsednumber2);
        break;
      case "multiplication":
        result = multiplication(parsednumber1, parsednumber2);
        break;
      case "division":
        result = division(parsednumber1, parsednumber2);
        break;
      default:
        result = "Invalid operator";
    }
    document.getElementById("result").innerText = `Result: ${result}`;
  } catch (error) {
    document.getElementById("result").innerText = `Error: ${error.message}`;
  }
}
