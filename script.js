const displaElm = document.getElementById("display");

const allBtns = [...document.getElementsByClassName("btn")];
const operators = ["+", "-", "*", "/", "%"];
let strToDisplay = "";
let lastOperator = "";
displaElm.style.color = "red";
displaElm.style.animationDuration = " 2s";
const sound = new Audio("aaa.wav");

const display = (str) => {
  displaElm.innerHTML = str || "0.0";
};
//

allBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;

    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
      return;
    }

    if (val === "C") {
      //   strToDisplay = lastValue;
      strToDisplay = strToDisplay.slice(0, -1);
      display(strToDisplay);
      return;
    }
    // this if condition is to check if the last char in the string is an operator and if it is then just take it out  when the equal to is pressed before doing the total operation.
    if (val === "=") {
      const lastValue = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lastValue)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }
    // this if condition checks if the last char is operator and if it is then it doesn't allow other operators to be pressed consecutively. heere the approach is simple, we check if the val is equal to the operators and if it is then we assign it to a string of lastOperator, then we define a lastchar after the operator which we check also for if the lastChar of the string and if the operator is there then we just take slice and take until the last char for the mathematical operation.
    if (operators.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];

      if (operators.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }
    // this if statement returns only when both the string shouldnot have any value at the beginning and the initial value is operator then it ends the code execution there.
    // in other words, it doesn't allow the operators to be used in the beginning of the calculation.
    if (strToDisplay === "" && operators.includes(val)) {
      return;
    }
    // here we are checking if the val is ".", and we are introducing the lastVal variable so to check if the lastVal variable includes ".", we return from there and the rest of the code executes so that the decimal point is not repeated twice
    if (val === ".") {
      const lastVal = strToDisplay[strToDisplay.length - 1];

      if (lastVal.includes(val)) {
        return;
      }
    }

    strToDisplay += val;
    display(strToDisplay);
  });
});

const total = () => {
  const ttl = eval(strToDisplay) + random();
  console.log(ttl);
  const totl = eval(strToDisplay);
  console.log(totl);
  if (ttl > totl) {
    sound.play();
    displaElm.style.color = "blue";
    displaElm.classList.add("prank");
  } else {
    displaElm.style.color = "red";
  }

  display(ttl);

  strToDisplay = ttl.toString();
};

const random = () => {
  const randVal = Math.floor(Math.random() * 10);
  // console.log(randVal);

  return randVal ? randVal > 3 : 0;
};
