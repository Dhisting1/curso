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

  btn.setAttribute("disabled", "disabled"); //Desabilita o botão adicionar
  contadorContainer.style.display = "block";
  mostrarNumeroDoTextArea(maxima); // função chamada para verificar quantos caracteres restam no text-area

  formCadastro.addEventListener("submit", botaoSubmit); //evento que envia o formulario quando for preenchido
  txtDescricao.addEventListener("input", verificarTamanhoTextArea); //evento que verifica quantos caracteres restam no text-area
  checkbox.addEventListener("change", aceitar); //evento do checkbox para verificar se foi clicado ou não

  function botaoSubmit(evt) {
    //Função do botão adicionar que valida se o formulario foi preenchido ou não, e se não foi manda um alert para preencher
    console.log(txtTitulo.value);
    if (!txtTitulo.value) {
      showErrorMessage("Preencha todos os campos", function () {
        txtTitulo.focus();
      });
      evt.preventDefault();
    }
  }

  function verificarTamanhoTextArea() {
    //função que faz os calculos para saber quantos caracteres restam
    let numeroLetrasDigitadas = this.value.length;
    let caracterRestantes = Number(maxima) - Number(numeroLetrasDigitadas);
    mostrarNumeroDoTextArea(caracterRestantes);
  }

  function aceitar() {
    // Função que habilita o botão "Adicionar" assim que o checkbox for marcado
    if (!checkbox.checked) {
      btn.setAttribute("disabled", "disabled");
    } else {
      btn.removeAttribute("disabled");
    }
  }

  function mostrarNumeroDoTextArea(n) {
    // função para mostrar os números de caracteres restantes
    resta.textContent = n;
  }

  function showErrorMessage(msg, cb) {
    mensagemError.classList.add("show");
    mensagemError.getElementsByTagName("p")[0].textContent = msg;

    mensagemErrorCloseBtn.addEventListener("click", hideError);
    mensagemErrorCloseBtn.addEventListener("keyup", pressedKeyboardOnBtn);

    mensagemErrorCloseBtn.focus();

    function hideError() {
      console.log("clicado close");
      mensagemError.classList.remove("show");
      mensagemErrorCloseBtn.removeEventListener("click", hideError);
      mensagemErrorCloseBtn.removeEventListener("keyup", pressedKeyboardOnBtn);

      if (typeof cb === "function") {
        cb();
      }
    }

    function pressedKeyboardOnBtn(evt) {
      if (evt.keyCode === 27) {
        hideError();
      }
    }
  }
})();
