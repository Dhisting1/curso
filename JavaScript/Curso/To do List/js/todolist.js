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
    li.classList.add("todo-item");
    p.classList.add("task-name");
    p.textContent = task;
    li.appendChild(p);
    ul.appendChild(li);

    li.addEventListener("click", function () {
      console.log(this);
      console.log(this.textContent);
      console.log(this.innerText);
      console.log(this.innerHTML);
      console.log(this.outerHTML);
    });
  }

  todoAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(itemInput.value);
    itemInput.value = "";
    itemInput.focus();
  });

  ul.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("todo-item")) {
      console.log(evt.target);
    }
  });
})();
