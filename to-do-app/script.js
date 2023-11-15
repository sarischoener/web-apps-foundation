"use strict";

// Welche Elemente müssen interaktiv sein?
// ---> Variablen dafür bauen!
const newToDoInput = document.getElementById("newToDoInput");
const addToDoBtn = document.getElementById("add-todo");
const removeBtn = document.getElementById("remove");
const radioInputAll = document.getElementById("radioInputAll");
const radioInputDone = document.getElementById("radioInputDone");
const radioInputOpen = document.getElementById("radioInputOpen");
// am Anfang haben wir ein leeres Objekt.
let state = {};
// ### Local Storage
// sichern
function safeStateToLocalStorage() {
  localStorage.setItem("state", JSON.stringify(state));
}
// ### Local Storage
// auslesen
function readStateFromLocalStorage() {
  let state = {};
  const todosFromStorage = localStorage.getItem("state");
  if (todosFromStorage !== null) {
    state = JSON.parse(todosFromStorage);
  }
  return state;
}
state = readStateFromLocalStorage();

// ### Displaying Todos:
// ----> Mock-up:
/*let state = {
    "1686512042647": { 
        description: "Lern JavaScript",
        done: false
    },
    "1686512133550": {
        description: "Lern CSS", 
        done: false 
    },
    "1686512133551": {
        description: "Lern HTML", 
        done: false 
    },
};*/

// State Management: ----> Visualisieren meiner Todos/ "Rendern"
function renderTodos(filterForOpen = false, filterForDone = false) {
  // meine Liste soll anfangs immer leer sein.
  const list = document.getElementById("list");
  list.innerHTML = "";
  // forEach Todo in der Liste soll das gemacht werden:
  Object.keys(state).forEach((id) => {
    // wie greife ich auf die einzelnen todos zu?
    const todo = state[id];
    // ### Filtering Todos
    if (filterForOpen === true && todo.done === true) {
      return;
    }
    if (filterForDone === true && todo.done === false) {
      return;
    }
    // todoListe bauen
    const newLi = document.createElement("li");
    // Checkbox bauen
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    // description der Todos bauen
    const todoText = document.createElement("lable");
    todoText.innerHTML = todo.description;
    // todoList, Checkbox und Text hinzufügen
    list.appendChild(newLi);
    newLi.appendChild(checkbox);
    newLi.append(todoText);
    // line-through muss hier auch schon passieren!
    if (todo.done === true) {
      todoText.style.textDecoration = "line-through";
    }
    // ### Done status of Todos
    // Checkbox klicken === true/done PLUS: der Todo Text soll durchgestrichen werden
    // Checkbox wieder klicken === false/open
    checkbox.addEventListener("change", (event) => {
      console.log(event.target.checked);
      if (event.target.checked) {
        todoText.style.textDecoration = "line-through";
        todo.done = true;
      } else {
        todoText.style.textDecoration = "none";
        todo.done = false;
      }
      safeStateToLocalStorage();
    });
  });
}
// Funktion aufrufen um den State visuell darzustellen/ zu sehen
renderTodos();

// ### Adding new Todos
// ---> Click-Event für "addToDo" bauen: Wenn ich auf den addToDoBtn klicke...
addToDoBtn.addEventListener("click", () => {
  //Variable für ein neues Todo PLUS ".trim", um Leerzeichen zu löschen:
  const newDescription = newToDoInput.value.trim();
  // Kein leeres oder unnötiges ToDo anlegen!
  if (newDescription.length < 4) {
    return;
  }
  // ### Duplicate Check
  const arrayOfTodoIds = Object.keys(state);
  const arrayOfAllDescriptions = arrayOfTodoIds.map(
    (id) => state[id].description
  );
  if (arrayOfAllDescriptions.includes(newDescription)) {
    return;
  }
  // ---> ansonsten erstelle das neue ToDo PLUS eigene ID:
  const newId = new Date().getTime();
  state[newId] = { description: newDescription, done: false };
  //Inputfeld wieder leeren, nachdem ein To hinzugefügt wurde:
  newToDoInput.value = "";
  // in local storage safen:
  safeStateToLocalStorage();
  // state updaten:
  renderTodos();
});

// ### Filtering Todos
// Wenn ich auf Open klicke...
radioInputOpen.addEventListener("click", () => {
  renderTodos(true, false);
});
// Wenn ich auf Done klicke...
radioInputDone.addEventListener("click", () => {
  renderTodos(false, true);
});
// Wenn ich auf All klicke...
radioInputAll.addEventListener("click", () => {
  renderTodos(false, false);
});

// ### Remove done Todos
removeBtn.addEventListener("click", () => {
  let newState = {};

  Object.keys(state).forEach((id) => {
    const todo = state[id];

    if (todo.done === false) {
      newState[id] = todo;
    }
  });

  state = newState;

  // in local storage safen:
  safeStateToLocalStorage();
  // state updaten:
  renderTodos();
});
