// Função para calcular o índice de massa corporal (IMC)
function calcularIMC(peso, altura) {
    // Verifica se os parâmetros são válidos
    if (peso === undefined || altura === undefined) {
      throw Error("Insira dois parâmetros: peso e altura");
    }
    if (peso <= 0 || altura <= 0) {
      throw Error("Os valores devem ser maiores que zero");
    }
  
    // Calcula e retorna o IMC
    return peso / (altura * altura);
  }
  
  // Função para classificar o IMC em uma das sete categorias de peso
  function classificarIMC(imc) {
    // Verifica se o parâmetro é válido
    if (imc === undefined || isNaN(imc) || imc <= 0) {
      throw Error("O valor do IMC é inválido");
    }
  
    // Define as constantes das categorias de peso
    const MUITO_ABAIXO_DO_PESO = 16.9;
    const ABAIXO_DO_PESO = 18.4;
    const PESO_NORMAL = 24.9;
    const ACIMA_DO_PESO = 29.9;
    const OBESIDADE_I = 34.9;
    const OBESIDADE_II = 40;
  
    // Classifica o IMC com base nas categorias de peso
    return imc < MUITO_ABAIXO_DO_PESO
      ? "Muito abaixo do peso"
      : imc < ABAIXO_DO_PESO
      ? "Abaixo do peso"
      : imc < PESO_NORMAL
      ? "Peso normal"
      : imc < ACIMA_DO_PESO
      ? "Acima do peso"
      : imc < OBESIDADE_I
      ? "Obesidade I"
      : imc < OBESIDADE_II
      ? "Obesidade II"
      : "Obesidade III";
  }
  
  // Chama as funções e exibe os resultados no console
  try {
    const peso = 69.990;
    const altura = 1.95;
    const imc = calcularIMC(peso, altura);
    console.log(`IMC: ${imc}`);
    console.log(`Classificação: ${classificarIMC(imc)}`);
  } catch (error) {
    console.error(error.message);
  }
  