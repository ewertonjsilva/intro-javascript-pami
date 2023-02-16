// fazendo referência para biblioteca de entrada de dados
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');

console.log('Nome digitado: ' + nome);
console.log('-----------------------');

// trabalhando com números do jeito errado
// let n1 = entrada('Digite o 1º número: ');
// let n2 = entrada('Digite o 2º número: ');

// do modo correto
let vDigitado; 
vDigitado = entrada('Digite o 1º número: ');
let n1 = parseInt(vDigitado);
// existe o parseFloat para Decimal
vDigitado = entrada('Digite o 2º número: ');
let n2 = parseInt(vDigitado);

let soma = n1 + n2;
let subtracao = n1 - n2;
let multiplicacao = n1 * n2;
let divisao = n1 / n2; // divisão que armazena o resultao completo
let resto = n1 % n2; // resto da divisão

console.log('Resultado da soma entre ' + n1 + ' e ' + n2 + ' = ' + soma);
console.log('Resultado da subtração entre ' + n1 + ' e ' + n2 + ' = ' + subtracao);
console.log('Resultado da multiplicação entre ' + n1 + ' e ' + n2 + ' = ' + multiplicacao);
console.log('Resultado da divisão entre ' + n1 + ' e ' + n2 + ' = ' + divisao.toFixed(2));
console.log('Resultado do inteiro da divisão entre ' + n1 + ' e ' + n2 + ' = ' + parseInt(divisao));
console.log('Resultado do resto da divisão entre ' + n1 + ' e ' + n2 + ' = ' + resto);

console.log('');
entrada('Pressione enter para encerrar...');