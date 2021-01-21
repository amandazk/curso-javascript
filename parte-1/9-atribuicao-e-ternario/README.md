## Atribuição e Ternário
### Operadores de Atribuição
 - Podem funcionar como formas abreviadas
```javascript
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)
```

### Operador Ternário
 - Abreviação de condicionais com if e else
```javascript
var idade = 19;
var podeBeber = (idade >= 18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // Pode beber

// condição ? true : false
```
 - Geralmente utilizado quando é necessário atribuir um valor para uma variável, dependendo de uma condição

### If Abreviado
 - Não é necessário abrir e fechar as chaves {} quando retornamos apenas uma linha de código
```javascript
ver possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdade');

// ou
if (possuiFaculdade)
    console.log('Possui faculdade');
else
	console.log('Não possui faculdade');
```
