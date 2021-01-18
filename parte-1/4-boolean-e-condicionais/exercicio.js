// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado, coloque no console 'É maior', 'É igual', 'É menor'
var minhaIdade = 23;
var idadeIrma = 18;

if (minhaIdade > idadeIrma) {
    console.log('É maior');
} else if(minhaIdade < idadeIrma) {
    console.log('É menor');
} else {
    console.log('É igual');
}

// Qual o valor retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 -2);
// false

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Amanda'; // Truthy
var idade = 23; // Truthy
var possuiDoutorado = false; // Falsy
var empregoFuturo; // Falsy
var dinheiroNaConta = 0; // Falsy

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china 1340;

if (brasil > china) {
    console.log('Brasil maior que China');
} else {
    console.log('China maior que Brasil');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}
// Verdadeiro

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log('Falso');
}
// Cão
