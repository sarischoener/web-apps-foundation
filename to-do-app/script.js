"use strict";

const ulElement = document.querySelector("ul"); // ul auswählen + Variable kreieren
const newToDoInputElement = document.querySelector("#new-todo"); // siehe 2.
const btnNewToDoElement = document.querySelector("#btn-new-todo"); // siehe 2.
// A) Displaying - Anzeigen der Todos:
const toDos = ["Lerne HTML", "Lerne CSS", "Lerne JS"];
// wir zählen durch ein Array die Todos auf

// B) um in der Console durch jedes einzelne Todo zu gehen benötigen wir einen FOR OF Schleife
for (let thetoDo of toDos) {
  // C) Erstellen eines li node pro ToDo, um es ausgeben zu können
  const li = document.createElement("li");

  //===================== Zwei Möglichkeiten ==============
  // li einen Text zuweisen --> thetoDo ist das einzelne toDo Beispiel Lerne HTML
  // D) li.innerText = thetoDo;

  // oder D) Nico: Wenn wir nur Text zuweisen wollen--> TextNode erstellen
  const liText = document.createTextNode(thetoDo);
  // E) liText muss ein Kind von li werden
  li.appendChild(liText); // um li sichtbar zu machen li in das ul einhängen
  ulElement.appendChild(li);
  console.log(li);
}
// Weitere Schritte:
//  Feature: Add new ToDos
// 1. Input & Button in HTML kreieren --> für Zugriff entweder Id oder class
// 2. Für den Zugriff Input & Button je als Variable const + querySelector
// 3. Eventlistener auf den Button
// 4. Im Callblack Input auslesen
// 5. Eingabe li kreieren
