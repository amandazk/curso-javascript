// Mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);

paragrafos.forEach((item) => {
    console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => {
    console.log(item.innerText);
});

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');
imgs.forEach(item,index => { // colocar ()
    console.log(item, index);
});

let i = 0;
imgs.forEach( => { // colocar ()
    console.log(i++);
});

imgs.forEach(() => i++);
