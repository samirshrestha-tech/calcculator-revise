const displaElm = document.getElementById("display");

const allBtns = [...document.getElementsByClassName("btn")];
const operators = ["+", "-", "*", "/", "%"];
let strToDisplay = "";
let lastOperator = "";

displaElm.style.color = "red";

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
    // this if condition checks if the last char is operator and if it is then it doesn't allow other operators to be pressed consecutively.

    strToDisplay += val;
    display(strToDisplay);
  });
});

const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  strToDisplay = ttl.toString();
};
