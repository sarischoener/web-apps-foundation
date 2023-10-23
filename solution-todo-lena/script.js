"use strict";

/* --- SELECTORS --- */
const list = document.querySelector(".todo-list");
const addBtn = document.querySelector(".add-btn");
const input = document.querySelector(".todo-input");
const filter = document.querySelector(".filter");
const removeBtn = document.querySelector(".remove-btn");

let state = {
  todos: [],
  currentFilter: "",
};
//Only if the local storage is NOT empty, get the state from local storage
if (localStorage.getItem("state")) {
  state = JSON.parse(localStorage.getItem("state"));
}

/* --- RENDER CURRENT STATE --- */
function renderTodos() {
  input.value = "";
  list.innerHTML = "";

  const generatedTodos = getFilteredData();

  generatedTodos.todos.forEach((todo) => {
    const newTodo = document.createElement("li");
    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    newTodo.innerText = todo.description;
    newTodo.todoObj = todo;

    newTodo.appendChild(checkbox);
    list.appendChild(newTodo);
  });
}

/* --- STORE IN LOCAL STORAGE --- */
function storeData() {
  localStorage.setItem("state", JSON.stringify(state));
}

/* --- FILTERED DATA --- */
function getFilteredData() {
  let result = {};

  switch (state.currentFilter) {
    case "all":
      return (result = state);
    case "open":
      result.todos = state.todos.filter((item) => item.done === false);
      return result;
    case "done":
      result.todos = state.todos.filter((item) => item.done === true);
      return result;
    default:
      return (result = state);
  }
}

/* --- ADD NEW TODO --- */
addBtn.addEventListener("click", () => {
  const newDescription = input.value.trim();
  /* -- Prevent Duplicates -- */
  //Find a todo with the same description in the state
  const duplicate = state.todos.filter(
    (el) => el.description.toUpperCase() === newDescription.toUpperCase()
  );
  //Only if there is no duplicate then create a new todo and add it to the state
  if (duplicate.length === 0) {
    const todoObj = {
      id: new Date().getTime(),
      description: input.value.trim(),
      done: false,
    };
    state.todos.push(todoObj);
    input.value = "";

    renderTodos();
    storeData();
  } else {
    alert("Todo is already in the list!");
  }
});

/* --- CHECKED & UNCHECKED TODOS --- */
list.addEventListener("change", (event) => {
  const checkbox = event.target;
  const listElement = checkbox.parentElement;
  const todo = listElement.todoObj;
  todo.done = checkbox.checked;

  storeData();
});

/* --- SET CURRENT FILTER --- */
filter.addEventListener("change", (event) => {
  if (event.target.checked) {
    state.currentFilter = event.target.value;
  }
  renderTodos();
  storeData();
});

/* --- REMOVE DONE TODOS --- */

removeBtn.addEventListener("click", () => {
  state.todos = state.todos.filter((item) => !item.done);

  renderTodos();
  storeData();
});

renderTodos();
