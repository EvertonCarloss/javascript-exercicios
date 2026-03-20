// Dia 05 - Function

// Exercício 1 - Saudação inteligente
function saudacao(nome, horario) {
  if (horario < 12) {
    return `Bom dia, ${nome}!`;
  } else if (horario < 18) {
    return `Boa tarde, ${nome}!`;
  } else {
    return `Boa noite, ${nome}!`;
  }
}
console.log(saudacao('Everton', 10));

// Exercício 2 - Calculadora com proteção.
function calculadora(num1, num2, operacao) {
  if (operacao === 'soma') {
    return num1 + num2;
  } else if (operacao === 'subtracao') {
    return num1 - num2;
  } else if (operacao === 'multiplicacao') {
    return num1 * num2;
  } else if (operacao === 'divisao') {
    if (num2 === 0) {
      return `Erro: divisão por zero`;
    }
    return num1 / num2;
  }
}
console.log(calculadora(2, 2, 'divisao'));

// Exercício 3 - Número primo
function ehprimo(numero) {
  if (numero < 2) {
    return `Não é primo`;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return `Não é primo`;
    }
  }
  return `Número primo`;
}
console.log(ehprimo(4));

// Exercício 4 - Função chamando função

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}
function verificarResultado(media) {
  if (media >= 7) {
    return `Aprovado`;
  } else if (media >= 5) {
    return `Recuperação`;
  } else if (media < 5) {
    return `Reprovado`;
  }
}
const media = calcularMedia(5, 5, 4);
console.log(verificarResultado(media));

// Exercício 5 - Sistema de compra
function calcularTotal(preco, quantidade) {
  return preco * quantidade;
}
function verificarDesconto(total) {
  if (total >= 100) {
    const desconto = total * 0.1;
    const totalComDesconto = total - desconto;
    return `O total: R$ ${total} reais | Desconto: R$ ${desconto} reais | Final: R$ ${totalComDesconto} reais`;
  } else {
    return `O total deu ${total} reias e você não recebeu desconto`;
  }
}
console.log(verificarDesconto(calcularTotal(40, 3)));

// Exercício 6 - Classificação IMC
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
function classificarIMC(imc) {
  const valor = imc.toFixed(2);

  if (imc < 18.5) {
    return `IMC: ${valor} | abaixo do peso!`;
  } else if (imc < 25) {
    return `IMC: ${valor} | peso normal!`;
  } else if (imc < 30) {
    return `IMC: ${valor} | Sobrepeso!`;
  } else if (imc >= 30) {
    return `IMC: ${valor} | Obesidade!`;
  }
}
const imc = calcularIMC(70, 1.75);
console.log(classificarIMC(imc));

// Exercício 7 - Frete
function calcularFrete(valorCompra) {
  if (valorCompra >= 200) {
    return 0;
  } else if (valorCompra >= 100) {
    return 10;
  } else {
    return 20;
  }
}
function calcularTotalComFrete(valorCompra) {
  const frete = calcularFrete(valorCompra);
  const total = valorCompra + frete;

  return `Compra: R$ ${valorCompra} | Frete: R$ ${frete} | Total: R$ ${total}`;
}
console.log(calcularTotalComFrete(250));
console.log(calcularTotalComFrete(150));
console.log(calcularTotalComFrete(80));

// Exercício 8 - Sistema de desconto progressivo
function calcularDesconto(valor) {
  if (valor >= 200) {
    return 0.2;
  } else if (valor >= 100) {
    return 0.1;
  } else {
    return 0;
  }
}
function calcularTotal(valor) {
  const taxa = calcularDesconto(valor);
  const desconto = valor * taxa;
  const totalFinal = valor - desconto;

  return `Valor: ${valor.toFixed(2)} | Desconto: ${desconto.toFixed(2)}% | Total: ${totalFinal.toFixed(2)}`;
}
console.log(calcularTotal(101));

// Exercício 9 - Sistema de aprovação com faltas
function calcularMedia(n1, n2) {
  return (n1 + n2) / 2;
}
function verificarAprovacao(media, faltas) {
  if (faltas > 5) {
    return `Reprovado por faltas`;
  }

  if (media >= 7) {
    return `Aprovado`;
  } else if (media >= 5) {
    return `Recuperação`;
  } else {
    return `Reprovado`;
  }
}
const minhaMedia = calcularMedia(9, 10);
console.log(verificarAprovacao(minhaMedia, 4));
