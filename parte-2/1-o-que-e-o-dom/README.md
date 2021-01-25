## O que é o DOM
### Document Object Model (DOM)
 - É uma interface que representa documentos HTML e XML através de objetos
 - Com ela é possível manipular a estrutura, estilo e conteúdo destes documentos
```javascript
console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades

window.innerHeight; // retorna a altura do browser
```
 - Ao inspecionar elementos com o navegador, você está vendo a representação
oficial do DOM

### Window e Document
 - São os objetos principais do DOM
 - Boa parte da manipulação é feita através dos seus métodos e propriedades
```javascript
window.alert('Isso é um alerta');
alert('Isso é um alerta'); // funciona

document.querySelector('h1'); // seleciona o primeiro h1
documento.body; // retorna o body
```
 - window é um objeto global, por isso não precisamos chamar ele na frente dos
seus métodos e propriedades

### Node
 - Toda tag html é representada pelo objeto Element e por isso herda os seus
métodos e propriedades
 - Element é um tipo de objeto Node
```javascript
const titulo = document.querySelector('h1');

titulo.innerText; // retorna o texto
titulo.classList; // retorna as classes
titulo.id; // retorna o id
titulo.offsetHeight; // retorna a altura do elemento

titulo.addEventListener('click', callback);
// ativa a função callback ao click no título
```
