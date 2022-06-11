const btn = document.getElementById("todo-button");
const todoInput = document.getElementById("todo-input");
const todoUl = document.querySelector("#todo-ul");

window.onload = function () {
  todoInput.focus();
};

btn.addEventListener("click", (e) => {
  todoUl.innerHTML += `<li>
  <i class="fa fa-check"></i>
  <p>${todoInput.value}</p>
  <i class="fa fa-trash"></i>
  </li>`;
  todoInput.value = "";
});
