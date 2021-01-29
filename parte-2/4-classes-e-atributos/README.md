## Classes e Atributos
### classList
 - Retorna uma lista com as classes do elemento
 - Permite adicionar, remover e verificar se contém
```javascript
const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes 
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile' ); // duas classes
menu.classList.remove('ativo'); 
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classLis.replace('ativo', 'inativo');
```

### attributes
 - Retorna um array-like com os atributos do elemento
```javascript
const animais = document.querySelector('.animais');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo
```

### getAttribute e setAttribute
 - Métodos que retornam ou definem de acordo com o atributo selecionado
```javascript
const img = document.querySelector('img');

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true ou false
img.removeAttribute('alt'); // remove o alt

img.hasAttribute(); //true ou false se tem algum atributo
```

### Read Only vs Writable
 - Existem propriedades que não permitem a mudança de seus valores. Essas
são consideradas Read Only, ou seja, apenas leitura
```javascript
const animais = document.querySelector('.animais');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attribute = 'class ="ativo"'; // não funciona, read-only
```
 - Lembrando que é possível modificar o valor de uma propriedade com 
***objeto.propriedade = ''***

