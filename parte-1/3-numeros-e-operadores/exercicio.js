// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
var resultado = 35;

// Crie duas expressões que retornem NaN
var frase = 'Tenho 10' / 2; // NaN
var frase2 = +'Olá'; // NaN

// Somar a string '200' com o número 50 e retornar 250
var soma = +'200' + 50;
;console.log(soma); // 250

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN

// Resolução
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade;
