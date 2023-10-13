const displaElm = document.getElementsByClassName("display");
const allBtns = [...document.getElementsByClassName("btn")];
let strToDisplay = "";

const display = (str) => {
  displaElm.innerText = str;
};
