## Sintaxe Básica

```javascript
const nome = "Amanda"

function somar(a,b) {
   return a+b;

somar(2,4);
// resultado 6
```

```javascript
const btn = document.querySelector('.btn);

btn.addEventListener('click', function() {
   btn.classList.add('ativo');
});
```
<br />

## Variáveis

```javascript
var nome = 'Amanda';
var idade = 23;
var possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);
```
<br />

- São responsáveis por guradar dados na memória
- Inicia com a palavra var, let ou const
- Servem para evitar repetição

<br />

```javascript
var preco = 50;
var totalComprado = 2;
var precoTotal = preco * totalComprado;

console.log(precoTotal);
```
<br />

- É possível declarar mais de uma variável de uma vez, usando vírgula
```javascript
var sobrenome = 'Zacharuk', 
    cidade = 'Joinville';
```
<br />

- É possível declarar uma variável sem valor
```javascript
var precoTotal ;
```
<br />

### Nomes de variáveis:
- Podem iniciar com $, underline ou letras
- Podem conter números, mas não iniciar com eles
- Case sensitive → nome ≠ Nome
- Não pode utilizar palavras reservadas
- Camel case → precoTotalCompra
```javascript
// Inválido
var @nome;
var function;
var 2possuiFaculdade;

// Válido
var $selecionar;
var _nome;
var possuiFaculdade;
```
<br />

- É necessário sempre declarar a variável antes de utilizá-las 
```javascript
console.log(nome);
// retorna 'nome is not defined'
```
<br />

### Hoisting
- São movidas para cima do código, porém o valor atribuído não é movido
```javascript
console.log(nome);
car nome = 'Amanda';
// vai retornar 'undefined'

var idade = 23;
console.log(idade);
// vai retornar '23'
```
- Aparece undefined porque é como se o código estivesse sendo escrito assim:
```javascript
var nome;
console.log(nome);
var nome = 'Amanda';
```
<br />

- É possível mudar o valor atribuído a variáveis declaradas com var e let
- Porém, não é possível modificar valores das declaradas com const

```javascript
var curso = 'BSI';
var curso = 'Letras';
// Ou
curso = 'Letras';

let curso = 'BSI';
curso = 'Letras';
```


