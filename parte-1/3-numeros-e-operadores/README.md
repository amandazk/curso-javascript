## Números
<br />

```javascript
var idade = 28;
var gols = 1000;
var pi = 3.14; // usar ponto para decimal
var exp = 2e10; // 20000000000
```
<br />

## Operadores Aritméticos
<br />

```javascript
var soma = 5 + 2; // 7
var subtracao = 5 - 2; // 3
var multiplicacao = 5 * 2; // 10
var divisao = 50 / 2; // 25
var expoente = 5 ** 5; // 3125
var modulo = 14 % 5; // 4
```
<br />

## Operadores Aritméticos em Strings
<br />

```javascript
var soma = '100' + 50; // 10050
var subtracao = '100' - 30; // 70
var multiplicacao = '100' * '5'; // 500
var divisao = 'Comprei 10' / 2; // NaN (not a number)
```
- É possível verificar se uma variável é NaN (not a number) ou não com a função isNaN( )
<br />

- A ordem importa
- Começa por multiplicação e divisão, depois por soma e subtração
```javascript
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40
```
- O parênteses é usado para priorizar uma expressão
<br />

## Operadores Aritméticos Unários
<br />

```javascript
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6
```
- Para o decremento seria:  -- x
- O incremento também pode ser escrito como: incremento = incremento + 1
<br />

- Os símbolos + e  - tentam transformar o valor seguinte em número
- O - antes de um número torna ele negativo
```javascript
var frase = 'Testando isso aqui';
+frase; // NaN
-frase; // NaN
// tenta transformar em número, mas não é possível

var idade = '23';
+idade; // 23 (número)
-idade; // -23 (número)
console.log(+idade + 5); // 28

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1
```
<br />

- [Guia completo de Operadores][Guia completo de Operadores]

[Guia completo de Operadores]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators




