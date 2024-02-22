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
