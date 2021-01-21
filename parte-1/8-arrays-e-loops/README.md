## Arrays e Loops
### Array
 - É um grupo de valores geralmente relacionados
 - Servem para guardarmos diferentes valores em uma única variável
```javascript
var videoGames = ['Switch', 'PS5', 'Xbox'];

videoGames[0] // Switch
videoGames[2] // Xbox
```
 - Para acessar um elemento do array: [n]

### Métodos e Propriedades de um Array
```javascript
var videoGame = ['Switch', 'PS5', 'Xbox'];

videoGame.pop(); // Remove o último item e retorna ele
videoGame.push('3DS'); // Adiciona ao final do array
videoGame.length; // 3
```
 - Existem diversos outros métodos, como map, reduce, forEach, etc

### For Loop
 - Fazem algo repetidamente até que uma condição seja atingida
```javascript
for (var numero = 0; numero < 10, numero ++) {
    console.log(numero);
}
// retorna de 0 a 9 no console
```
 - O for loop possui 3 partes: início, condição e incremento

### While Loop
```javascript
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
// retorna de 0 a 9 no console
```

### Arrays e Loops
```javascript
var videoGames = ['Switch', 'PS5', 'Xbox'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i]);
}
```

### Break
 - O loop irá parar caso encontre a palavra break
```javascript
var videoGames = ['Switch', 'PS5', 'Xbox', '3DS'];
for (var i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i];
    if(videoGames[i] === 'PS4') {
        break;
   }
}
```
### forEach
 - É um método que executa uma função para cada item do Array
 - É uma forma mais simples de utilizar um loop com arrays (ou array-like)
```javascript
var videoGames = ['Switch', 'PS5', 'Xbox', '3DS'];
videoGames.forEach(function(item, index) {
    console.log(item, index);
});
// o argumento item será atribuido automaticamente
```
 - É possível passar os seguintes parâmetros: item, index e array
