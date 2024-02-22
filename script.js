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

function switchSign(){
  let
}


function appendToDisplay(value) {
  (document.querySelector("#display").value += value);
}


function clear() {
  (document.querySelector("#display").value = "");
}





// let btnClear = document.querySelector(".clear");

// btnClear.addEventListener("click", clear);

// let numbersBtn = document.querySelectorAll(".number");

// numbersBtn.forEach((number) => {
//   number.addEventListener("click", () => {
//     let disp = (document.querySelector("#display").value += number.value);
//   });
// });

let buttons = document.querySelectorAll('button');

buttons.forEach((button =>{
  switch (button.className) {
    case 'number':
      button.addEventListener('click',()=>{
        appendToDisplay(button.value);
      })
      break;
    case 'clear':
      button.addEventListener('click',()=>{
        clear();
      })
      break;
  
    default:
      break;
  }
}))

