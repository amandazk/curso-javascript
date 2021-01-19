## Objetos
 - Conjunto de variáveis e funções, que são chamadas de propriedades e métodos
 - Para que serve um objeto? Para organizar o código em pequenas partes reutilizáveis
```javascript
var pessoa = {
    nome: 'Amanda',
    idade: 23;
    profissao: 'Estudante',
    possuiFaculdade: true,
}

pessoa.nome; // 'Amanda'
pessoa.possuiFaculdade; // true
```
 - Propriedades e métodos consistem em nome(chave) e valor
<br />

### Métodos
 - É uma propriedade que possui uma função no local do seu valor
```javascript
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    }
    perimetro: function(lado) {
        return this.lados * lado;
    },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20
// this faz referência ao próprio objeto -> quadrado
```
 - Abreviação de area: function( ) { } para area( ) { }
<br />

### Dot Notation Get
 - Acesse propriedades de um objeto utilizando o ponto 
```javascript
var menu = {
    width: 600,
    height: 50,
    backgroundColor: '#84E',
}

menu.color = 'blue'; // adicionar nova propriedade
var bg = menu.backgroundColor; // '#84E'
```
<br />

### Protótipo e Herança
 - O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo (Object)
```javascript
var menu = {
    width: 800,
}

menu.hasOwnProperty('width') // true
menu.hasOwnProperty('height') // false
```
 - hasOwnProperty é um método de Object

