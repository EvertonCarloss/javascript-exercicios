// Dia 3 - revisão

// Exercício 1 - Acesso ao sistema
let usuario = 'admin',
  senha = '1235';
if (usuario === 'admin' && senha === '1234') {
  console.log(`Acesso permitido!`);
} else {
  console.log(`Acesso negado!`);
}

//  Exercício 2 - Verificar Número
const numero = 1;
if (numero > 0) {
  console.log(`Número positivo!`);
} else if (numero < 0) {
  console.log(`Número negativo!`);
} else {
  console.log(`Número zero!`);
}

// Exercício 3 - Sistema de temperatura
const temperatura = 30;
if (temperatura >= 30) {
  console.log(`Muito quente!`);
} else if (temperatura >= 20) {
  console.log(`Clima agradável!`);
} else if (temperatura >= 10) {
  console.log(`Frio`);
} else {
  console.log(`Muito frio!`);
}

// Exercício 4 - Sistema de login simples
const estaLogado = false;
if (estaLogado) {
  console.log(`Bem-vindo ao sistema`);
} else {
  console.log(`Faça login para continuar!`);
}

// Exercício 5 - Verificar múltiplas
const verificar = 4;
if (verificar % 3 === 0) {
  console.log(`É múltiplo de 3!`);
} else {
  console.log(`Não é múltiplo de 3!`);
}

// Exercício 6 - Sistema de idade
const verificarIdade = 17;
if (verificarIdade <= 12) {
  console.log(`Criança`);
} else if (verificarIdade <= 17) {
  console.log(`Adolescente`);
} else if (verificarIdade <= 59) {
  console.log(`Adulto`);
} else if (verificarIdade >= 60) {
  console.log(`Idoso`);
}
