"use strict";
// Light Switch
// 1) Create a button in HTML --> What do we have? (Button, Background-Color, Toggel= Schnittstelle, innerText)
// 2) Style the button in CSS
// 3) Add variable
// 4) Toggle

// Definieren der Variablen / 2 verschiedene Zustände / 2 Elemente sind betroffen
const btnLight = document.querySelector(".btn-light"); // button soll sich verändern
const switchOffbody = document.querySelector("body"); // Hintergrund body soll sich verändern

// klick & toggle BUTTON
btnLight.addEventListener("click", () => {
  btnLight.classList.toggle("btn-light-on");
  switchOffbody.classList.toggle("body-dark");
  if (document.title === "Good Night") {
    // (wenn ergebnis true ist dann zeile 18 falls nicht springe in zeile 20)
    document.title = "Good Moring";
  } else {
    document.title = "Good Night";
  }
});
//btnOff.classList.toggle("btn-off");
