// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Ford';
    let portas = 4;
}
console.log(var, marca, portas);
// console.log no var
// Escopo de bloco -> não consigo acessar var e let do lado de fora


//Como corrigir o erro abaixo?
function somarDois(x) {
    const dois = 2;
    return x + 2;
}
function dividirDois(x) {
    return x / dois;
}
somarDois(4);
somarDois(6);
// Resolução:
const dois = 2;
function somarDois(x) { 
    return x + 2;
}
function dividirDois(x) {
    return x / dois;
}
somarDois(4);
somarDois(6);


// O que fazer para total retornar 500?
var numero = 50;

for (var  numero = 0; numero < 10; numero ++) {
    console.log(numero);
}

const total = 10 * numero;
console.log(total);
// Trocar o var do for por let
// O primeiro var numero poderia ser uma const
