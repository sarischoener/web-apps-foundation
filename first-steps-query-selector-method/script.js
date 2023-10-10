/**
 * 1) Eingaben aus Inputs auslesen
 *  2) Funktion add ausführen bei Klick auf den Calc button
 *  3) Ergebnis in das Span Element eintragen
 */
// Alle Elemente mit denen ihr interagieren müsst in eine Variable speichern
const inputElA = document.querySelector("#input-a");
const inputElB = document.querySelector("#input-b");
const calcBtn = document.querySelector("#btn-calc");
const resetBtn = document.querySelector("#btn-reset"); // Reset Button erstellt
const resultEl = document.querySelector("#result");

console.log(inputElA);
console.log(inputElB);
console.log(calcBtn);
console.log(resultEl);

// Callback Function
function add(a, b) {
  return Number(a) + Number(b);
}

// Bei Click function (Callback Function) wird ausgeführt
calcBtn.addEventListener("click", () => {
  const total = add(inputElA.value, inputElB.value);
  resultEl.innerText = total;
});

// Reset Button --> Bei Click Werte verschwinden
resetBtn.addEventListener("click", () => {
  inputElA.value = "";
  inputElB.value = "";
  resultEl.innerText = "";
});

/* ==========================

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <input id="input-password" type="password" value="" />
      <button id="btn-password">Show Password</button>
    </div>
    <script src="script.js"></script>
  </body>
</html>
* {
  box-sizing: border-box;
}

.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 20%;
}
"use strict";
// variablen vergeben
// type vom Input tag von "password" zu "text" ändern

const inputPassword = document.querySelector("#input-password");
const btnPassword = document.querySelector("#btn-password");

btnPassword.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    btnPassword.innerText = "Hide Password";
    console.log("type ist text");
  } else if (inputPassword.type === "text") {
    inputPassword.type = "password";
    btnPassword.innerText = "Show Password";
    console.log("type ist password");
  }
}); */

// light switch

/* btnLight.addEventListener("click", () => {
    btnLight.classList.toggle("btn-light-on");
    body.classList.toggle("body-dark");
  } */
