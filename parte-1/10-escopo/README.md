## Escopo
### Escopo de função
 - Variáveis declaradas dentro de funções não são acessadas fora das mesma
```javascript
function mostrarCarro() {
    var carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // 'Fusca' no console
console.log(carro); // Erro, carro is not defined
```
 - Escopo evita o conflito entre nomes

### Variável Global(Erro)
 - Declarar variáveis sem a palavra chave **var**, **const** ou **let** cria uma variável
que pode ser acessada em qualquer escopo (global)
 -  **Isso é um erro**
```javascript
function mostrarCarro() {
    carro = 'Fusca';
    console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
```
 - 'use strict' previne esse erro

### Escopo de Função(Pai)
 - Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas
funções
```javascript
var carro = 'Fusca';

function mostrarCarro() {
    var frase = `Meu carro é um ${carro}`;
    console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca
```

### Escopo de Bloco
 - Escopo de bloco -> bloco não é aberto por função
 - Variáveis criadas com **var**, vazam o bloco
 - Por isso, com a introdução do ES6, a melhor forma de declararmos uma variável
é utlizando **const** e **let**, pois estas respeitam o escopo de bloco
```javascript
if(true) {
    var carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // Carro
```

**Var vaza o bloco**
 - Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting
 e o valor ficará como undefined
```javascript
if(false) {
    var carro = 'Fusca';
    console.log(carro);
}
console.log(carro); // undefined
```
 - Por isso, é mais recomendado usar **const** e **let**

**{} cria um bloco**
 - Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

**For Loop**
 - Ao utilizar **var** dentro de for loop, que é um bloco, o valor da variável utilizada
irá vazar e existir fora do loop

### Const
 - Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor
da variável, evitando bugs no código
```javascript
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
    dia: 28,
    mes: 'Dezembro',    
    ano: 2018,
}

data.dia = 29; // funciona
data = 'Janeiro'; // erro
```

### Let
 - Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do
 valor da variável
```javascript
let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável
```



