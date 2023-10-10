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
});
