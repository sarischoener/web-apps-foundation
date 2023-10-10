"use strict";

const btnLight = document.querySelector("#btn-light");
const body = document.querySelector("body");

btnLight.addEventListener("click", () => {
  btnLight.classList.toggle("btn-light-on");
  body.classList.toggle("body-dark");
});
/* 
const inputEl1 = document.querySelector("#inputEl1");
const inputEl2 = document.querySelector("#inputEl2");
const resultEl = document.querySelector("#resultEl");
const btnCalc = document.querySelector("#btnCalc");
const btnReset = document.querySelector("#btnReset");

function calculate(a, b) {
  return Number(a) + Number(b);
}

btnCalc.addEventListener("click", () => {
  const total = calculate(inputEl1.value, inputEl2.value);
  resultEl.innerText = total;
});

btnReset.addEventListener("click", () => {
  resultEl.innerText = "";
  inputEl1.value = "";
  inputEl2.value = "";
});
 */
