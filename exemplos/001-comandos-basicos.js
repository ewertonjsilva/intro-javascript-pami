// comentário de 1 linha
console.log('Hello world!');
/*
    comentário de mais 
    de uma linha
*/

/* 
    Pesquisar a diferença entre as instruções
    var, let e const na linguagem java-script
*/

let nome = 'Ewerton';
let idade = 35;
let altura = 1.76;
let trabalha = true;
let corFavorita = 'laranja';
let cores_favoritas = ['laranja', 'roxo', 'verde', 'azul'];
let endereco = {
    'logradouro'    : 'Rua', 
    'nome_log'      : 'Brasil', 
    'n'             : '105 A', 
    'bairro'        : 'centro'
}; 
let covid;
let dengue = null; 
const exfunc = () => {};

console.log('Variável nome = ' + typeof(nome));
console.log('Variável idade = ' + typeof(idade));
console.log('Variável altura = ' + typeof(altura));
console.log('Variável trabalha = ' + typeof(trabalha));
console.log('Variável corFavorita = ' + typeof(corFavorita));
console.log('Variável cores_favoritas = ' + typeof(cores_favoritas));
console.log('Variável endereco = ' + typeof(endereco));
console.log('Variável covid = ' + typeof(covid));
console.log('Variável dengue = ' + typeof(dengue));
console.log('Variável exfunc = ' + typeof(exfunc));