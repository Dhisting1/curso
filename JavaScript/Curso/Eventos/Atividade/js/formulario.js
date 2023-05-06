(() => {
  "use strict";

  const formCadastro = document.querySelector(".formCadastro");
  const txtTitulo = document.getElementById("txtTitulo");
  const txtDescricao = document.getElementById("txtDescricao");
  const contadorContainer = document.getElementById("contador");
  const resta = contadorContainer.getElementsByTagName("span")[0];
  const checkbox = document.getElementById("chkAceito");
  const maxima = txtDescricao.maxLength;
  const btn = document.getElementById("btn");
  const mensagemError = document.getElementById("feedbackMessage");
  const mensagemErrorCloseBtn = mensagemError.getElementsByTagName("button")[0];

  btn.setAttribute("disabled", "disabled");
  contadorContainer.style.display = "block";
  mostrarNumeroDoTextArea(maxima);

  formCadastro.addEventListener("submit", botaoSubmit);
  txtDescricao.addEventListener("input", verificarTamanhoTextArea);
  checkbox.addEventListener("change", aceitar);

  function botaoSubmit(evt) {
    console.log(txtTitulo.value);
    if (!txtTitulo.value) {
      showErrorMessage("Preencha todos os campos", function () {
        txtTitulo.focus();
      });
      evt.preventDefault();
    }
  }

  function verificarTamanhoTextArea() {
    let numeroLetrasDigitadas = this.value.length;
    let caracterRestantes = Number(maxima) - Number(numeroLetrasDigitadas);
    mostrarNumeroDoTextArea(caracterRestantes);
  }

  function aceitar() {
    if (!checkbox.checked) {
      btn.setAttribute("disabled", "disabled");
    } else {
      btn.removeAttribute("disabled");
    }
  }

  function mostrarNumeroDoTextArea(n) {
    resta.textContent = n;
  }

  function showErrorMessage(msg, cb) {
    mensagemError.classList.add("show");
    mensagemError.getElementsByTagName("p")[0].textContent = msg;
    mensagemErrorCloseBtn.addEventListener("click", hideError);

    function hideError() {
      console.log("clicado close");
      mensagemError.classList.remove("show");
      mensagemErrorCloseBtn.removeEventListener("click", hideError);

      if (typeof cb === "function") {
        cb();
      }
    }
  }
})();
