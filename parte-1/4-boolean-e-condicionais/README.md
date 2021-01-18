## Boolean e condicionais
 - Existem dois valores booleanos: false ou true
 
```javascript
var idade = 28;
var gols = 1000;
var pi = 3.14; // usar ponto para decimal
var exp = 2e10; // 20000000000
```
<br />

### Condicionais If e Else
 - Verificar se uma expressão é verdadeira com if
 - Caso contrário, o else será ativado
 ```javascript
var possuiGraduacao = true;

if(possuiGraduacao) {
   console.log('Possui graduação');
} else {
   console.log('Não possui graduação');
}
// retorna 'Possui graduação' e não executa o else
```
<br />

### Else If
 - Se o if não for verdadeiro, ele testa o else if
```javascript
var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
   console.log('Possui graduação e doutorado');
} else if(possuiGraduacao)
   console.log('Não possui graduação, mas não doutorado');
} else {
   console.log('Não possui graduação');
}
// retorna 'Possui Graduação, mas não possui doutorado'
```
<br />

### Truthy e Falsy
 - Existem valores que retornam true e outros que retornam false quando verificados em um expressão booleana
```javascript
// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou `` 
```
```javascript
// Truthy
if(true)
if(1) 
if(' ')
if('amanda')
if(-5)
if({})
```
<br />

 - Operador lógico de negação → !
 - Nega uma operação booleana
 - !true = false
 - Para testar se uma expressão é Truthy ou Falsy:
```javascript
if(!!' ') // true
if(!!'') // false
```
<br />

### Operadores de comparação
 - Vão sempre retornar um valor booleano
```javascript
10 > 5; // true
5 > 10; // false
20 > 10; // false
10 <= 10; // true
10 >= 11; // false
```
<br />

 - O == faz uma comparação não tão estrita e o === faz uma comparação estrita, 
 ou seja, o tipo de dado deve ser o mesmo quando usamos o ===
```javascript
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15; // true
10 != '10'; // false
10 !== '10'; // true
```
<br />

### Operadores lógicos &&
 - && compara se uma expressão E a outra é verdadeira
```javascript
true && true; // true
true && false; // false
false && true; // false
'Gato' && 'Cão'; // 'Cão'
(5 - 5) && (5 + 5); // 0
'Gato' && false; // false
(5 >= 5) && (3 < 6); // true
```
 - Se ambos os valores forem true, ele irá retornar o último valor verificado
 - Se algum valor for false, ele irá retornar o mesmo e não irá continuar a verificar os próximos
<br />

### Operadores lógicos
 - || compara se uma expressão OU outra é verdadeira
```javascript
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // 'Gato'
(5 - 5) || (5 + 5); // 10
'Gato' || false; // 'Gato'
(5 >= 5) || (3 < 6); // true
```
 - Retorna o primeiro valor true que encontrar
 <br />

### Switch
 - Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case
 - Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break, para cancelar a continuação
 - O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira
```javascript
var corFavorita = 'Verde';

switch (corFavorita) {
   case 'Verde':
     console.log('Olhe para a grama');
     break;
   case 'Vermelho':
     console.log('Olhe para as rosas');
     break;
   case 'Azul':
     console.log('Olhe para o céu');
     break;
   default:
     console.log('Vá dormir');
```


 
