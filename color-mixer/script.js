"use strict";
//1)Implement a web app that can mix red, green and blue into any color like this example.
//2) Create 3 sliders (red, green, blue) in HTML --> Input with type range
//3) Bei Click Sliders --> EventListener --> die Background Color (Klasse) ändert sich. Welches Event? auch Klick?
//4) Außerdem bei Click Color Value Text ändert sich --> mit innerText?
//5) Start default in CSS hotpink  or dodgerblue Background Color

// Variablen anlegen --> Welche Elemente sind betroffen?
const body = document.querySelector("body");
const sliderRed = document.querySelector(".sliderred");
const sliderGreen = document.querySelector(".slidergreen");
const sliderBlue = document.querySelector(".sliderblue");
const hexColor = document.querySelector(".hex-color");

// Farben müssen wir auseinander bekommen um dann zu mixen --> in RGB einzeln Red Green Blue
// Wie kommen wir an die Hexzahl ? mit innerText?
// Red Green Blue Values in Hex umwandeln

function colorUpdate() {
  let red = sliderRed.value;
  let green = sliderGreen.value;
  let blue = sliderBlue.value;
  body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}
/* sliderRed.addEventListener("input", () => {
  colorUpdate();
});

sliderGreen.addEventListener("input", () => {
  colorUpdate();
});
sliderBlue.addEventListener("input", () => {
  colorUpdate();
}); */

document.querySelector("header").addEventListener("input", () => {
  colorUpdate();
});
