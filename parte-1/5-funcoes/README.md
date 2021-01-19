## Funções
 - Bloco de código que pode ser executado e reutilizado
 - Valores podem ser passados por uma função e a mesma retorna outro valor
```javascript
function areaQuadrado(lado) {
    return lado * lado;
}

areaQuadrado(4) // 16
areaQuadrado(5) // 25
areaQuadrado(2) // 4
```
< \br>

### Parâmetros e Argumentos
 - Ao criar uma função, você pode definir parâmetros
 - Ao executar uma função, você pode passar argumentos
```javascript
// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

imc(80, 1.80); // 80 e 1.80 são os argumentos
```
 - Separar por vírgula cada parâmetros
 - Você pode definir mais de um parâmetro ou nenhum também
```javascript
function corFavorita(cor) {
    if(cor === 'azul') {
        return 'Você gosta do céu';
    } else if(cor === 'verde') {
        return 'Você gosta de mato';
    } else {
        return 'Você não gosta de nada';
    }
}

corFavorita(); // retorna 'Você não gosta de nada'
```
 - Se apenas definirmos a função com o function e não executarmos a mesma, nada
que estiver dentro dela irá acontecer
<\ br>

### Argumentos podem ser funções
 - Chamadas de Callback, geralmente são funções que ocorrem após algum evento
```javascript
addEventListener('click', function() {
    console.log('Clicou');
});
// a função possui dois argumentos
// primeiro é a string 'click'
// segundo é uma função anônima
```
 - Funções anônimas: aquelas em que o nome da função não é definido
 - Escritas com function( ) { } ou ( ) ⇒ { }
 - Para visualizar melhor:
```javascript
function mostraConsole() {
    console.log('Olá');
}

addEventListener('click', mostraConsole);
```
<\ br>

### Pode ou não retornar um valor
 - Quando não definimos o return, ela irá retornar undefined
 - O código interno da função é executado normalmente, independente de existir valor de 
return ou não
```javascript
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}

imc(80, 1.80); // retorna o imc
console.log(imc(80, 1.80)); // retorna o imc e undefined
```
<\ br>

### Valores retornados
 - Uma função pode retornar qualquer tipo de dado e até outras funções
```javascript
function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
        return 'Informe a sua idade';
    } else if(idade >= 60) {
        return true;
    } else {
        return false;
    }
}
```
 - Retornar diferentes tipos de dados, como feito no código acima, não é uma boa prática
 - Quando o código faz um return, ele ignora tudo o que vem depois
<\ br>

### Escopo léxico
 - Funções conseguem acessar variáveis que foram criadas no contexto pai
 - As variáveis da função podem ser usadas somente dentro do escopo da função. Se usadas
fora, serão indefinidas
 - Mas se uma variável for criada fora do escopo da função, é possível usá-la dentro da função
```javascript
var profissao = 'Policia';

function dados() {
    var nome = 'Amanda';
    var idade = 23;
    function outrosDados() {
        var endereco = 'Santa Catarina';
        var idade = 24;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}

dados(); // retorna 'Amanda, 24, Santa Catarina, Policia'
outrosDados(); // retorna um erro
```
<\ br>

### Hoisting
 - Antes de executar uma função, o javascript 'move' todas as funções declaradas para a memória
```javascript
imc(80, 1.80) // imc aparece no console

function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
}
```
