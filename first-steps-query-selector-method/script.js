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

// light switch

/* btnLight.addEventListener("click", () => {
    btnLight.classList.toggle("btn-light-on");
    body.classList.toggle("body-dark");
  } */
