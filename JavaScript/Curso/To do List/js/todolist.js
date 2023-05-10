(function () {
  "use strict";

  //   Armazenar o DOM em variavies
  const itemInput = document.getElementById("item-input");
  const todoAddForm = document.getElementById("todo-add");
  const ul = document.getElementById("todo-list");
  // const lis = ul.getElementsByTagName("li");

  // Estrutura de dados que vai armazenar o objeto, onde cada propriedade vai representar uma tarefa

  let arrTasks = [
    {
      name: "Exemplo",
      createAt: Date.now(),
      completed: false,
    },
  ];

  function addEventLi(li) {
    li.addEventListener("click", function () {
      console.log(this);
    });
  }

  // Função que recebe um objeto (arrTasks) e vai retornar uma <li> preparada (com classes e textos) adicionar na <ul>

  function generateLiTask(obj) {
    const li = document.createElement("li");
    const p = document.createElement("p");
    li.classList.add("todo-item");
    p.classList.add("task-name");
    p.textContent = obj.name;
    li.appendChild(p);

    addEventLi(li);

    return li;
  }

  // Vai renderizar na tela, onde primeiro vai limpar a tela e depois acrescenta as li novamente

  function renderTasks() {
    ul.innerHTML = "";

    arrTasks.forEach((taskObj) => {
      ul.appendChild(generateLiTask(taskObj));
      //Primeiro ele gera a <li> com a função generateLiTask depois ele adiciona na ul
    });
  }

  // Vai adicionar uma tarefa/objeto na array arrTasks

  function addTask(task) {
    arrTasks.push({
      name: task,
      createAt: Date.now(),
      completed: false,
    });
  }

  // Evento de submit no formulario e quando for submetido vai adicionar um objeto novo a partir da chamada da função addTasks e depois vai renderizar com a função renderTasks

  todoAddForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTask(itemInput.value);
    renderTasks();

    itemInput.value = "";
    itemInput.focus();
  });

  renderTasks();
})();
