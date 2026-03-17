// Dia 04 - Funções

// Exercício 1 - Saudação, crie um função chamada saudacao e ela deve mostrar "Olá, seja bem-vindo(a)!"
function saudacao() {
  return `Olá, Seja bem-vindo(a)`;
}
console.log(saudacao());

// Exercício 2 - Mostrar nome
function mostrarNome(nome) {
  return `Seu nome é: ${nome}`;
}
console.log(mostrarNome('Simone'));

// Exercício 3 - Soma
function somar(num1, num2) {
  return num1 + num2;
}
console.log(somar(2, 4));

// Exercício 4 - Multiplicação
function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(2, 4));

// Exercício 5 - Verificar idade
function verificarIdade(idade) {
  if (idade >= 18) {
    return `Maior de idade`;
  } else {
    return `Menor  de idade`;
  }
}
console.log(verificarIdade(17));

// Exercício 6 - Area do retangulo
function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
}
console.log(calcularAreaRetangulo(80, 1.75));

// Exercício 7 - Dobro de um número
function dobro(numero) {
  return numero * 2;
}
console.log(dobro(5));

// Exercício 7 - Número par
function numeroPar(numeroDois) {
  if (numeroDois % 2 === 0) {
    return `Número par`;
  } else {
    return `Número ímpar`;
  }
}
console.log(numeroPar(3));

// Exercício 8 - Maior número
function maiorNumero(num1, num2) {
  if (num1 > num2) {
    return `O número ${num1} é Maior`;
  } else if (num2 > num1) {
    return `O número ${num2} é Maior`;
  } else {
    return `Os números são iguais`;
  }
}
console.log(maiorNumero(10, 10));
