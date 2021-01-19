// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor) {
    return !!valor;
}

valorTruthy(10);

// Crie uma função matemática que retorne o perímetro de um quadrado
function perimetroQuadrado(lado) {
    return lado * 4;
}

perimetro(4);

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
}

nomeCompleto('Amanda', 'Zacharuk')

// Crie uma função que verifica se um número é par
function numeroPar(numero) {
    if (numero % 2 === 0){
        return true;    
    } else {
        return false;
    }
}

numeroPar(4);

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(dado) {
    return typeof dado;
}

// addEventListener é uma função nativa do javascript
// o primeiro parâmetro é o evento que ocorre e o segundo é o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento scroll ocorrer
addEventListener('scroll', function() {
    console.log('Amanda Zacharuk');
})


// corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
// correção:
 var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

