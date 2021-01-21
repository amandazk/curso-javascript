// Crie um array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];
brasilCampeao.forEach(function(item) {
    console.log(`O Brasil ganhou a copa de ${item}`);
});
// Interaja com o array utilizando um loop para mostrar a 
// seguinte mensagem no console: 'O Brasil ganhou a copa de ${ano}'

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melão'];
for (i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
    if (frutas[i] === 'Pera') {
        break;
    }
}
// Coloque a útlima fruta do array acima em uma variável
ultimaFruta = frutas[frutas.length -1];
