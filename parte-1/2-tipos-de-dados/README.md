## Definição
<br />

- São 7 tipos de dados que existem
- Todos são primitivos, exceto os objetos → primitivos são dados imutáveis  
```javascript
var nome = 'Amanda'; // string
var idade = 23; // number
var possuiFaculdade = true; // boolean
var time; // undefined
var comida = null; // null
var simbolo = Symbol(); // symbol
var novoObj = {}; // object
```
<br />

- Para verificar o tipo de dado de uma variável:

```javascript
var nome = 'Amanda';
console.log(typeof nome);
});
```
- O null vai retornar como uma variável do tipo object
<br />

## Strings
<br />

- A soma de strings é a concatenação. Como por exemplo:
```javascript
var nome = 'Amanda';
var sobrenome = 'Zacharuk';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);
```
<br />

- Somar um número com string
```javascript
var gols = 100;
var frase = 'Eu fiz ' + gols + ' gols.'
console.log(frase);
```
- O resultado vai ser uma string
<br />

- Aspas duplas e simples
```javascript
'Javascript é "super" fácil';
"Javascript é 'super' fácil";
"Javascript é \"super\" fácil";
`Javascript é "super" fácil"`;
"Javascript é "super" fácil"; // inválido
'Javascript é 'super' fácil'; // inválido
```
- Template string
```javascript
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // utilizando o template string
```
<br />