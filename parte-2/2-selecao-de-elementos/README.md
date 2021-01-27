## Seleção de Elementos
### ID
 - ***getElementById*** seleciona e retorna elementos do DOM
```javascript
// Seleciona pelo ID
const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');
```

### Classe e TAg
 - ***getElementsByClassName*** e ***getElementsByTagName*** selecionam e retornam
uma lista de elementos do DOM
 - A lista retornada está ao vivo, ou seja, se elementos forem adicionados
ela será automaticamente atualizada
```javascript
// Seleciona pela classe, retorna uma HTMLCollecion
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato');

// Seleciona todas as UL's, retorna uma HTMLCollecion
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(GridSection[0]);
```

### Seletor Geral Único
 - ***querySelector*** retorna o primeiro elemento que combinar com o seu seletor CSS
```javascript
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-list li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');
```

### Seletor Geral Lista
 - ***querySelectorAll*** retorna todos os elementos compatíveis com o seletor
CSS em uma NodeList
```javascript
const gridSection = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(gridSection[2]);
```
 - Diferente do ***getElementByClassName***, a lista aqui é estática


