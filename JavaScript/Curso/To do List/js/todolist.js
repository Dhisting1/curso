(function () {
  "use strict";

  //   Armazenar o DOM em variavies
  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  const lis = ul.getElementsByTagName("li");

  function addTask(task) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    li.className = "todo-item";
    p.className = "task-name";
    p.textContent = task;
    li.appendChild(p);
    ul.appendChild(li);

    li.addEventListener("click", function () {
      console.log(this);
    });
  }

  todoAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(itemInput.value);
    itemInput.value = "";
    itemInput.focus();
  });

  [...lis].forEach((element) => {
    element.addEventListener("click", function (evt) {
      console.log(this);
    });
  });
})();
