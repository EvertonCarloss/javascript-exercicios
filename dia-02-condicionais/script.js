// Dia 02 - Exercícios condicionais

// Exercício 1 - Número positivo ou negativo, crie uma variável e verifique.
const numero = 1;
if (numero > 0) {
  console.log(`Número Positivo`);
} else {
  console.log(`Numero Negativo`);
}

// Exercício 2 - Par ou ímpar.
const parOuImpar = 2;
if (parOuImpar % 2 == 0) {
  console.log(`O número é Par`);
} else {
  console.log(`O número é Ímpar`);
}

// Exercício 3 - Verificar idade.
const verificarIdade = 18;
if (verificarIdade >= 18) {
  console.log(`Maior de idade`);
} else if (verificarIdade > 14) {
  console.log(`Adolescente`);
} else {
  console.log(`Criança`);
}

// Exercício 4 - Maior número
const num1 = 11,
  num2 = 11;
if (num1 > num2) {
  console.log(`Entre os número ${num1} e ${num2} o número ${num1} é maior`);
} else if (num2 > num1) {
  console.log(`Entre os número ${num2} e ${num1} o número ${num2} é maior`);
} else {
  console.log(`Os número ${num1} e ${num2} são iguais`);
}

// Exercício 5 - Sistema de notas
const nota = 10;
if (nota >= 7) {
  console.log(`Aprovado`);
} else if (nota >= 5) {
  console.log(`Recuperação`);
} else {
  console.log(`Reprovado`);
}

//  Exercício 6 - Pode dirigir.
const idade = 18,
  possuiCarteira = false;
if (idade >= 18 && possuiCarteira) {
  console.log(`Pode dirigir.`);
} else if (idade >= 18 && !possuiCarteira) {
  console.log(`Maior idade, mas precisar tirar carteira. Não pode dirigir.`);
} else {
  console.log(`Não pode dirigir.`);
}

// Exercício 7 - Sistema de desconto.
const valorCompra = 1100;
if (valorCompra >= 1000) {
  console.log(`Parabéns recebeu 20% de desconto.`);
} else if (valorCompra >= 500) {
  console.log(`Parabéns você recebeu 10% de desconto.`);
} else {
  console.log(`Sem descontos.`);
}
