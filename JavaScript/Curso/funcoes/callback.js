// Exemplo de callback básico:

const exibir = (callback) => {
  console.log("Aguarde...");
  setTimeout(() => {
    callback();
  }, 3000);
};

function callback() {
  console.log("A mensagem foi exibida após 3 segundos");
}

exibir(callback);

// Exemplo de callback em requisição assíncrona:

function requicao(url, callback2) {
  // Passando dois paramentros para a função requisição
  console.log("Fazendo requisição para: " + url);

  setTimeout(() => {
    // função para informar os dados
    const dados = { nome: "João", idade: 25 };
    callback2(dados); //callback aonde chamo os dados
  }, 3000);
}

function callback2(dados) {
  console.log("Dados recebidos: ", dados); //CB aonde informo os dados
}

requicao("https://www.google.com", callback2);
