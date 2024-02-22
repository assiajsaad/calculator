function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function switchSign() {
  document.querySelector("#display").value *= -1;
}

function appendToDisplay(value) {
  document.querySelector("#display").value += value;
}

function clear() {
  document.querySelector("#display").value = "";
}

function removeLastChar (){
  let value = document.querySelector("#display").value;
  let newValue = value.slice(0,-1);
  document.querySelector("#display").value = newValue;
}
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  switch (button.className) {
    case "number":
      button.addEventListener("click", () => {
        appendToDisplay(button.value);
      });
      break;
    case "clear":
      button.addEventListener("click", () => {
        clear();
      });
      break;
    case "sign":
      button.addEventListener("click", () => {
        switchSign();
      });
      break;
    case "operator":
      button.addEventListener("click", () => {
        appendToDisplay(button.value);
      });
      break;

    default:
      break;
  }
});

function keyPress(event) {
  switch (event.key) {
    case "1":
      appendToDisplay(event.key);
      break;
    case "2":
      appendToDisplay(event.key);
      break;
    case "3":
      appendToDisplay(event.key);
      break;
    case "4":
      appendToDisplay(event.key);
      break;
    case "5":
      appendToDisplay(event.key);
      break;
    case "6":
      appendToDisplay(event.key);
      break;
    case "7":
      appendToDisplay(event.key);
      break;
    case "8":
      appendToDisplay(event.key);
      break;
    case "9":
      appendToDisplay(event.key);
      break;
    case "0":
      appendToDisplay(event.key);
      break;
    case "+":
      appendToDisplay(event.key);
      break;
    case "-":
      appendToDisplay(event.key);
      break;
    case "/":
      appendToDisplay(event.key);
      break;
    case "*":
      appendToDisplay(event.key);
      break;
    case "*":
      appendToDisplay(event.key);
      break;
    case "*":
      appendToDisplay(event.key);
      break;
    case "Backspace":
      removeLastChar();
      break;
    case "Delete":
      clear();
      break;
    case ".":
      appendToDisplay(event.key);
      break;
    case "Enter":
      // Code for equals
      break;

    default:
      break;
  }
}

let keys = document.querySelector("body");

if (keys) {
  keys.addEventListener("keydown", function (e) {
    keyPress(e);
  });
}
