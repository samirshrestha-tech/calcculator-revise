const displaElm = document.getElementById("display");

const allBtns = [...document.getElementsByClassName("btn")];
let strToDisplay = "";

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
      //   const lastValue = strToDisplay[strToDisplay.length - 1];
      //   strToDisplay = lastValue;
      strToDisplay = strToDisplay.slice(0, -1);
      display(strToDisplay);
      return;
    }

    strToDisplay += val;
    display(strToDisplay);
  });
});
