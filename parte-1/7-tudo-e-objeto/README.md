## Tudo é objeto
 - Strings, números, boolean, objetos e mais, possuem propriedades e métodos. Por isso são objetos
<br />

### Strings
```javascript
var nome = 'Amanda';

nome.length; // 6
nome.charAt(1); // 'm'
nome.replace('da', 'fa'); // 'Amanfa'
nome; // 'Amanda'
```
 - Uma string herda propriedades e métodos do construtor String()
<br />

### Números
```javascript
var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'
```
 - Por um breve momento, o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos
<br />

### Funções
```javascript
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // total de argumentos que a função possui = 1
```
<br />

### Elementos do DOM
```html
<a class="btn">Clique</a>
```
```javascript
var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adicionar a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
    console.log('Clicou');
})
```
 - Praticamente todos os efeitos com javascript são feitos utilizando propriedades e métodos de objetos do DOM

